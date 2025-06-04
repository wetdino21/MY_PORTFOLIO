"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { geistSans, geistMono, pacifico, roboto_mono } from "../styles/fonts";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import ButterflyWithSparkles from "@/components/ui/ButterflyWithSparkles";
import { SectionProvider } from "@/context/SectionContext";

const funnyMessages = [
    "Booting up interstellar compilers...",
    "Rendering wormholes in 4K...",
    "Refactoring alien code...",
    "Deploying satellites via git push...",
    "Compiling dark mode in deep space...",
    "Optimizing zero-gravity algorithms...",
    "Debugging quantum entanglement...",
    "Streaming logs from the stratosphere...",
    "Installing nebula-based dependencies...",
    "Linting asteroids for syntax errors...",
];



export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % funnyMessages.length)
        }, 700)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className={`${roboto_mono.variable} font-mono fixed inset-0 flex flex-col items-center justify-center bg-black z-[99999]`}>
                <div className="text-4xl md:text-5xl text-white font-bold neon-text mb-4 animate-pulse">
                    🚀 Launching...
                </div>
                <div className="text-lg md:text-xl text-purple-300 italic transition-all duration-300">
                    {funnyMessages[messageIndex]}
                </div>
                <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7;
        }
      `}</style>
            </div>
        )
    }

    return (
        <div className={`${roboto_mono.variable} antialiased relative min-h-screen`}>
            <SectionProvider>
                <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                    <ShootingStars />
                    <StarsBackground />
                </div>

                <div className="fixed inset-0 pointer-events-none z-[1000]">
                    <ButterflyWithSparkles />
                </div>

                <div className="relative z-0">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </SectionProvider>
        </div>
    );
}
