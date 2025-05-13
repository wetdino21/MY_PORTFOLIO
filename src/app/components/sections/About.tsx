
"use client";

import React from "react";
import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";
// import { ProfileCard } from "@/components/ui/3d-card"; // adjust the path as needed
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"; // adjust the path as needed
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const About: React.FC = () => {
    const words = [
        { text: "a web developer" },
        { text: "a mobile developer" },
        { text: "a frontend developer" },
        { text: "a backend developer" },
    ];

    return (
        <section
            id="about"
            className={`h-auto text-center ${roboto_mono.className}`}
        >
            <div className="max-w-5xl m-auto h-full grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left Column: Name + Description */}
                <div>
                    <h1 className="text-5xl font-bold mb-4">I am Michael</h1>
                    <div className="text-md">
                        <TypewriterEffectSmooth
                            words={words}
                            className="inline-block font-semibold"
                        />
                    </div>
                    <p className="text-sm mt-4">
                        I build things full stack.</p>
                </div>

                {/* Right Column: 3D Image Card */}
                <div>
                    {/* <ProfileCard /> */}
                    <CardContainer className="inter-var cursor-pointer">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            {/* Social Icons */}
                            <CardItem translateZ="50" className="flex justify-between text-2xl text-neutral-600 dark:text-white mb-4 gap-4 ">
                                <a href="https://github.com/wetdino21" target="_blank" rel="noopener noreferrer" className="icon-hover"><FaGithub /></a>
                                <a href="https://www.facebook.com/mikenaill21" target="_blank" rel="noopener noreferrer" className="icon-hover"><FaFacebook /></a>
                                <a href="https://www.linkedin.com/in/michael-bacalso-8a889934b/" target="_blank" rel="noopener noreferrer" className="icon-hover"><FaLinkedin /></a>
                                <a href="https://www.instagram.com/mikenaill21/#" target="_blank" rel="noopener noreferrer" className="icon-hover"><FaInstagram /></a>
                                <a href="https://mail.google.com/mail/?view=cm&to=michael.bacalso21@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-hover"><FaEnvelope /></a>
                            </CardItem>

                            {/* Square Image */}
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src="/profile2.jpg"
                                    height="600"
                                    width="600"
                                    className="h-[25rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>

                            {/* Buttons */}
                            <div className="flex justify-between items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="#projects"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Continue →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://mail.google.com/mail/?view=cm&to=michael.bacalso21@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold transition-all duration-300 hover:bg-white hover:text-black dark:hover:bg-purple-950 dark:hover:text-white hover:shadow-md"
                                >
                                    Reach out
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </section >
    );
};

export default About;