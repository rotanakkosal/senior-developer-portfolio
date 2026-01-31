import React from 'react';
import Section from '../Layout/Section';
import heroImage from '../../assets/hero.png';

const Hero: React.FC = () => {
    return (
        <Section id="home" className="pt-32 min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-teal-600 dark:text-teal-400 font-medium text-lg">Hello, I am</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Senior <br />
                        <span className="text-gray-500 dark:text-gray-400">Developer</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg leading-relaxed">
                        I build immersive and beautiful web applications through carefully crafted user-friendly design and robust code.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a href="#contact" className="px-8 py-3 bg-teal-500 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-teal-600 dark:hover:bg-teal-400 transition-colors">
                            Let's Talk
                        </a>
                        <a href="#projects" className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                            My Work
                        </a>
                    </div>
                </div>
                <div className="relative">
                    {/* Decorative elements could be added here */}
                    <div className="absolute -inset-4 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
                    <img
                        src={heroImage}
                        alt="Profile"
                        className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full max-w-md mx-auto object-cover shadow-2xl ring-1 ring-gray-800"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Hero;
