import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="flex items-center justify-center md:justify-start text-gray-300">
              Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />{' '}
              by Abhiram Anumolu
            </p>
            <p className="text-sm text-gray-400 mt-1">
              © 2025 All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};