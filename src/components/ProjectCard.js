import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="project-card bg-background rounded-lg shadow-md border border-foreground relative">
            <div className="relative">
                <Image src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="absolute inset-0 bg-black opacity-30 rounded-t-lg"></div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
                <p className="mb-4 text-light_gray">{description}</p>
                <a href={projectUrl} className="text-accent" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;