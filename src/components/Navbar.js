'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/styles/components/Navbar.module.scss';
import { FaRegUserCircle ,FaExternalLinkSquareAlt  , FaEnvelope, FaBlog, FaProjectDiagram } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-20 left-1/2 transform -translate-x-1/2 sm:top-10 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-auto border border-gray-500 rounded-lg z-50 bg-background flex justify-center items-center p-2 shadow-lg">
            <ul className="flex flex-row justify-center items-center space-x-4">
                <li>
                    <Link href="/">
                        <div className={`${styles.navItem} ${pathname === '/' ? styles.navItemSelected : ''} text-white flex flex-row items-center space-x-2`}>
                            <IoHomeOutline  />
                            <p className="hidden sm:block">Home</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/#about">
                        <div className={`${styles.navItem} ${pathname === '/#about' ? styles.navItemSelected : ''} text-white flex flex-row items-center space-x-2`}>
                            <FaRegUserCircle />
                            <p className="hidden sm:block">About</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/#projects">
                        <div className={`${styles.navItem} ${pathname === '/#projects' ? styles.navItemSelected : ''} text-white flex flex-row items-center space-x-2`}>
                            <FaProjectDiagram />
                            <p className="hidden sm:block">Projects</p>
                        </div>
                    </Link>
                </li>
                
                <li>
                    <Link href="/#contact">
                        <div className={`${styles.navItem} ${pathname === '/#contact' ? styles.navItemSelected : ''} text-white flex flex-row items-center space-x-2`}>
                            <FaEnvelope />
                            <p className="hidden sm:block">Contact</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="https://blog.officialbishowb.com" target="_blank" rel="noopener noreferrer">
                        <div className={`${styles.navItem} text-white flex flex-row items-center space-x-2`}>
                            <FaBlog />
                            <p className="hidden sm:block relative">Blog
                                <FaExternalLinkSquareAlt className="absolute top-[-8px] right-[-15px] text-[.7rem] text-white" />
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
