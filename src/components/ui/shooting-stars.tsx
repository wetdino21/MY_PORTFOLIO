"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const x = Math.random() * window.innerWidth;
  const y = 0;
  // Random angle between 30-60 or 120-150 degrees
  const angleRanges = [
    [30, 60],
    [120, 150],
  ];
  const range = angleRanges[Math.floor(Math.random() * angleRanges.length)];
  const angle = Math.random() * (range[1] - range[0]) + range[0];
  return { x, y, angle };
};


export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 200,
  maxDelay = 1200,
  starWidth = 20,   // ⭐ Make stars bigger
  starHeight = 2,   // ⭐ Make trail thicker
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // 👇 Detect system or browser theme
  useEffect(() => {
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(match.matches);
    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    match.addEventListener("change", listener);
    return () => match.removeEventListener("change", listener);
  }, []);

  // Create stars
  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  // Move stars
  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;

          if (
            newX < -20 || newX > window.innerWidth + 20 ||
            newY < -20 || newY > window.innerHeight + 20
          ) return null;

          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  const trailColor = isDarkMode ? "#2EB9DF" : "#60A5FA"; // Blue-400 in light
  const starColor = isDarkMode ? "#9E00FF" : "#9333EA";  // Purple-600 in light

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
