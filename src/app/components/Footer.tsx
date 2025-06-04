import React from 'react';
import { pacifico, roboto_mono, roboto_condensed } from "@/styles/fonts";

const Footer: React.FC = () => {
    return (
        <footer className={`footer ${roboto_mono.className}`}>
            <p>&copy; 2025 Michael's Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;