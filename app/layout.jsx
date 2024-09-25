"use client";

import { Source_Sans_3, Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Head from 'next/head';

// import i18n (needs to be bundled ;))
import "./i18n";

import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";


const sourceSans = Source_Sans_3({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html hola="bye">
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body >
        <Header/>
        {isClient ? (
         <>
            <h1 className={inter.className}></h1>
            <h2 className={inter.className}></h2>
            <h3 className={inter.className}></h3>
            <h4 className={inter.className}></h4>
            <h5 className={inter.className}></h5>
            <h6 className={inter.className}></h6>
            <p className={sourceSans.className}></p>
            {children}
        </>
        ) : null}
        <Footer />
      </body>
    </html>
  );
}
