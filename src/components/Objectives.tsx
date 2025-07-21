import React from 'react';
import { Code, Database, Smartphone, Globe, Layers, BarChart3, Github, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Objectives: React.FC = () => {
  const objectives = [
    {
      id: 1,
      title: "Document a software development process to analyze a problem and to design, build and test software solutions.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-red-600",
      projects: [
        {
          name: "CoPay App",
          description: "Documented and analyzed the app's purpose, competitors, and features as part of my SIP.",
          tech: ["React", "TypeScript", "JavaScript"],
          type: "Mobile Application",
          github: "https://github.com/portgasdylan/CoPaySIP",
          demo: "https://youtube.com/shorts/pVcEdkaTU-8?feature=share"
        },
        // {
        //   name: "Maze Generator",
        //   description: "Designed and tested a recursize maze-generation algorithm with optional solvability.",
        //   tech: ["C++"],
        //   type: "Program",
        //   github: "https://github.com/portgasdylan/CSC275/tree/main/Recursion",
        //   demo: null
        // }, 
        {
          name: "Genshin Impact Simulator",
          description: "Developed a character gacha simulation system with probability mechanics and user interaction.",
          tech: ["C++"],
          type: "Game Simulation",
          github: "https://github.com/portgasdylan/CSC275/tree/main/GenshinImpactWishSim",
          demo: "https://youtu.be/GPpk6bh7kr0"
        },
        {
          name: "Portfolio Website",
          description: "Documented design process, analyzed user experience needs, and built a responsive showcase site.",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          type: "Web Application",
          github: "https://github.com/portgasdylan/BoardsWebsite",
          demo: "https://dylanmaxwell.netlify.app/"
        }
      ]
    },
    {
      id: 2,
      title: "Demonstrate software development skills using more than one programming language and development environment.",
      icon: <Layers className="w-8 h-8" />,
      color: "bg-black",
      projects: [
        {
          name: "CoPay App",
          description: "Built using JavaScript/TypeScript and VS Code integration.",
          tech: ["React", "JavaScript", "TypeScript"],
          type: "Mobile Application",
          github: "https://github.com/portgasdylan/CoPaySIP",
          demo: "https://youtube.com/shorts/pVcEdkaTU-8?feature=share"
        },
        {
          name: "M5Core2 IoT Display",
          description: "Developed in C++/Arduino for real-time sensor output and button integrations.",
          tech: ["C++"],
          type: "IoT",
          github: "https://github.com/portgasdylan/CSC230/blob/main/Lab8",
          demo: "https://www.youtube.com/shorts/AfAaL3NtWaE"
        },
        {
          name: "Portfolio Website",
          description: "Built using React/TypeScript in VS Code with modern development practices.",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          type: "Web Application",
          github: "https://github.com/portgasdylan/BoardsWebsite",
          demo: "https://dylanmaxwell.netlify.app/"
        },
      ]
    },
    {
      id: 3,
      title: "Implement data-driven solutions.",
      icon: <Database className="w-8 h-8" />,
      color: "bg-red-600",
      projects: [
        // {
        //   name: "Theme Park Database (MySQL)",
        //   description: "Create a normalized schema with joins and useful queries.",
        //   tech: ["MySQL"],
        //   type: "Data Science",
        //   github: "https://github.com/portgasdylan/CSC211/blob/main/Theme%20Park%20DB/ThemeParkDB.sql",
        //   demo: null
        // }, 
        {
          name: "To-Do List with Priority Sorting",
          description: "This task management app implements a data-driven solution by storing, processing, and transforming task data to dynamically control UI behavior, sorting, filtering, and persistence.",
          tech: ["HTML", "CSS", "Javascript"],
          type: "Program",
          github: "https://github.com/portgasdylan/ToDoList",
          demo: "https://youtu.be/kKP6MIAWJbM"
        },
        {
          name: "Fair Game Website",
          description: "Stored RFID-linked clothing data and implemented account-based access.",
          tech: ["MongoDB", "JavaScript", "HTML", "Css"],
          type: "Website",
          github: "https://github.com/FAIR-GAME-TM/Fair_Game-V2.0",
          demo: "https://youtu.be/blP0Mr-GUXo"
        }
      ]
    },
    {
      id: 4,
      title: "Design and implement software solutions for multiple platforms including mobile devices.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-black",
      projects: [
        {
          name: "CoPay App",
          description: "Designed for both mobile and web usage, enabling shared group payments.",
          tech: ["React Native", "JavaScript", "TypeScript"],
          type: "Mobile Application",
          github: "https://github.com/portgasdylan/CoPaySIP",
          demo: "https://youtube.com/shorts/pVcEdkaTU-8?feature=share"
        },
        {
          name: "Vowel Learning App",
          description: "Educational mobile app teaching vowel pronunciation in both English and Spanish with interactive exercises.",
          tech: ["React Native", "JavaScript"],
          type: "Mobile Application",
          github: "https://github.com/portgasdylan/VowelLearning",
          demo: null
        },
      ]
    },
    {
      id: 5,
      title: "Design, develop, and maintain object oriented software solutions utilizing inheritance, encapsulation, polymorphism, and abstraction.",
      icon: <Layers className="w-8 h-8" />,
      color: "bg-red-600",
      projects: [
        {
          name: "Ninja vs Pirate Game",
          description: "Implemented class heirarchy with overriding methods and encapsulated properties.",
          tech: ["C++"],
          type: "Application",
          github: "https://github.com/portgasdylan/CSC275/tree/main/NinjaVPirates",
          demo: null
        },
        {
          name: "Genshin Impact Simulator",
          description: "Built class hierarchy leveraging inheritance, encapsulation, abstraction, and polymorphism.",
          tech: ["C++"],
          type: "Game Simulation",
          github: "https://github.com/portgasdylan/CSC275/tree/main/GenshinImpactWishSim",
          demo: "https://youtu.be/GPpk6bh7kr0"
        },
        {
          name: "Banking App",
          description: "Created using multiple classes with proper OOP principles applied.",
          tech: ["C++"],
          type: "Application",
          github: "https://github.com/portgasdylan/CSC275/tree/main/BankingApp",
          demo: null
        }
      ]
    },
    {
      id: 6,
      title: "Within software solutions, describe, implement and analyze data structure techniques.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-black",
      projects: [
        {
          name: "To-Do List with Priority Sorting",
          description: "This project demonstrates the implementation and analysis of data structure techniques through object arrays, sorting algorithms, filtering, and persistent state management using serialization with localStorage",
          tech: ["HTML", "CSS", "Javascript"],
          type: "Program",
          github: "https://github.com/portgasdylan/ToDoList",
          demo: null
        },
        {
          name: "Fair Game Website",
          description: "This web application implements and analyzes data structure techniques through MongoDB's schema design and JavaScript-based logic to manage user-linked scholar garments and access control.",
          tech: ["MongoDB", "JavaScript", "HTML", "Css"],
          type: "Website",
          github: "https://github.com/FAIR-GAME-TM/Fair_Game-V2.0",
          demo: null
        },
      ]
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-black transform skew-y-12 origin-top-left opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-red-600 transform -skew-y-12 origin-bottom-right opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            CS DEGREE <span className="text-red-600">OBJECTIVES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advancing Computer Science program objectives demonstrated through practical projects and real-world applications
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {objectives.map((objective, index) => (
            <AnimatedSection key={objective.id} delay={index * 0.2}>
              <div className={`${index % 2 === 0 ? 'transform skew-y-1' : 'transform -skew-y-1'} transition-transform duration-300`}>
                <div className="bg-gray-100 border-4 border-black shadow-2xl overflow-hidden">
                  <div className={`${index % 2 === 0 ? 'transform -skew-y-1' : 'transform skew-y-1'} p-8`}>
                    {/* Objective Header */}
                    <div className="flex items-start mb-8">
                      <div className={`${objective.color} text-white p-4 mr-6 flex-shrink-0`}>
                        {objective.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-4">
                          Objective {objective.id}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {objective.title}
                        </p>
                      </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {objective.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="bg-white border-2 border-gray-300 p-6 hover:border-red-600 transition-colors duration-300 group">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-black group-hover:text-red-600 transition-colors duration-300">
                              {project.name}
                            </h4>
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                              {project.type}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-gray-100 text-gray-800 px-2 py-1 text-xs font-medium border border-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Project Links */}
                          <div className="flex space-x-3">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1 bg-black text-white px-3 py-2 text-sm hover:bg-gray-800 transition-colors duration-300"
                              >
                                <Github className="w-3 h-3" />
                                <span>Code</span>
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1 bg-red-600 text-white px-3 py-2 text-sm hover:bg-red-700 transition-colors duration-300"
                              >
                                <ExternalLink className="w-3 h-3" />
                                <span>Demo</span>
                              </a>
                            )}
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

        {/* Summary Panel */}
        <AnimatedSection className="mt-20 text-center" delay={1.2}>
          <div className="bg-black text-white p-8 transform skew-y-2 border-4 border-black shadow-2xl inline-block max-w-4xl">
            <div className="transform -skew-y-2">
              <h3 className="text-2xl font-bold mb-4">Learning Journey</h3>
              <p className="mb-6 text-gray-300">
                These projects demonstrate mastery of core computer science principles through practical application, 
                showcasing technical depth across multiple domains and technologies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-red-600 p-3">
                  <div className="font-bold">17</div>
                  <div>Projects</div>
                </div>
                <div className="bg-red-600 p-3">
                  <div className="font-bold">7</div>
                  <div>Languages</div>
                </div>
                <div className="bg-red-600 p-3">
                  <div className="font-bold">6</div>
                  <div>Degree Objectives</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Objectives;