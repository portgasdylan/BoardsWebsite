import React, { useState } from 'react';
import { Menu, X, Code, User, Briefcase, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 transform rotate-45 flex items-center justify-center">
              <Code className="w-4 h-4 text-white transform -rotate-45" />
            </div>
            <span className="text-white font-bold text-xl">Dylan Maxwell</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#objectives" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              Objectives
            </a>
            <a href="#projects" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              Projects
            </a>
            <a href="#skills" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              Skills
            </a>
            <a href="#contact" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-red-500 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="#home"
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} />
                <span>Home</span>
              </a>
              <a
                href="#about"
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} />
                <span>About</span>
              </a>
              <a
                href="#objectives"
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} />
                <span>Objectives</span>
              </a>
              <a
                href="#projects"
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Briefcase size={16} />
                <span>Projects</span>
              </a>
              <a
                href="#skills"
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code size={16} />
                <span>Skills</span>
              </a>
              <a
                href="#contact"
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;