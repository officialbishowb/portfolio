import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray text-foreground py-8 relative overflow-hidden">
            <div className="container mx-auto text-center relative z-10">
                <p className="mb-4 text-lg font-medium transition-all duration-300 hover:text-accent">
                    &copy; 2024 - {currentYear} officialbishowb. All rights reserved.
                </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-50"></div>
        </footer>
    );
};

export default Footer;