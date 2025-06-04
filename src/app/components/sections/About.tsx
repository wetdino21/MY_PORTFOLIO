
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
} from "react-icons/si";
import { GiMusicalNotes } from "react-icons/gi";
import { LuFileUser, LuDownload, LuFileMusic, LuMusic } from "react-icons/lu";
import { FloatingDock } from "@/components/ui/floating-dock";
import { MiniPlayer } from "@/components/ui/mini-player";

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
            icon: <SiFlutter className="h-full w-full" />,
            href: "https://flutter.dev",
        },
        {
            title: "Next.js",
            icon: <SiNextdotjs className="h-full w-full" />,
            href: "https://nextjs.org",
        },
        {
            title: "React",
            icon: <SiReact className="h-full w-full" />,
            href: "https://react.dev",
        },
        {
            title: "Node.js",
            icon: <SiNodedotjs className="h-full" />,
            href: "https://nodejs.org",
        },
        {
            title: "GitHub",
            icon: <SiGithub className="h-full w-full" />,
            href: "https://github.com",
        },
        {
            title: "Git",
            icon: <SiGit className="h-full w-full" />,
            href: "https://git-scm.com",
        },
        {
            title: "HTML",
            icon: <SiHtml5 className="h-full w-full" />,
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            title: "CSS",
            icon: <SiCss3 className="h-full w-full" />,
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
            title: "JavaScript",
            icon: <SiJavascript className="h-full w-full" />,
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            title: "Figma",
            icon: <SiFigma className="h-full w-full" />,
            href: "https://figma.com",
        },
        {
            title: "Vercel",
            icon: <SiVercel className="h-full w-full" />,
            href: "https://vercel.com",
        },
        {
            title: "MongoDB",
            icon: <SiMongodb className="h-full w-full" />,
            href: "https://mongodb.com",
        },
        {
            title: "PostgreSQL",
            icon: <SiPostgresql className="h-full w-full" />,
            href: "https://www.postgresql.org",
        },
        {
            title: "SQLite",
            icon: <SiSqlite className="h-full w-full" />,
            href: "https://www.sqlite.org",
        },
        {
            title: "Framer Motion",
            icon: <SiFramer className="h-full w-full" />,
            href: "https://www.framer.com/motion/",
        },
        {
            title: "Aceternity",
            icon: (
                <img
                    src="https://assets.aceternity.com/logo-dark.png"
                    alt="Aceternity"
                    className="h-full w-full"
                    style={{ filter: 'invert-filter' }}
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

            {/* Bento Grid*/}
            <BentoGrid className="max-w-4xl mx-auto mt-20 md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>


            {/* Tech Stack Below Grid */}
            <div className="mt-20 px-4 md:px-0">
                <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div>
                        <h3 className="dark:bg-forgr text-lg font-medium mb-4">Frontend</h3>
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

const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
            >

                <LuMusic className="text-xl hover:scale-110 h-6 w-6 rounded-full shrink-0" />
                {/* <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" /> */}
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <GiMusicalNotes className="text-l hover:scale-110 h-6 w-6 rounded-full shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
            >
                <LuFileMusic className="text-xl hover:scale-110 h-6 w-6 rounded-full shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    );
};
const SkeletonTwo = () => {
    const variants = {
        initial: { width: 0 },
        animate: {
            width: "100%",
            transition: { duration: 0.2 },
        },
        hover: {
            width: ["0%", "100%"],
            transition: { duration: 2 },
        },
    };

    // Start with empty array, fill after mount (client-side only)
    const [widths, setWidths] = React.useState<number[]>([]);

    React.useEffect(() => {
        setWidths(Array.from({ length: 6 }, () => Math.random() * (100 - 40) + 40));
    }, []);

    // Avoid hydration mismatch: render nothing until widths are set
    if (widths.length === 0) return null;

    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {widths.map((w, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: w + "%",
                    }}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
                ></motion.div>
            ))}
        </motion.div>
    );
};

const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    );
};
const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Just code in Vanilla Javascript
                </p>
                <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Delusional
                </p>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Tailwind CSS is cool, you know
                </p>
                <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Sensible
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    I love angular, RSC, and Redux.
                </p>
                <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Helpless
                </p>
            </motion.div>
        </motion.div>
    );
};
const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="text-xs text-neutral-500">
                    There are a lot of cool framerworks out there like React, Angular,
                    Vue, Svelte that can make your life ....
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <p className="text-xs text-neutral-500">Use PHP.</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
            </motion.div>
        </motion.div>
    );
};
const items = [
    {
        description: <MiniPlayer />,
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: (
            <div className="relative group h-5 w-5 flex items-center justify-center">
                <span className="absolute bottom-full mb-1 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
                    This music was generated using AI.
                </span>
                <div className="rounded-full h-5 w-5 flex items-center justify-center">
                    <IconQuestionMark className="h-4 w-4 text-neutral-500 border-2 border-neutral-500 rounded-full" />
                </div>
            </div>
        ),

    },
    {
        title: "Automated Proofreading",
        description:
            (
                <span className="text-sm">
                    Let AI handle the proofreading of your documents.
                </span>
            ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Contextual Suggestions",
        description: (
            <span className="text-sm">
                Get AI-powered suggestions based on your writing context.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Sentiment Analysis",
        description: (
            <span className="text-sm">
                Understand the sentiment of your text with AI analysis.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "Text Summarization",
        description: (
            <span className="text-sm">
                Summarize your lengthy documents with AI technology.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];

export default About;