import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { geistSans, geistMono, pacifico, roboto_mono } from "../styles/fonts";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export const metadata: Metadata = {
  title: "My Portfolio", // Change this to your desired title
  description: "Welcome to my portfolio website!", // Update the description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.variable} antialiased`}
      >
        <ShootingStars />
        <StarsBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
