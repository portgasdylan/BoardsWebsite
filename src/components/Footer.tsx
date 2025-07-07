import React from 'react';
import { Heart, Code } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-red-600 transform skew-x-12 origin-top-left opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-full bg-red-600 transform -skew-x-12 origin-bottom-right opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-red-600 transform rotate-45 flex items-center justify-center">
              <Code className="w-4 h-4 text-white transform -rotate-45" />
            </div>
            <span className="text-xl font-bold">CS.MANGA</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of</span>
            <Code className="w-4 h-4 text-red-500" />
            <span>by a manga enthusiast</span>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400" delay={0.2}>
          <p>&copy; 2024 CS.MANGA Portfolio. All rights reserved.</p>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;