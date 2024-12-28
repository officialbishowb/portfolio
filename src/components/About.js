import React from 'react';
import Image from 'next/image';

import styles from '@/app/styles/components/About.module.scss';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";

const About = () => {
    const birthDate = new Date(2003, 11, 9); // Adjust the month and day as needed
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-8" id="about">
            <h1 className="text-4xl font-bold mb-8 text-underline">
                About Me
            </h1>
            <div className="flex flex-col 2xl:flex-row items-center p-8 rounded-lg shadow-lg sm:max-w-[80%] max-w-[98%]">
                <div className="flex-1 flex justify-center mr-0 2xl:mr-[-5rem]">
                    <Image
                        src="https://avatars.githubusercontent.com/u/55999477?v=4"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full border border-foreground"
                    />
                </div>
                <div className="flex-1 mt-10 2xl:mt-0">
                    <div className="text-[3rem] font-bold">Bishow</div>
                    <div className='social-link flex flex-col sm:flex-row mb-4 space-y-4 sm:space-y-0 sm:space-x-4'>

                        <a href="https://github.com/officialbishowb" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} flex items-center justify-center`}>
                            <FaGithub size={20} className="mr-2" />
                            Github
                        </a>

                        <a href="https://www.linkedin.com/in/bishowb/" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} flex items-center justify-center`}>
                            <FaLinkedin size={20} className="mr-2" />
                            LinkedIn
                        </a>

                        <a href="https://www.instagram.com/officialbishowb/" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} flex items-center justify-center`}>
                            <FaInstagram size={20} className="mr-2" />
                            Instagram
                        </a>


                    </div>
                    <p className="text-left text-lg">
    <span>
        My name is Bishow, and I&apos;m a tech enthusiast with a passion for backend development — APIs, databases, and scalable systems are my main focus.
    </span>
    <br />
    <span>
        I&apos;m also keen on cybersecurity, which was also the big reason I got interested in general IT and programming.
    </span>
    <br /><br />
    <span>
        You can check out some of my projects on <a href="https://github.com/officialbishowb" target="_blank" rel="noopener noreferrer" className="text-underline">GitHub</a>. They include small !useful projects, I did and probably did not finished 😅.
    </span>
    <br />
    <span>
        Outside of coding, I enjoy staying active and working on my fitness.
    </span>
    <br /><br />
    <span>Well that&apos;s enough about me :)</span>
</p>


                </div>
            </div>
        </div>
    );
};

export default About;
