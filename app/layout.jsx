"use client";

import { Source_Sans_3, Ubuntu } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Head from 'next/head';

// import i18n (needs to be bundled ;))
import "./i18n";

import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";


const sourceSans = Source_Sans_3({ subsets: ["latin"] , variable: "--font-sourceSans" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-ubuntu" });

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html className={` ${sourceSans.variable} ${ubuntu.variable} `}> 
      <title>Eunomia</title>
       <body> 
        {/* <body className={`${ubuntu.className} ${sourceSans.className} `}>  */}
        <Header/>
        {isClient ? (
         <>
            {children}
        </>
        ) : null}
        <Footer />
    </body> 
    </html>
  );
}
