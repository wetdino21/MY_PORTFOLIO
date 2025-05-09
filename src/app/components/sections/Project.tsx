"use client";

import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";

const Projects: React.FC = () => {

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
        <section id="projects" className={`h-auto ${roboto_mono.className} text-center py-20`}>
            <h2 className='text-5xl font-bold'>My Projects</h2>
            <p className="text-lg mb-10">Here are some of the projects I've worked on.</p>

            {/* Add the ThreeDMarqueeDemo at the bottom */}
            <div className="mt-10">
                <ThreeDMarquee images={images} />
            </div>
        </section>

    );
};

export default Projects;