
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Layout } from "../components/Layout";


export const metadata: Metadata = {
  title: "Web Profile",
  description: "Generated by create next app",
};


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {


    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <Layout >
                {children}
            </Layout>
        </html>
    );
}
