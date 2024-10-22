'use client';                            // This is a directive for Next.js to indicate that this component should run on the client side.   
 // It's specific to Next.js to differentiate server-side rendering (SSR) from client-side rendering (CSR).                 

import { useEffect, useState } from 'react';                   // Importing `useEffect` and `useState` from React.  // `useState` is used to manage component state, and `useEffect` handles side effects (like data fetching or setting up listeners).
import ThemeContext from "../../context/themeContext";        // Importing a context, `ThemeContext`, which will allow this component to share the current theme state (dark or light mode) // with other components in the app.


const ThemeProvider = ({ children }: { children: React.ReactNode }) => {             // This defines a functional React component named `ThemeProvider`.  // It accepts a `children` prop, which represents the nested components inside the provider. // The type of `children` is explicitly defined as `React.ReactNode`, a type that represents all valid React elements.
    
    const themeFromStorage: boolean =
    typeof localStorage !== 'undefined' && localStorage.getItem('hotel-theme') ? JSON.parse(localStorage.getItem('hotel-theme')!) : false;         // Here, you're checking if `localStorage` is available (since it might not be available on the server-side).  // If it is available and there's a stored value for 'hotel-theme', it's parsed from a JSON string into a boolean.  // Otherwise, the default theme is set to `false`, which likely corresponds to the light theme.
    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);            // `darkTheme` is a state variable that holds the current theme (true for dark mode, false for light mode).  // `setDarkTheme` is the function that updates this state.     // The initial state is set to `themeFromStorage`, which could be either `true` (dark mode) or `false` (light mode).
    const [renderComponent, setRenderComponent] = useState(false);                   // This is another state variable, `renderComponent`, which starts as `false`.  // It will be used to control whether the component should render or not (important for SSR handling).


    useEffect(() => { 
        setRenderComponent(true);   // This is a `useEffect` hook that runs once when the component mounts (the empty dependency array `[]` ensures it only runs once).   // It sets `renderComponent` to `true`, meaning the component should now render.  // This is important to avoid issues where `localStorage` is accessed during server-side rendering (Next.js might render this component on the server).
    }, []);

        if (!renderComponent) return <></>;      // If `renderComponent` is still `false`, the component returns an empty fragment and nothing gets rendered.  // This ensures that `localStorage` access happens only on the client-side, preventing errors during server-side rendering.
         
    return ( 
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}> 
            <div className='dark:text-white dark:bg-black text-[#1E1E1E]'>
            {children} 
        </div>
        </div>
    </ThemeContext.Provider>
);
};

export default ThemeProvider;



//<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
    // Here, you're returning the JSX for the component.
    // `ThemeContext.Provider` is wrapping the children, and it's providing the current theme (`darkTheme`) and 
    // a function to update it (`setDarkTheme`) to any components that consume this context.
    

    //<div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        // This `div` sets up a class depending on whether `darkTheme` is `true` or `false`.
        // If `darkTheme` is `true`, the class `dark` is added, which can be used for applying dark mode styles.
        // `min-h-screen` ensures that the div takes up at least the full height of the screen.

//<div className='dark:text-white dark:bg-black text-[#1E1E1E]'>
            // This `div` sets the text and background color based on the theme.
            // `dark:text-white dark:bg-black` applies white text and a black background if dark mode is active.
            // `text-[#1E1E1E]` applies a dark gray color when light mode is active.
            
            
            //{children}
            // This is where the `children` are rendered. These are the nested components passed to the `ThemeProvider`.

            //</ThemeContext.Provider>
    // The `ThemeContext.Provider` ensures that any component within this provider can access the `darkTheme` value and 
    // the `setDarkTheme` function to toggle the theme.