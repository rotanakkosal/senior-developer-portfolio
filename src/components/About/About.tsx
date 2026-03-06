import React from 'react';
import Section from '../Layout/Section';

const About: React.FC = () => {
    return (
        <Section id="about" className="bg-gray-100 dark:bg-gray-800/50">
            <div className="max-w-3xl border-l-4 border-teal-500 pl-6 md:pl-10 py-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    <p>
                        With over 5 years of experience in software development, I specialize in building scalable,
                        high-performance web applications. My passion lies in crafting elegant code and intuitive user interfaces.
                    </p>
                    <p>
                        I have a proven track record of leading teams and delivering complex projects on time.
                        My technical expertise spans simple landing pages to complex enterprise-level SaaS platforms.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                        {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'AWS', 'GraphQL', 'Docker'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-sm text-teal-600 dark:text-teal-400 font-medium border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
