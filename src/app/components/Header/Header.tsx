'use client';



/**
 * Header component for the application layout.
 * It includes navigation links, a user authentication icon, and a dark mode toggle icon.
 * The header is responsive, with elements flexing to adjust based on screen size.
 */
import Link from "next/link";                                                                                                   // Importing Next.js Link component for client-side navigation
import { useContext } from "react";
import {FaUserCircle} from "react-icons/fa";                                                                                    // Importing user icon from react-icons
import {MdDarkMode, MdOutlineLightMode} from "react-icons/md";                                                                                      // Importing dark mode icon from react-icons
import ThemeContext from "@/app/context/themeContext";

/**
 * Functional component representing the header section of the webpage.
 * @returns JSX representing the header layout with navigation links and icons.
 */
const Header = () => {
    const { darkTheme, setDarkTheme} = useContext(ThemeContext); 

    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">      {/* Header container with padding and responsive layout settings */}
            <div className="flex items-center w-full md:2/3">                                                             {/* Main navigation area with flexbox for layout control on medium and larger screens */}
                <Link href="/" className="font-black text-tertiary-dark">                                                        {/* Link to the homepage with bold and orange-styled text */}  
                Jayaru Guest House
                </Link>
                <ul className="flex items-center ml-5">                                                                       {/* List containing icons for user authentication and dark mode */}  
                    <li className="flex items-center">                                                                        {/* User authentication icon that redirects to the auth page */}
                        <Link href='/auth'>
                        <FaUserCircle className='cursor-pointer'/>
                        </Link>
                    </li>
                    <li className='ml-2'>
                        {darkTheme ? (
                        <MdOutlineLightMode 
                        className="cursor-pointer"
                        onClick={() => {
                            setDarkTheme(false);
                            localStorage.removeItem('hotel-theme');
                        }}
                        />
                        ) : (
                        <MdDarkMode className='cursor-pointer'onClick={() =>{
                            setDarkTheme(true);
                            localStorage.setItem('hotel-theme',"true");
                        }}/>      
                        )}                                                         {/* Dark mode toggle icon */}
                    </li>
                    </ul>   
            </div>

            {/* Secondary navigation menu with links to other pages like Home, Rooms, and Contact */}
                <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
                    <li className="hover:-translate-y-2 duration-500 transition-all">                                          {/* Link to the homepage with hover effect for smooth transition */}
                    <Link href='/'>Home</Link>
                    </li>
                    <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href='/rooms'>Rooms</Link>
                    </li>
                    <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href='/contact'>Contact</Link>
                    </li>

                </ul>
        </header>
        );
};

    export default Header;