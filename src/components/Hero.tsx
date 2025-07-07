import React from 'react';
import { ChevronDown, Terminal, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-white relative overflow-hidden">
      {/* Diagonal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Large diagonal cuts */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-black transform skew-y-12 origin-top-right"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-600 transform -skew-y-12 origin-bottom-left"></div>
          
          {/* Smaller accent cuts */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-black transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-600 transform rotate-45"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Panel - Main Content */}
          <AnimatedSection className="relative" delay={0.2}>
            <div className="bg-white/90 backdrop-blur-sm p-8 transform -skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform skew-y-2">
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                  <span className="block">Dylan</span>
                  <span className="block text-red-600">J.</span>
                  <span className="block">Maxwell</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-800 mb-6">
                  Hello! I'm a Computer Science major with a strong interest in software development, UI/UX design, and problem solving. I love building intuitive, user-friendly experiences through code.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="bg-red-600 text-white px-6 py-3 font-semibold transform hover:scale-105 transition-transform duration-300 border-2 border-black shadow-lg"
                  >
                    VIEW PROJECTS
                  </a>
                  <a
                    href="#about"
                    className="bg-black text-white px-6 py-3 font-semibold transform hover:scale-105 transition-transform duration-300 border-2 border-black shadow-lg"
                  >
                    ABOUT ME
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Panel - Visual Elements */}
          <AnimatedSection className="relative" delay={0.4} direction="right">
            <div className="grid grid-cols-2 gap-4">
              {/* Panel 1 */}
              <div className="bg-black text-white p-6 transform skew-y-2 border-4 border-black shadow-2xl">
                <div className="transform -skew-y-2">
                  <Terminal className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Full Stack</h3>
                  <p className="text-sm">Development</p>
                </div>
              </div>

              {/* Panel 2 */}
              <div className="bg-red-600 text-white p-6 transform -skew-y-2 border-4 border-black shadow-2xl">
                <div className="transform skew-y-2">
                  <Heart className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">a</h3>
                  <p className="text-sm">a</p>
                </div>
              </div>

              {/* Panel 3 */}
              <div className="bg-white text-black p-6 transform -skew-y-2 border-4 border-black shadow-2xl">
                <div className="transform skew-y-2">
                  <div className="w-8 h-8 bg-red-600 transform rotate-45 mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">Creative</h3>
                  <p className="text-sm">Problem Solver</p>
                </div>
              </div>

              {/* Panel 4 */}
              <div className="bg-black text-white p-6 transform skew-y-2 border-4 border-black shadow-2xl">
                <div className="transform -skew-y-2">
                  <div className="w-8 h-8 bg-white transform rotate-45 mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">Computer Science</h3>
                  <p className="text-sm">Student</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatedSection className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" delay={0.8}>
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-black" />
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;