import React from 'react';
import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";

const About: React.FC = () => {
    return (
        <section id="about" className={`h-200 ${roboto_mono.className} h-screen text-center py-20`}>
            <h1 className='text-5xl font-bold'>I am Michael</h1>
            <p >I'm a web developer specializing in React and Next.js.</p>
        </section>
    );
};

export default About;