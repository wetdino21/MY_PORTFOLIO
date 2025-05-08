import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { geistSans, geistMono, pacifico, roboto_mono } from "../styles/fonts";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
