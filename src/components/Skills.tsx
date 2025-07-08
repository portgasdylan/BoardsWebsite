import React from 'react';
import { Code, Server, Palette, Zap, Database, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "bg-red-600",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "bg-black",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "Express", level: 75 },
        { name: "Flask", level: 70 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "bg-red-600",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-black",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "Figma", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-black transform -skew-x-12 origin-top-right opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-red-600 transform skew-x-12 origin-bottom-left opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            MY <span className="text-red-600">SKILLS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical expertise developed through continuous learning and practical application
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} className="group" delay={index * 0.15}>
              <div className={`${index % 2 === 0 ? 'transform skew-y-2' : 'transform -skew-y-2'} transition-transform duration-300 group-hover:scale-105`}>
                <div className="bg-white border-4 border-black shadow-2xl overflow-hidden">
                  <div className={`${index % 2 === 0 ? 'transform -skew-y-2' : 'transform skew-y-2'} p-6`}>
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                      <div className={`${category.color} text-white p-3 mr-3`}>
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-black">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-800 font-medium">{skill.name}</span>
                            <span className="text-gray-600 text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 h-2 border border-gray-300">
                            <div
                              className={`h-full ${index % 2 === 0 ? 'bg-red-600' : 'bg-black'} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Skills Panel */}
        <AnimatedSection className="mt-16 text-center" delay={0.6}>
          <div className="bg-black text-white p-8 transform -skew-y-1 border-4 border-black shadow-2xl inline-block max-w-4xl">
            <div className="transform skew-y-1">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="mb-6 text-gray-300">
                Currently exploring: Machine Learning, Web3 Development, and Advanced React Patterns
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-red-600 text-white px-4 py-2 font-medium">TensorFlow</span>
                <span className="bg-red-600 text-white px-4 py-2 font-medium">Solidity</span>
                <span className="bg-red-600 text-white px-4 py-2 font-medium">Next.js</span>
                <span className="bg-red-600 text-white px-4 py-2 font-medium">GraphQL</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;