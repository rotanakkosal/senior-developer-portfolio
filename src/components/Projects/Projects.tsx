import React from 'react';
import Section from '../Layout/Section';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers, featuring real-time data visualization and inventory management.",
        tags: ["React", "TypeScript", "D3.js", "Firebase"]
    },
    {
        title: "TaskFlow Interface",
        description: "A collaborative project management tool inspired by Kanban methodology with drag-and-drop capabilities.",
        tags: ["Vue", "Tailwind", "Node.js"]
    },
    {
        title: "AI Image Generator",
        description: "A SaaS application wrapping OpenAI's DALL-E API, allowing users to generate and edit images via prompt engineering.",
        tags: ["Next.js", "OpenAI API", "Stripe", "PostgreSQL"]
    },
    {
        title: "Finance Tracker",
        description: "Mobile-first web application for tracking personal expenses and visualizing spending habits over time.",
        tags: ["React Native", "Expo", "SQLite"]
    },
    {
        title: "Modern Portfolio V1",
        description: "The previous iteration of my personal portfolio, focusing on WebGL interactions and 3D elements.",
        tags: ["Three.js", "GSAP", "WebGL"]
    },
    {
        title: "Crypto Exchange UI",
        description: "A high-frequency trading interface prototype designed for speed and clarity in volatile markets.",
        tags: ["React", "WebSockets", "Styled Components"]
    }
];

const Projects: React.FC = () => {
    return (
        <Section id="projects">
            <div className="mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Selected Work</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                    A collection of projects that demonstrate my expertise in full-stack development and product design.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
