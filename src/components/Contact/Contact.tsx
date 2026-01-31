import React from 'react';
import Section from '../Layout/Section';

const Contact: React.FC = () => {
    return (
        <Section id="contact" className="bg-gray-100 dark:bg-gray-800/50">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Interested in working together? I'd love to hear from you.
                </p>
            </div>
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Message</label>
                        <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="button" className="w-full bg-teal-500 text-white dark:text-gray-900 font-bold py-4 rounded-lg hover:bg-teal-600 dark:hover:bg-teal-400 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
