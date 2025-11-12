import React, { useState } from 'react';
import { Menu, X, Code, User, Briefcase, Mail, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isObjectivesOpen, setIsObjectivesOpen] = useState(false);

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

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              About
            </a>
            <div
              className="relative"
              onMouseEnter={() => setIsObjectivesOpen(true)}
              onMouseLeave={() => setIsObjectivesOpen(false)}
            >
              <button className="text-white hover:text-red-500 transition-colors duration-300 font-medium flex items-center space-x-1">
                <span>Objectives</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isObjectivesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isObjectivesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-sm border border-white/10 shadow-xl">
                  <a
                    href="#objectives"
                    className="block px-4 py-3 text-white hover:bg-red-600 transition-colors duration-300 border-b border-white/10"
                  >
                    Computer Science
                  </a>
                  <a
                    href="#objectives-ds"
                    className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    Data Science
                  </a>
                </div>
              )}
            </div>
            <a href="#copay" className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
              CoPay
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
              <div className="space-y-2">
                <div className="text-white font-medium flex items-center space-x-2">
                  <User size={16} />
                  <span>Objectives</span>
                </div>
                <div className="pl-6 space-y-2">
                  <a
                    href="#objectives"
                    className="block text-gray-300 hover:text-red-500 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Computer Science
                  </a>
                  <a
                    href="#objectives-ds"
                    className="block text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Data Science
                  </a>
                </div>
              </div>
              <a
                href="#copay"
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} />
                <span>CoPay</span>
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