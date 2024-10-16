/**
 * This file defines the root layout for the Next.js application. It includes global styles, 
 * sets metadata for the app, and imports essential components like the Header. 
 * Additionally, it configures the "Open Sans" Google font with specific subsets, weights, 
 * and styles to be used throughout the app.
 */
// Importing necessary types and components
import type { Metadata } from "next";                                     // 'Metadata' is a type used for defining metadata for the Next.js page.
import { Open_Sans } from "next/font/google";                             // Importing 'Open_Sans' font from Google Fonts via Next.js Font API.
import Header from "./components/Header/Header";                          // Importing the 'Header' component for the layout and global CSS styles.
import Footer from "./components/Footer/Footer";                          // Importing the 'Header' component for the layout and global CSS styles.
import "./globals.css";

//Setting up the 'Open Sans' font with different subsets, weights, and styles.
const open_sans = Open_Sans({ 
  subsets: ["latin"],                                                     //Subsets: Latin characters.
  weight: ["400", "500", "700", "800"],                                   //Weights: 400 (normal), 500 (medium), 700 (bold), and 800 (extra bold)
  style: ['italic', 'normal'],                                            //Styles: Both italic and normal.
  variable: "--font-open-sans",                                           //Variable: Custom CSS variable (--font-open-sans) for global use.
});

//Metadata for the application.
export const metadata: Metadata = {
  title: "Jayaru Guest House",                                            //Title: Sets the title of the webpage.
  description: "Best Guest House in Polonnaruwa",                         //Description: Provides a short description of the webpage for SEO purposes.
};

//RootLayout component:
export default function RootLayout({                                      //This is the top-level layout of the application.
  children,                                                               //It wraps the entire application in an HTML and Body tag.
}: Readonly<{                                                             //It applies the 'Open Sans' font and renders the 'Header' component and any children passed to it.
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <main className="font-normal">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
