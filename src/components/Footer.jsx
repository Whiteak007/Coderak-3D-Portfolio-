import React from "react";
import { motion } from "framer-motion";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

// Variants for the footer animation
const footerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

// Variants for the navigation links animation
const navLinkVariants = {
    hover: { scale: 1.1, color: "#a855f7" },
    tap: { scale: 0.95 },
};

// Variants for the social icons animation
const socialIconVariants = {
    hover: { scale: 1.2, color: "#a855f7", y: -3 },
    tap: { scale: 0.9 },
};

const Footer = () => {
    // Smooth scroll function
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.footer
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] text-white py-12 px-[12vw] md:px-[7vw] lg:px-[16vw] shadow-inner"
            variants={footerVariants}
            initial="initial"
            animate="animate"
        >
            <div className="container mx-auto text-center flex flex-col items-center">
                {/* Name / Logo */}
                <motion.h2
                    className="text-xl font-semibold text-purple-500 mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleScroll("home")} // Assuming you have a "home" section
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Ankit Bhagat
                </motion.h2>

                {/* Navigation Links - Responsive */}
                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6">
                    {[
                        { name: "About", id: "about" },
                        { name: "Skills", id: "skills" },
                        { name: "Experience", id: "experience" },
                        { name: "Projects", id: "projects" },
                        { name: "Education", id: "education" },
                        { name: "Contact", id: "contact" },
                    ].map((item, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className="hover:text-purple-500 text-sm sm:text-base my-1 transition-colors duration-300"
                            variants={navLinkVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            {item.name}
                        </motion.button>
                    ))}
                </nav>

                {/* Social Media Icons - Responsive */}
                <div className="flex flex-wrap justify-center space-x-6 mb-8">
                    {[
                        { icon: <FaFacebook />, link: "https://github.com/Whiteak007" },
                        { icon: <FaTwitter />, link: "https://x.com/AnkitKumar50657" },
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ankit-bhagata/" },
                        { icon: <FaInstagram />, link: "https://www.instagram.com/coderak_/" },
                        { icon: <FaGithub />, link: "https://github.com/Whiteak007" }, // Added GitHub icon
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-purple-500 transition-colors duration-300"
                            variants={socialIconVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-24 h-0.5 bg-purple-500 rounded-full mb-6" />

                {/* Copyright and Additional Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-400 space-y-2 sm:space-y-0 sm:space-x-4">
                    <p className="flex items-center">
                        <BiCopyright className="mr-1" /> 2025 Ankit Bhagat. All rights reserved.
                    </p>
                    <p className="italic">Designed & Developed with ❤️ in India</p>
                    {/* You can add more links or information here, e.g., privacy policy, terms of service */}
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;