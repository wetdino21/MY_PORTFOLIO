import React from 'react';
import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";

const Projects: React.FC = () => {
    return (
        <section id="projects" className={`h-200 ${roboto_mono.className} h-screen text-center py-20`}>
            <h2 className='text-5xl font-bold'>My Projects</h2>
            <p>Here are some of the projects I've worked on.</p>
        </section>
    );
};

export default Projects;