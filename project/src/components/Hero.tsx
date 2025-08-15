import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      <div className="container mx-auto px-6 py-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/profile.jpeg"
              alt="Professional headshot"
              loading="lazy"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-xl ring-4 ring-white dark:ring-gray-700"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anumolu Abhiram
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Computer Science Student passionate about AI/ML, Web Development, and creating 
            innovative solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/AnumoluAbhiram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhiram-anumolu-27435928b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:2200080096aids@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};
