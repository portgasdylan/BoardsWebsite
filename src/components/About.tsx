import React from 'react';
import { BookOpen, Code2, Palette, Zap, Laptop } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-black transform skew-x-12 origin-top-left opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-full bg-red-600 transform -skew-x-12 origin-bottom-right opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            ABOUT <span className="text-red-600">ME</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where code meets creativity, and algorithms dance with art
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio Panel */}
          <AnimatedSection className="lg:col-span-2" delay={0.2} direction="left">
            <div className="bg-white p-8 transform -skew-y-1 border-4 border-black shadow-2xl">
              <div className="transform skew-y-1">
                <h3 className="text-2xl font-bold text-black mb-6">My Story</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Hey! I'm Dylan Maxwell, a passionate Computer Science student with a love for building, designing, and exploring new ideas. I'm always looking for the next oppurtunity to learn, grow, and create something meaningful.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When I'm not coding you can usually find me gaming, experimenting with graphic design and photomanipulation, or diving into anime and manga for inspiration. I enjoy hands-on projects and constantly challenge myself to push creative and technical boundaries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  So far, I've explored technologies like Python, C++, SQL, React Native, HTML, CSS, and even Unreal Engine--each one adding a new layer to how I approach problem-solving and development. Whether I'm working solo or collaborating with a team, I bring curiosity, creativity, and drive to everything I do.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Side Panels */}
          <AnimatedSection className="space-y-6" delay={0.4} direction="right">
            {/* Panel 1 */}
            <div className="bg-black text-white p-6 transform skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform -skew-y-2">
                <Code2 className="w-8 h-8 mb-4 text-red-500" />
                <h4 className="text-xl font-bold mb-2">Developer</h4>
                <p className="text-sm">Bringing Ideas to life through full-stack web and app development.</p>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="bg-red-600 text-white p-6 transform -skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform skew-y-2">
                <Laptop className="w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-2">Computer Science Student</h4>
                <p className="text-sm">Learning core principles, writing clean code, and building real-world projects</p>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="bg-white text-black p-6 transform skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform -skew-y-2">
                <Palette className="w-8 h-8 mb-4 text-red-600" />
                <h4 className="text-xl font-bold mb-2">Designer</h4>
                <p className="text-sm">Creating intuitive and visually appealing interfaces</p>
              </div>
            </div>

            {/* Panel 4 */}
            <div className="bg-black text-white p-6 transform -skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform skew-y-2">
                <Zap className="w-8 h-8 mb-4 text-red-500" />
                <h4 className="text-xl font-bold mb-2">Innovator</h4>
                <p className="text-sm">Bridging technology and creativity for unique solutions</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;