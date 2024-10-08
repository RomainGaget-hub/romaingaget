// components/Footer.tsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; 2024 Romain Gaget</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://twitter.com/yourprofile" className="hover:text-gray-400">X</a>
                    <a href="https://linkedin.com/in/yourprofile" className="hover:text-gray-400">LinkedIn</a>
                    <a href="https://github.com/yourprofile" className="hover:text-gray-400">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;