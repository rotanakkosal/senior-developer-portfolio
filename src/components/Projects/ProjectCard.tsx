import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, link = '#' }) => {
    return (
        <a href={link} className="group block bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{title}</h3>
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
