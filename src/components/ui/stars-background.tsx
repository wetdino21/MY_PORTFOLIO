"use client";
import { cn } from "@/lib/utils";
import React, {
    useState,
    useEffect,
    useRef,
    RefObject,
    useCallback,
} from "react";

interface StarProps {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    twinkleSpeed: number | null;
}

interface StarBackgroundProps {
    starDensity?: number;
    allStarsTwinkle?: boolean;
    twinkleProbability?: number;
    minTwinkleSpeed?: number;
    maxTwinkleSpeed?: number;
    className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
    starDensity = 0.0001,
    allStarsTwinkle = true,
    twinkleProbability = 0.7,
    minTwinkleSpeed = 0.1,
    maxTwinkleSpeed = 0.7,
    className,
}) => {
    const [stars, setStars] = useState<StarProps[]>([]);
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null);

    const generateStars = useCallback(
        (width: number, height: number): StarProps[] => {
            const area = width * height;
            const numStars = Math.floor(area * starDensity);
            return Array.from({ length: numStars }, () => {
                const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 0.1 + 0.8, // ★ increased size
                    opacity: Math.random() * 0.5 + 0.5,
                    twinkleSpeed: shouldTwinkle
                        ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                        : null,
                };
            });
        },
        [
            starDensity,
            allStarsTwinkle,
            twinkleProbability,
            minTwinkleSpeed,
            maxTwinkleSpeed,
        ]
    );

    useEffect(() => {
        const updateStars = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                if (!ctx) return;

                const { width, height } = canvas.getBoundingClientRect();
                canvas.width = width;
                canvas.height = height;
                setStars(generateStars(width, height));
            }
        };

        updateStars();

        const resizeObserver = new ResizeObserver(updateStars);
        if (canvasRef.current) {
            resizeObserver.observe(canvasRef.current);
        }

        return () => {
            if (canvasRef.current) {
                resizeObserver.unobserve(canvasRef.current);
            }
        };
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars,
    ]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            const theme = document.documentElement.getAttribute("data-theme");

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                if (star.twinkleSpeed !== null) {
                    star.opacity =
                        0.5 +
                        Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

                // 🌈 Color logic
                if (theme === "light") {
                    const fade = star.opacity; // 0.5 to 1.0

                    let r, g, b;

                    if (fade < 0.75) {
                        // Sky Blue to Violet
                        const t = (fade - 0.5) / 0.25; // Normalize to 0–1
                        r = Math.floor(135 + (148 - 135) * t); // 135 → 148
                        g = Math.floor(206 + (0 - 206) * t);   // 206 → 0
                        b = Math.floor(235 + (211 - 235) * t); // 235 → 211
                    } else {
                        // Violet to Pink
                        const t = (fade - 0.75) / 0.25; // Normalize to 0–1
                        r = Math.floor(148 + (255 - 148) * t); // 148 → 255
                        g = Math.floor(0 + (105 - 0) * t);     // 0 → 105
                        b = Math.floor(211 + (180 - 211) * t); // 211 → 180
                    }

                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${star.opacity})`;
                }
                else {
                    // Classic white for dark theme
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                }

                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [stars]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("fixed inset-0 w-full h-full z-0 pointer-events-none", className)}
        />
    );
};

