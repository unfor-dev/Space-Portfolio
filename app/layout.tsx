import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarBackground from "@/Components/main/StarBackground";
import Navbar from "@/Components/main/Navbar";
import Footer from "@/Components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space",
  description: "Space Portpholio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        <StarBackground />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
