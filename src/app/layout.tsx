import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { geistSans, geistMono, pacifico, roboto_mono } from "../styles/fonts";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import ButterflyWithSparkles from "@/components/ui/ButterflyWithSparkles";
import { SectionProvider } from "@/context/SectionContext";

export const metadata: Metadata = {
  title: "Michael's Portfolio", // Change this to your desired title
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
        className={`${roboto_mono.variable} antialiased relative min-h-screen`}
      >
        <SectionProvider>
          {/* Background effects wrapper */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <ShootingStars />
            <StarsBackground />
          </div>

          {/* 🦋 Butterfly overlay - does NOT affect layout */}

          <div className="fixed inset-0 pointer-events-none z-[2000]">
            <ButterflyWithSparkles />
          </div>


          {/* Main content wrapper */}
          {/* Main content */}
          <div className="relative z-0">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SectionProvider>
      </body>
    </html >
  );
}
