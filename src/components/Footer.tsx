import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-dark-400 mb-4 md:mb-0">
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> and <Code className="w-4 h-4 text-primary-400" /> by Dhiya Joseph
            </p>
          </div>
          
          <div className="text-dark-400 text-sm">
            <p>&copy; 2024 Dhiya Joseph. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-dark-700 text-center text-dark-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;