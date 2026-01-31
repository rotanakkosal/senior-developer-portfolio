import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} Senior Developer. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;
