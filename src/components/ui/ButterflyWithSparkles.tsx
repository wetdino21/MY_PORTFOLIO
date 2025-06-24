"use client";

import { useSection } from "@/context/SectionContext";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ButterflyWithSparkles() {
  const butterflyRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(90); // Start at 90 so rocket points up initially
  const [facingLeft, setFacingLeft] = useState(false);
  const { section } = useSection();

  const gifMap: Record<string, string> = {
    about: "/rocket.gif",
    projects: "/butterfly.gif",
    contact: "/rocket.gif",
    playbox: "/rocket.gif",
  };

  const gifSrc = gifMap[section] || "/butterfly.gif";
  const isRocket = gifSrc.includes("rocket");

  // For keeping track of last angle in degrees (mutable ref to avoid re-renders)
  const lastAngleRef = useRef(0);
  const currentRotationRef = useRef(90); // match initial angle

  // Gap offset from cursor (pixels)
  const offsetX = 50; 
  const offsetY = 50;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX + offsetX, y: e.clientY + offsetY });

      if (butterflyRef.current && isRocket) {
        const rect = butterflyRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);

        let delta = newAngle - lastAngleRef.current;

        // Normalize angle difference to prevent flipping
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        currentRotationRef.current += delta;
        lastAngleRef.current = newAngle;

        setAngle(currentRotationRef.current); // +90 so top points toward cursor
      } else if (butterflyRef.current && !isRocket) {
        const rect = butterflyRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;

        setFacingLeft(e.clientX < centerX);
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
        x: mouse.x - 24, // 24 to center the div, adjust if size changes
        y: mouse.y - 24,
      }}
      transition={{
        type: "spring",
        stiffness: 10, // stiffer for quicker but smooth following
        damping: 20,
        mass: 0.8,
      }}
    >
      <img
        src={gifSrc}
        alt="Flying Object"
        className="w-full h-full transition-transform duration-100"
        style={{
          transform: isRocket
            ? `rotate(${angle}deg)`
            : `scaleX(${facingLeft ? -1 : 1})`,
        }}
      />
    </motion.div>
  );
}
