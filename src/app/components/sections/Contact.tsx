import React from 'react';
import { pacifico, roboto_mono, roboto_condensed } from "../../../styles/fonts";

const Contact: React.FC = () => {
    return (
        <section id="contact" className={`h-200 ${roboto_mono.className} h-screen text-center py-20`}>
            <h2 className='text-5xl font-bold'>Contact Me</h2>
            <p>Feel free to reach out to me via email or social media.</p>
        </section>
    );
};

export default Contact;