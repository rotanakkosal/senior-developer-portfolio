import React from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
    return (
        <section id={id} className={`py-16 px-4 sm:px-8 lg:px-16 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
