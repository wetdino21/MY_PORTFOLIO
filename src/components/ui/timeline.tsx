"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
    filePath?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl pt-20 ">
                <p className="text-sm md:text-sm mb-4">
                    A timeline of my journey.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20 mt-5">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>

                            <div className="pl-14 md:pl-20 hidden md:block">
                                <h3 className="text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                                    {item.title}
                                </h3>

                                {item.filePath && (
                                    <a
                                        href={item.filePath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 px-4 py-2 text-lg font-bold rounded-lg bg-blue-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors block text-center"
                                    >
                                        Play Game
                                    </a>
                                )}
                            </div>
                        </div>


                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <div className="flex flex-row items-center gap-4 mb-4 md:hidden">
                                <h3 className="md:hidden block text-2xl py-5 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                    {item.title}
                                </h3>
                                {item.filePath && (
                                    <a
                                        href={item.filePath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="md:hidden block px-4 py-1 text-lg font-bold rounded-lg bg-neutral-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
                                    >
                                        Play Game
                                    </a>
                                )}
                            </div>

                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
