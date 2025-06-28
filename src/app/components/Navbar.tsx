"use client";

import React, { useEffect, useState, useRef } from "react";
import { roboto_mono } from "../../styles/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { useSection } from "@/context/SectionContext";

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("about");
    const isManualScrolling = useRef(false);
    const [theme, setTheme] = useState<"light" | "dark">("light"); // Manage theme state
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Manage drawer state
    const toggleRef = useRef<HTMLDivElement>(null);
    const { setSection } = useSection();
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);


    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            isManualScrolling.current = true;

            // Update theme immediately based on the target section
            if (id === "projects") {
                setTheme("light");
            } else if (id === "about" || id === "contact" || id === "playbox") {
                setTheme("dark");
            }

            section.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", `#${id}`);
            setActiveSection(id);
            setSection(id);

            // Allow observer to update again after scroll finishes (~1/2s)
            setTimeout(() => {
                isManualScrolling.current = false;
            }, 500);

            // Close the drawer if it's open
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                if (isManualScrolling.current) return; // Skip update if manual scroll

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        console.log("Intersecting section:", sectionId);
                        setActiveSection(sectionId);
                        setSection(sectionId);

                        // Change theme based on section
                        if (sectionId === "projects") {
                            setTheme("light");
                        } else if (sectionId === "about" || sectionId === "contact" || sectionId === "playbox") {
                            setTheme("dark");
                        }
                    }
                });
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1]
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    useEffect(() => {
        // Apply theme to the root element
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    //close drawer on click outside or resize
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const drawer = document.querySelector(".drawer");
            const toggle = toggleRef.current;

            if (
                isDrawerOpen &&
                drawer &&
                !drawer.contains(event.target as Node) &&
                toggle &&
                !toggle.contains(event.target as Node)
            ) {
                setIsDrawerOpen(false);
            }
        };


        const handleResize = () => {
            if (window.innerWidth >= 768 && isDrawerOpen) {
                setIsDrawerOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleResize);

        // return () => {
        //     document.removeEventListener("mousedown", handleClickOutside);
        //     window.removeEventListener("resize", handleResize);
        // };
    }, [isDrawerOpen]);

    //sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                // Scrolling down
                setShowNavbar(false);
            } else {
                // Scrolling up
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`
            ${roboto_mono.className}
            fixed w-full p-4 z-50 transition-transform duration-300
            ${showNavbar ? "translate-y-0" : "-translate-y-full"}
            `}>

            <div className="flex justify-between items-center">
                {/* Logo */}
                <div
                    className={`text-xl font-bold cursor-pointer transition-colors duration-300 ${theme === "light" ? "text-black" : "text-white"}`}
                    onClick={() => scrollToSection("about")}
                >
                    <img src="/my_logo_trans.png" alt="logo" className={`w-16 h-auto transition-all duration-300 ${theme === "dark" ? "" : "invert"}`} />
                </div>


                {/* Desktop Nav Links */}
                <ul className="hidden md:flex gap-8">
                    {[
                        { id: "about", label: "About_Me" },
                        { id: "projects", label: "Projects" },
                        { id: "contact", label: "Contact" },
                    ].map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <li
                                key={item.id}
                                className={`relative cursor-pointer font-extrabold group`}
                                onClick={() => scrollToSection(item.id)}
                                aria-current={isActive ? "page" : undefined}
                            >
                                <motion.span
                                    className={`block transition-transform duration-200 
                                        ${!isActive
                                            ? theme === "light"
                                                ? "text-gray-500 group-hover:text-black"
                                                : "text-gray-400 group-hover:text-white"
                                            : ""
                                        } 
                                        `}
                                    animate={{ scale: isActive ? 1.2 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item.label}
                                </motion.span>

                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Drawer Toggle */}
                <div ref={toggleRef}
                    className="md:hidden cursor-pointer z-50 "
                    onClick={() => {
                        setIsDrawerOpen(!isDrawerOpen)
                    }}

                >
                    {isDrawerOpen ? (
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 90 }}
                            className={`text-2xl ${theme === "light" ? "text-black" : "text-white"
                                }`}
                        >
                            ✕
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 0 }}
                            className={`text-2xl ${theme === "light" ? "text-black" : "text-white"
                                }`}
                        >
                            ☰
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className={`drawer fixed top-0 right-0 w-3/4 shadow-lg p-8 
                            ${theme === "light"
                                ? "bg-white border-l border-gray-300"
                                : "bg-gray-950 bg-opacity-80 border-l border-gray-700"}
                                `}

                    >
                        <ul className="flex flex-col gap-6">
                            {[
                                { id: "about", label: "About Me" },
                                { id: "projects", label: "Projects" },
                                { id: "contact", label: "Contact" },
                            ].map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <li
                                        key={item.id}
                                        className={`cursor-pointer font-bold ${isActive
                                            ? theme === "light"
                                                ? "text-black"
                                                : "text-white"
                                            : theme === "light"
                                                ? "text-gray-500"
                                                : "text-gray-400"
                                            }`}
                                        onClick={() => scrollToSection(item.id)}
                                    >
                                        {item.label}
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;