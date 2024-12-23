import React from 'react';
import Image from 'next/image';

import styles from '@/app/styles/components/About.module.scss';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";

import ProjectCard from '@/components/ProjectCard';
const Project = () => {
 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-8 overflow-y-auto" id="projects">
            <h1 className="text-4xl font-bold mb-8 text-underline">
               Projects
            </h1>

            <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl overflow-x-auto max-h-[70vh]">
                <ProjectCard
                    title="Project 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                    fermentum mi nec, l
                    uctus risus."
                    imageUrl="https://placehold.co/300x200"
                    projectUrl="https://github.com"
                />

                <ProjectCard
                    title="Project 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                    fermentum mi nec, l
                    uctus risus."
                    imageUrl="https://placehold.co/300x200"
                    projectUrl="https://github.com"
                />
                <ProjectCard
                    title="Project 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                    fermentum mi nec, l
                    uctus risus."
                    imageUrl="https://placehold.co/300x200"
                    projectUrl="https://github.com"
                />

                <ProjectCard
                    title="Project 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                    fermentum mi nec, l
                    uctus risus."
                    imageUrl="https://placehold.co/300x200"
                    projectUrl="https://github.com"
                />
                <ProjectCard
                    title="Project 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                    fermentum mi nec, l
                    uctus risus."
                    imageUrl="https://placehold.co/300x200"
                    projectUrl="https://github.com"
                />

                <ProjectCard
                    title="Project 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                    fermentum mi nec, l
                    uctus risus."
                    imageUrl="https://placehold.co/300x200"
                    projectUrl="https://github.com"
                />
                <ProjectCard
                    title="Project 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                    fermentum mi nec, l
                    uctus risus."
                    imageUrl="https://placehold.co/300x200"
                    projectUrl="https://github.com"
                />

                <ProjectCard
                    title="Project 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                    fermentum mi nec, l
                    uctus risus."
                    imageUrl="https://placehold.co/300x200"
                    projectUrl="https://github.com"
                />
            </div>

        </div>

    );
}

export default Project;
