'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/styles/components/Navbar.module.scss';
import { FaRegUserCircle, FaExternalLinkSquareAlt, FaEnvelope, FaBlog, FaProjectDiagram } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {



    const navItems = [
        { href: '/', label: 'Home', icon: <IoHomeOutline /> },
        { href: '/#about', label: 'About', icon: <FaRegUserCircle /> },
        // { href: '/#projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { href: '/#contact', label: 'Contact', icon: <FaEnvelope /> },
        { href: 'https://blog.officialbishowb.com', label: 'Blog', icon: <FaBlog />, external: true },
    ];

    return (
        <nav className="fixed bottom-20 left-1/2 transform -translate-x-1/2 sm:top-10 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-auto border border-gray-500 rounded-lg z-50 sm:bg-opacity-50 backdrop-filter-none bg-background sm:bg-transparent sm:backdrop-blur-2xl flex justify-center items-center p-2 shadow-lg">
            <ul className="flex flex-row justify-center items-center space-x-1 sm:space-x-4">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} target={item.external ? '_blank' : '_self'} rel="noopener noreferrer">
                            <div
                                className={`${styles.navItem} text-white flex flex-row items-center space-x-2`}
                            >
                                {item.icon}
                                <p className="relative">
                                    <span className="hidden sm:block">{item.label}</span>
                                    <FaExternalLinkSquareAlt
                                        className={`${item.external ? '' : 'hidden'} absolute top-[-8px] right-[-15px] text-[.7rem] text-white`}
                                    />
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
