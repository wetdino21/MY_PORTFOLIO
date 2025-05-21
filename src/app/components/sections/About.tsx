
"use client";

import React from "react";
import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";
// import { ProfileCard } from "@/components/ui/3d-card"; // adjust the path as needed
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"; // adjust the path as needed
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import {
    SiFlutter,
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiGithub,
    SiGit,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiFigma,
    SiVercel,
    SiMongodb,
    SiPostgresql,
    SiSqlite,
    SiFramer,
    SiAirtable, // Aceternity doesn't have a dedicated icon, using placeholder
} from "react-icons/si";
import { FloatingDock } from "@/components/ui/floating-dock";

const About: React.FC = () => {
    const words = [
        { text: " web developer" },
        { text: " mobile developer" },
        { text: " frontend developer" },
        { text: " backend developer" },
    ];

    const techStack = [
        {
            title: "Flutter",
            icon: <SiFlutter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://flutter.dev",
        },
        {
            title: "Next.js",
            icon: <SiNextdotjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://nextjs.org",
        },
        {
            title: "React",
            icon: <SiReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://react.dev",
        },
        {
            title: "Node.js",
            icon: <SiNodedotjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://nodejs.org",
        },
        {
            title: "GitHub",
            icon: <SiGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://github.com",
        },
        {
            title: "Git",
            icon: <SiGit className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://git-scm.com",
        },
        {
            title: "HTML",
            icon: <SiHtml5 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            title: "CSS",
            icon: <SiCss3 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
            title: "JavaScript",
            icon: <SiJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            title: "Figma",
            icon: <SiFigma className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://figma.com",
        },
        {
            title: "Vercel",
            icon: <SiVercel className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://vercel.com",
        },
        {
            title: "MongoDB",
            icon: <SiMongodb className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://mongodb.com",
        },
        {
            title: "PostgreSQL",
            icon: <SiPostgresql className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.postgresql.org",
        },
        {
            title: "SQLite",
            icon: <SiSqlite className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.sqlite.org",
        },
        {
            title: "Framer Motion",
            icon: <SiFramer className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.framer.com/motion/",
        },
        {
            title: "Aceternity",
            icon: (
                <img
                    src="https://assets.aceternity.com/logo-dark.png"
                    alt="Aceternity"
                    width={20}
                    height={20}
                    className="dark:invert"
                />
            ),
            href: "https://ui.aceternity.com",
        },
    ];

    const frontendStack = techStack.filter((item) =>
        ["Flutter", "Next.js", "React", "HTML", "CSS", "JavaScript", "Figma", "Framer Motion", "Aceternity"].includes(item.title)
    );

    const backendStack = techStack.filter((item) =>
        ["Node.js", "GitHub", "Git", "Vercel", "MongoDB", "PostgreSQL", "SQLite"].includes(item.title)
    );



    return (
        <section
            id="about"
            className={`h-auto text-center ${roboto_mono.className}`}
        >
            <div className="m-auto py-20 h-full grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Left Column: 3D Image Card */}
                <div className="flex flex-col items-center lg:items-end pr-10">
                    {/* <ProfileCard /> */}
                    <CardContainer className="inter-var cursor-pointer">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                            {/* Social Icons */}
                            <CardItem translateZ="50" className="flex justify-between text-2xl mb-4 gap-4">
                                <a href="https://github.com/wetdino21" target="_blank" rel="noopener noreferrer" className="icon-hover">
                                    <FaGithub className="text-neutral-600 dark:text-black" />
                                </a>
                                <a href="https://www.facebook.com/mikenaill21" target="_blank" rel="noopener noreferrer" className="icon-hover">
                                    <FaFacebook className="text-neutral-600 dark:text-black" />
                                </a>
                                <a href="https://www.linkedin.com/in/michael-bacalso-8a889934b/" target="_blank" rel="noopener noreferrer" className="icon-hover">
                                    <FaLinkedin className="text-neutral-600 dark:text-black" />
                                </a>
                                <a href="https://www.instagram.com/mikenaill21/#" target="_blank" rel="noopener noreferrer" className="icon-hover">
                                    <FaInstagram className="text-neutral-600 dark:text-black" />
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&to=michael.bacalso21@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-hover">
                                    <FaEnvelope className="text-neutral-600 dark:text-black" />
                                </a>
                            </CardItem>

                            {/* Square Image */}
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src="/profile2.jpg"
                                    // height="200"
                                    // width="200"
                                    className="h-[20rem] w-[20rem] object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>

                            {/* Buttons */}
                            <div className="flex justify-between items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="#projects"
                                    className="px-4 py-2 rounded-xl text-sm font-normal dark:text-black"
                                >
                                    Continue →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://mail.google.com/mail/?view=cm&to=michael.bacalso21@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-black dark:text-white text-white text-xs font-bold transition-all duration-200 hover:bg-white hover:text-black dark:hover:bg-purple-950 dark:hover:text-white hover:shadow-md"
                                >
                                    Reach out
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                </div>

                {/* Right Column: Name + Description */}
                <div className="flex flex-col pb-10 items-center lg:items-start max-lg:mt-5">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 flex flex-wrap">
                        I am&nbsp;
                        <span className="animated-gradient bg-clip-text text-transparent">
                            Michael
                        </span>
                    </h1>

                    <div>
                        <TypewriterEffectSmooth
                            words={words}
                            className="inline-block font-semibold"
                        />
                    </div>

                    <p className="text-lg mt-4">I build things full stack.</p>
                </div>

            </div>

            {/* Tech Stack Below Grid */}
            <div className="mt-10 px-4 md:px-0">
                <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Frontend</h3>
                        <div className="max-sm:m-1 sm:mx-5 lg:ml-20">
                            <FloatingDock items={frontendStack} />
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Backend</h3>
                        <div className="max-sm:m-1 sm:mx-5 lg:mr-20">
                            <FloatingDock items={backendStack} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-30"></div>
        </section >
    );
};

export default About;