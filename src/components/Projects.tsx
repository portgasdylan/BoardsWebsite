import React from 'react';
import { Github, ExternalLink, Code, Smartphone, Globe, Database, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "CSC115 Final Project",
      description: "Python data analysis project demonstrating core programming concepts, data structures, and analytical techniques learned throughout the course.",
      tech: ["Python", "Jupyter", "Data Analysis"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-red-600",
      link: "https://colab.research.google.com/drive/1kn_-okiqHDiVPswE65a41biYMJ4i4qBr?usp=sharing",
      linkType: "colab"
    },
    {
      title: "Manga Reader App",
      description: "A full-stack React application for reading manga online with user authentication, bookmarks, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-black"
    },
    {
      title: "Portfolio Website",
      description: "A responsive manga-themed portfolio showcasing my projects and skills with modern design and animations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: <Globe className="w-6 h-6" />,
      color: "bg-red-600"
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive dashboard for visualizing complex datasets with charts, graphs, and real-time updates.",
      tech: ["Python", "D3.js", "Flask", "PostgreSQL"],
      icon: <Database className="w-6 h-6" />,
      color: "bg-black"
    },
    {
      title: "Code Snippet Manager",
      description: "A desktop application for organizing and managing code snippets with syntax highlighting and search functionality.",
      tech: ["Electron", "JavaScript", "SQLite", "CSS"],
      icon: <Code className="w-6 h-6" />,
      color: "bg-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-black transform skew-y-12 origin-top-left opacity-5"></div>
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-red-600 transform -skew-y-12 origin-bottom-right opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            MY <span className="text-red-600">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and creative approach
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} className="group" delay={index * 0.2}>
              <div className={`${index % 2 === 0 ? 'transform skew-y-1' : 'transform -skew-y-1'} transition-transform duration-300 group-hover:scale-105`}>
                <div className="bg-white border-4 border-black shadow-2xl overflow-hidden">
                  <div className={`${index % 2 === 0 ? 'transform -skew-y-1' : 'transform skew-y-1'} p-6`}>
                    {/* Project Header */}
                    <div className="flex items-center mb-4">
                      <div className={`${project.color} text-white p-3 mr-4`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-black">{project.title}</h3>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-800 px-3 py-1 text-sm font-medium border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      {project.linkType === 'colab' ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Notebook</span>
                        </a>
                      ) : (
                        <>
                          <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-300">
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </button>
                          <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors duration-300">
                            <ExternalLink className="w-4 h-4" />
                            <span>Demo</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection className="text-center mt-16" delay={0.8}>
          <div className="bg-black text-white p-8 transform skew-y-2 border-4 border-black shadow-2xl inline-block">
            <div className="transform -skew-y-2">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="mb-6">Check out my GitHub for additional projects and contributions</p>
              <a
                href="https://github.com/portgasdylan"
                className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors duration-300 inline-block"
              >
                VISIT GITHUB
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;