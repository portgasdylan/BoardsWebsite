import React from 'react';
import {
  Github,
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  Database,
  BookOpen,
  Brain,
  BarChart3
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: JSX.Element;
  color: string;
  linkType?: 'colab' | 'links';
  colabLink?: string;
  github?: string;
  demo?: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    // === APPLICATIONS / WEBSITES ===
    {
      title: 'CoPay | Group Expense Manager',
      description:
        'A cross-platform app that simplifies shared expenses for groups, tracking balances and payments in real time as part of my Student Innovation Project (SIP).',
      tech: ['React Native', 'TypeScript', 'JavaScript'],
      icon: <Smartphone className="w-6 h-6" />,
      color: 'bg-black',
      linkType: 'links',
      github: 'https://github.com/portgasdylan/CoPaySIP',
      demo: 'https://youtube.com/shorts/pVcEdkaTU-8?feature=share'
    },
    {
      title: 'Fair Game | RFID Clothing Access Website',
      description:
        'A full-stack website that links RFID-tagged scholar garments to student accounts, controlling what each user can see and access through the database.',
      tech: ['MongoDB', 'JavaScript', 'HTML', 'CSS'],
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-red-600',
      linkType: 'links',
      github: 'https://github.com/FAIR-GAME-TM/Fair_Game-V2.0',
      demo: 'https://youtu.be/blP0Mr-GUXo'
    },
    {
      title: 'Universal Orlando Theme Park Database',
      description:
        'A normalized MySQL database for managing rides, attractions, visitors, employees, and tickets with foreign keys and JOIN queries for real business questions.',
      tech: ['MySQL', 'SQL', 'ERD'],
      icon: <Database className="w-6 h-6" />,
      color: 'bg-black',
      linkType: 'links',
      github:
        'https://github.com/portgasdylan/CSC211/blob/main/Theme%20Park%20DB/ThemeParkDB.sql',
      demo: '/UniversalOrlandoThemeParkDatabaseDocumentation.pdf' // if you want this to be a downloadable doc instead of "demo", change below
    },
    {
      title: 'Vowel Learning App',
      description:
        'An educational mobile app teaching vowel pronunciation in English and Spanish using interactive exercises and audio on both iOS and Android.',
      tech: ['React Native', 'JavaScript'],
      icon: <Smartphone className="w-6 h-6" />,
      color: 'bg-red-600',
      linkType: 'links',
      github: 'https://github.com/portgasdylan/VowelLearning',
      demo: 'https://youtube.com/shorts/QkjAxAlicKc'
    },
    // === C++ / OOP PROJECTS ===
    {
      title: 'Genshin Impact Wish Simulator',
      description:
        'A C++ gacha simulation that models character pulls with probability mechanics, object-oriented design, and user interaction.',
      tech: ['C++'],
      icon: <Code className="w-6 h-6" />,
      color: 'bg-black',
      linkType: 'links',
      github:
        'https://github.com/portgasdylan/CSC275/tree/main/GenshinImpactWishSim',
      demo: 'https://youtu.be/GPpk6bh7kr0'
    },
    {
      title: 'Ninja vs Pirate OOP Battle Game',
      description:
        'A turn-based C++ battle game using inheritance, encapsulation, and polymorphism across Character, Ninja, and Pirate classes.',
      tech: ['C++'],
      icon: <Code className="w-6 h-6" />,
      color: 'bg-red-600',
      linkType: 'links',
      github: 'https://github.com/portgasdylan/CSC275/tree/main/NinjaVPirates',
      demo: 'https://youtu.be/cgCruoKg5-M'
    },
    {
      title: 'Banking App | OOP Account System',
      description:
        'A C++ banking simulator with Account, Checking, and Savings classes that implement different rules for withdrawals and fees.',
      tech: ['C++'],
      icon: <Code className="w-6 h-6" />,
      color: 'bg-black',
      linkType: 'links',
      github: 'https://github.com/portgasdylan/CSC275/tree/main/BankingApp',
      demo: 'https://youtu.be/ueUgcxxo-8Y'
    },

    // === CORE WEB / JS PROJECT ===
    {
      title: 'Priority To-Do List with Sorting & Persistence',
      description:
        'A task manager that stores tasks as objects, supports priority-based sorting and filtering, and uses localStorage for persistent state.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: <Code className="w-6 h-6" />,
      color: 'bg-red-600',
      linkType: 'links',
      github: 'https://github.com/portgasdylan/ToDoList',
      demo: 'https://youtu.be/kKP6MIAWJbM'
    },

    // === DATA SCIENCE / NOTEBOOKS ===
    {
      title: 'Pokémon Legendary Classification',
      description:
        'A machine learning project using stats and type information to predict whether a Pokémon is Legendary, comparing Logistic Regression and Random Forest models.',
      tech: ['Python', 'pandas', 'scikit-learn'],
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-black',
      linkType: 'colab',
      colabLink:
        'https://colab.research.google.com/drive/1kn_-okiqHDiVPswE65a41biYMJ4i4qBr?usp=sharing'
    },
    {
      title: 'Bank Marketing Subscription Models',
      description:
        'Classification models (KNN, Logistic Regression, Decision Tree) predicting which clients will subscribe to a term deposit based on a bank marketing dataset.',
      tech: ['Python', 'pandas', 'scikit-learn'],
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-red-600',
      linkType: 'colab',
      colabLink:
        'https://colab.research.google.com/drive/1iOsIHtUwDIvljSKOJOKckLnV-lXt8yzn?usp=sharing'
    },
    {
      title: 'Maricopa Daily Mobility Analysis',
      description:
        'Logistic regression on daily mobility data for Maricopa County to classify high vs. low mobility days and explore patterns over time.',
      tech: ['Python', 'pandas', 'Logistic Regression'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-black',
      linkType: 'colab',
      colabLink:
        'https://colab.research.google.com/drive/1Ftx_WE4VEK-8isi_OpAWi8G9-Vd_G6D0?usp=sharing'
    },
    {
      title: 'Content-Based Book Recommendation System',
      description:
        'A privacy-first recommender that suggests similar books using cosine similarity over combined metadata like genre, themes, and era.',
      tech: ['Python', 'pandas', 'scikit-learn'],
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-red-600',
      linkType: 'colab',
      colabLink:
        'https://colab.research.google.com/drive/1TMfh-gveZtYYA4kSxn9AaASRcXOUKoRv?usp=sharing'
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
            A collection of projects that showcase my technical skills and
            creative approach
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              className="group"
              delay={index * 0.2}
            >
              <div
                className={`${
                  index % 2 === 0 ? 'transform skew-y-1' : 'transform -skew-y-1'
                } transition-transform duration-300 group-hover:scale-105`}
              >
                <div className="bg-white border-4 border-black shadow-2xl overflow-hidden">
                  <div
                    className={`${
                      index % 2 === 0
                        ? 'transform -skew-y-1'
                        : 'transform skew-y-1'
                    } p-6`}
                  >
                    {/* Project Header */}
                    <div className="flex items-center mb-4">
                      <div className={`${project.color} text-white p-3 mr-4`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-black">
                        {project.title}
                      </h3>
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
                    {project.linkType === 'colab' && project.colabLink && (
                      <div className="flex space-x-4">
                        <a
                          href={project.colabLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Notebook</span>
                        </a>
                      </div>
                    )}

                    {project.linkType !== 'colab' && (
                      <div className="flex space-x-4">
                        {project.github && project.github.trim() !== '' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-300"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.demo && project.demo.trim() !== '' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    )}
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
              <p className="mb-6">
                Check out my GitHub for additional projects and contributions
              </p>
              <a
                href="https://github.com/portgasdylan"
                target="_blank"
                rel="noopener noreferrer"
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
