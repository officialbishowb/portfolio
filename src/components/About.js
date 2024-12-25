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
            <div className="flex flex-col 2xl:flex-row items-center p-8 rounded-lg shadow-lg sm:max-w-[80%] max-w-[90%]">
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
                            My name is Bishow and I am <span className='text-underline'>{age}</span> years old.
                            I spend a lot of my free time learning new skills and exploring cool technologies. While I&apos;m into full-stack development (working on both the frontend and backend), my real passion is backend stuff — like working with APIs, databases, and building systems that can scale.
                        </span>
                        <br />
                        <span>
                        I&apos;m also super into cybersecurity, which is a big part of why I chose to study IT in the first place. 
                        </span> <br /> <br />
                        <span>
                            As for projects, I’ve got a bunch of random ones on my <a href="https://github.com/officialbishowb"  target="_blank" rel="noopener noreferrer" className='text-underline'>GitHub</a>. They&apos;re mostly small, useful tools that can make life a bit easier, so definitely check them out if you&apos;re interested!                        </span>
                        <br /> 
                        <span>
                        When I&apos;m not coding, I try to stay active and hit the gym a few times a week to keep the balance.
                        </span>
                        <br /><br />
                        <span>Well, these are all basic infos about me. </span>

                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;
