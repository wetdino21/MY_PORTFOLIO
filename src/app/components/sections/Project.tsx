"use client";

import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Timeline } from "@/components/ui/timeline";
import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";

const Projects: React.FC = () => {

    const data = [
        {
            title: "2025",
            filePath: "https://michael-lifewood-game.vercel.app/",
            content: (
                <div>
                    <p className="mb-8  md:text-sm ">
                        Built a game, website, and a variety of web crawling tools during internship.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/projects/lifewood_game_preview1.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projects/lifewood_game_preview2.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Late 2024",
            content: (
                <div>
                    <p className="mb-8  md:text-sm ">
                        Developed a mobile and web capstone project for efficient waste collection routing.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex gap-x-4">
                            {/* Image 1 */}
                            <div className="h-20 w-full rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60">
                                <img
                                    src="/projects/trashtrack_mobile_preview1.jpg"
                                    alt="hero template"
                                    width={500}
                                    height={500}
                                    className="bg-black h-full w-full rounded-lg object-contain"
                                />
                            </div>

                            {/* Image 2 */}
                            <div className="h-20 w-full rounded-lg shadow-[...same shadow...] md:h-44 lg:h-60">
                                <img
                                    src="/projects/trashtrack_mobile_preview2.jpg"
                                    alt="web preview 1"
                                    width={500}
                                    height={500}
                                    className="bg-black h-full w-full rounded-lg object-contain"
                                />
                            </div>

                            {/* Image 3 */}
                            <div className="h-20 w-full rounded-lg shadow-[...same shadow...] md:h-44 lg:h-60">
                                <img
                                    src="/projects/trashtrack_mobile_preview3.jpg"
                                    alt="web preview 2"
                                    width={500}
                                    height={500}
                                    className="bg-black h-full w-full rounded-lg object-contain"
                                />
                            </div>
                        </div>

                        <div className="flex gap-x-4">
                            {/* Image 1 */}
                            <div className="h-20 w-full rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60">
                                <img
                                    src="/projects/trashtrack_mobile_preview4.jpg"
                                    alt="hero template"
                                    width={500}
                                    height={500}
                                    className="bg-black h-full w-full rounded-lg object-contain"
                                />
                            </div>

                            {/* Image 2 */}
                            <div className="h-20 w-full rounded-lg shadow-[...same shadow...] md:h-44 lg:h-60">
                                <img
                                    src="/projects/trashtrack_mobile_preview5.jpg"
                                    alt="web preview 1"
                                    width={500}
                                    height={500}
                                    className="bg-black h-full w-full rounded-lg object-contain"
                                />
                            </div>

                            {/* Image 3 */}
                            <div className="h-20 w-full rounded-lg shadow-[...same shadow...] md:h-44 lg:h-60">
                                <img
                                    src="/projects/trashtrack_mobile_preview6.jpg"
                                    alt="web preview 2"
                                    width={500}
                                    height={500}
                                    className="bg-black h-full w-full rounded-lg object-contain"
                                />
                            </div>
                        </div>
                        <img
                            src="/projects/trashtrack_web_preview1.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projects/trashtrack_web_preview2.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2024",
            content: (
                <div>
                    <p className="mb-8  md:text-sm ">
                        Freelancing as a hobby and delivered multiple small projects for clients.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <video
                            src="/videos/flutter_vid_preview1.mp4"
                            width={500}
                            height={500}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="bg-black h-full w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />

                        <video
                            src="/videos/flutter_vid_preview2.mp4"
                            width={500}
                            height={500}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="bg-black h-full w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                          <video
                            src="/videos/flutter_vid_preview3.mp4"
                            width={500}
                            height={500}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="bg-black h-full w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                          <video
                            src="/videos/flutter_vid_preview4.mp4"
                            width={500}
                            height={500}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="bg-black h-full w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="mb-8  md:text-sm ">
                        Created and provided multiple small-scale projects free of charge to clients.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/projects/jcor_web_preview1.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="bg-black h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projects/jcor_web_preview2.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="bg-black h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projects/jcor_web_preview3.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="bg-black h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projects/jcor_web_preview4.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="bg-black h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
    ];

    const images = [
        "projects/project_1.jpg",
        "projects/project_2.jpg",
        "projects/project_3.png",
        "projects/project_8.jpg",
        "projects/project_5.png",
        "projects/project_10.jpg",
        "projects/project_7.png",
        "projects/project_8.jpg",
        "projects/project_9.png",
        "projects/project_10.jpg",
        "projects/project_11.png",
        "projects/project_12.jpg",
        // "projects/project_13.png",
        "projects/project_3.png",
        //
        "projects/project_14.jpg",
        // "projects/project_15.png",
        "projects/project_9.png",
        //
        "projects/project_16.jpg",
        "projects/project_17.jpg",
        "projects/project_18.png",
        "projects/project_1.jpg",
        "projects/project_2.jpg",
        "projects/project_7.png",
        "projects/project_8.jpg",
        "projects/project_5.png",
        "projects/project_6.jpg",
        "projects/project_7.png",
        "projects/project_8.jpg",
        "projects/project_9.png",
        "projects/project_10.jpg",
        "projects/project_11.png",
        "projects/project_12.jpg",
    ];


    return (
        <section id="projects" className={` min-h-screen ${roboto_mono.className} text-center py-20`}>
            <h2 className="text-5xl font-bold">My Projects</h2>
            <p className="text-lg mb-10">Here are some of the projects I've worked on.</p>

            <div className="relative mt-10">
                <Timeline data={data} />
                <ThreeDMarquee images={images} />
            </div>
        </section>
    );
};

export default Projects;