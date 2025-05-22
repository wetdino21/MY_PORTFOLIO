"use client";

import { useSection } from "@/context/SectionContext";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ButterflyWithSparkles() {
    const butterflyRef = useRef<HTMLDivElement>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [angle, setAngle] = useState(0);
    const [facingLeft, setFacingLeft] = useState(false);
    const { section } = useSection();

    const gifMap: Record<string, string> = {
        about: "/rocket.gif",
        projects: "/butterfly.gif",
        contact: "/rocket.gif",
    };

    const gifSrc = gifMap[section] || "/butterfly.gif";
    const isRocket = gifSrc.includes("rocket");

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });

            if (butterflyRef.current) {
                const rect = butterflyRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                if (isRocket) {
                    // Calculate angle from rocket to mouse
                    const dx = e.clientX - centerX;
                    const dy = e.clientY - centerY;
                    const rad = Math.atan2(dy, dx);
                    const deg = rad * (180 / Math.PI);
                    setAngle(deg + 90); // +90 so the top of the image points toward the cursor
                    console.warn("Rocket angle:", angle);
                    console.warn("Rocket degree:", deg);
                } else {
                    // Butterfly: just flip left/right
                    setFacingLeft(e.clientX < centerX);
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isRocket]);

    return (
        <motion.div
            ref={butterflyRef}
            className="absolute w-12 h-12 pointer-events-none"
            animate={{
                x: mouse.x - 24,
                y: mouse.y - 24,
            }}
            transition={{
                type: "spring",
                stiffness: 10,
                damping: 20,
                mass: 0.8,
            }}
        >
            <img
                src={gifSrc}
                alt="Flying Object"
                className="w-full h-full transition-transform duration-200"
                style={{
                    transform: isRocket
                        ? `rotate(${angle}deg)`
                        : `scaleX(${facingLeft ? -1 : 1})`,
                }}
            />
        </motion.div>
    );
}
