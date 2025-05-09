
"use client";

import React from "react";
import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";
import { ProfileCard } from "@/components/ui/3d-card"; // adjust the path as needed
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"; // adjust the path as needed

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
            className={`h-screen py-20 px-8 text-center ${roboto_mono.className}`}
        >
            <div className="max-w-5xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left Column: Name + Description */}
                <div>
                    <h1 className="text-5xl font-bold mb-4">I am Michael</h1>
                    <p className="text-md">
                        <TypewriterEffectSmooth
                            words={words}
                            className="inline-block font-semibold"
                        />
                    </p>
                    <p className="text-sm mt-4">
                        I'm a full stack specializing in React and Next.js. </p>
                </div>

                {/* Right Column: 3D Image Card */}
                <div>
                    <ProfileCard />
                </div>
            </div>
        </section>
    );
};

export default About;

// import React from 'react';
// import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";

// const About: React.FC = () => {
//     return (
//         <section id="about" className={`h-200 ${roboto_mono.className} h-screen text-center py-20`}>
//             <h1 className='text-5xl font-bold'>I am Michael</h1>
//             <p >I'm a web developer specializing in React and Next.js.</p>
//         </section>
//     );
// };

// export default About;