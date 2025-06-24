
"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconQuestionMark,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { pacifico, roboto_mono, roboto_condensed } from "@/styles/fonts";
// import { ProfileCard } from "@/components/ui/3d-card"; // adjust the path as needed
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"; // adjust the path as needed
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaMusic } from "react-icons/fa";
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
    SiTypescript,
    SiDotnet,
    SiSharp,
    SiFirebase,
    SiGodotengine,

} from "react-icons/si";
import { GiMusicalNotes } from "react-icons/gi";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { LuFileUser, LuDownload, LuEraser, LuPen, LuFileMusic, LuMusic } from "react-icons/lu";
import { FloatingDock } from "@/components/ui/floating-dock";
import { MiniPlayer } from "@/components/ui/mini-player";


const About: React.FC = () => {

    const [current, setCurrent] = React.useState(0);
    const [playing, setPlaying] = React.useState(false);

    const words = [
        { text: " web developer" },
        { text: " mobile developer" },
        { text: " frontend developer" },
        { text: " backend developer" },
    ];

    const techStack = [
        { title: "Flutter", icon: <SiFlutter className="h-full w-full" />, href: "https://flutter.dev" },
        { title: "Next.js", icon: <SiNextdotjs className="h-full w-full" />, href: "https://nextjs.org" },
        { title: "React", icon: <SiReact className="h-full w-full" />, href: "https://react.dev" },
        { title: "Node.js", icon: <SiNodedotjs className="h-full" />, href: "https://nodejs.org" },
        { title: "GitHub", icon: <SiGithub className="h-full w-full" />, href: "https://github.com" },
        { title: "Git", icon: <SiGit className="h-full w-full" />, href: "https://git-scm.com" },
        { title: "HTML", icon: <SiHtml5 className="h-full w-full" />, href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { title: "CSS", icon: <SiCss3 className="h-full w-full" />, href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { title: "JavaScript", icon: <SiJavascript className="h-full w-full" />, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { title: "TypeScript", icon: <SiTypescript className="h-full w-full" />, href: "https://www.typescriptlang.org/" },
        { title: "Figma", icon: <SiFigma className="h-full w-full" />, href: "https://figma.com" },
        { title: "Vercel", icon: <SiVercel className="h-full w-full" />, href: "https://vercel.com" },
        { title: "MongoDB", icon: <SiMongodb className="h-full w-full" />, href: "https://mongodb.com" },
        { title: "PostgreSQL", icon: <SiPostgresql className="h-full w-full" />, href: "https://www.postgresql.org" },
        { title: "SQLite", icon: <SiSqlite className="h-full w-full" />, href: "https://www.sqlite.org" },
        { title: "Framer Motion", icon: <SiFramer className="h-full w-full" />, href: "https://www.framer.com/motion/" },
        { title: "ASP.NET WebForms", icon: <SiDotnet className="h-full w-full" />, href: "https://learn.microsoft.com/en-us/aspnet/web-forms/" },
        { title: "C#", icon: <SiSharp className="h-full w-full" />, href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
        { title: "SQL Server", icon: <DiMsqlServer className="h-full w-full" />, href: "https://learn.microsoft.com/en-us/sql/sql-server/" },
        { title: "Visual Studio Code", icon: <BiLogoVisualStudio className="h-full w-full" />, href: "https://code.visualstudio.com/" },
        { title: "Visual Studio", icon: <DiVisualstudio className="h-full w-full" />, href: "https://visualstudio.microsoft.com/" },
        { title: "Firebase", icon: <SiFirebase className="h-full w-full" />, href: "https://firebase.google.com/" },
        { title: "Godot Engine", icon: <SiGodotengine className="h-full w-full" />, href: "https://godotengine.org/" },
    ];


    const frontendStack = techStack.filter((item) =>
        ["Flutter", "Next.js", "React", "HTML", "CSS", "JavaScript", "TypeScript", "Figma", "Framer Motion"].includes(item.title)
    );

    const backendStack = techStack.filter((item) =>
        ["Node.js", "ASP.NET WebForms", "C#", "SQL Server", "MongoDB", "PostgreSQL", "Firebase", "SQLite"].includes(item.title)
    );

    const toolsStack = techStack.filter((item) =>
        ["GitHub", "Git", "Vercel", "Visual Studio Code", "Visual Studio", "Godot Engine"].includes(item.title)
    );


    return (
        <section
            id="about"
            className={`h-auto text-center ${roboto_mono.className}`}
        >
            <div className="m-auto py-20 h-full grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Left Column: 3D Image Card */}
                <div className="flex flex-col items-center lg:items-end lg:pr-10">
                    {/* <ProfileCard /> */}
                    <CardContainer className="inter-var cursor-pointer">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                            {/* Social Icons */}
                            <CardItem translateZ="50" className="flex justify-between mb-4 gap-4">

                                <div className="relative group">
                                    <a href="https://github.com/wetdino21" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-gray-900 text-2xl transition-transform group-hover:scale-110" />
                                        <span className="tooltip-icon">
                                            GitHub
                                        </span>
                                    </a>
                                </div>
                                <div className="relative group">
                                    <a href="https://www.facebook.com/mikenaill21" target="_blank" rel="noopener noreferrer" >
                                        <FaFacebook className="text-gray-900 text-2xl transition-transform group-hover:scale-110" />
                                        <span className="tooltip-icon">
                                            Facebook
                                        </span>
                                    </a></div>
                                <div className="relative group">
                                    <a href="https://www.linkedin.com/in/michael-bacalso-8a889934b/" target="_blank" rel="noopener noreferrer" >
                                        <FaLinkedin className="text-gray-900 text-2xl transition-transform group-hover:scale-110" />
                                        <span className="tooltip-icon">
                                            Linkedin
                                        </span>
                                    </a>
                                </div>
                                <div className="relative group">
                                    <a href="https://www.instagram.com/mikenaill21/#" target="_blank" rel="noopener noreferrer" >
                                        <FaInstagram className="text-gray-900 text-2xl transition-transform group-hover:scale-110" />
                                        <span className="tooltip-icon">
                                            Instagram
                                        </span>
                                    </a>
                                </div>
                                <div className="relative group">
                                    <a href="https://mail.google.com/mail/?view=cm&to=michael.bacalso21@gmail.com" target="_blank" rel="noopener noreferrer" >
                                        <FaEnvelope className="text-gray-900 text-2xl transition-transform group-hover:scale-110" />
                                        <span className="tooltip-icon">
                                            Gmail
                                        </span>
                                    </a>
                                </div>

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
                                <CardItem className="flex gap-2">
                                    {/* Open in new tab */}
                                    <a
                                        href="/resume/my_resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon-box relative group"
                                    >
                                        <LuFileUser className="text-xl hover:scale-110" />
                                        <span className="tooltip-icon-below">Resume</span>
                                    </a>

                                    {/* Download file */}
                                    <a
                                        href="/resume/my_resume.pdf"
                                        download
                                        className="icon-box relative group"
                                    >
                                        <LuDownload className="text-xl hover:scale-110" />
                                        <span className="tooltip-icon-below">Download</span>
                                    </a>
                                </CardItem>

                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="#contact"
                                    // href="https://mail.google.com/mail/?view=cm&to=michael.bacalso21@gmail.com"
                                    // target="_blank"
                                    // rel="noopener noreferrer"
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
            <div className="mt-20 px-4 lg:px-0">
                <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 xl:gap-5">
                    {/* Frontend */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Frontend</h3>
                        <div className="max-sm:m-1 lg:ml-5">
                            <FloatingDock items={frontendStack} />
                        </div>
                    </div>

                    {/* Backend & Databases */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Backend</h3>
                        <div className="max-sm:m-1 lg:mr-5">
                            <FloatingDock items={backendStack} />
                        </div>
                    </div>
                </div>

                {/* Tools & Platforms */}
                <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4 text-center">Tools & Platforms</h3>
                    <div className="mx-auto w-full lg:max-w-2xl px-1">
                        <FloatingDock items={toolsStack} />
                    </div>
                </div>
            </div>



            <div className="my-30"></div>
        </section >
    );
};

export default About;