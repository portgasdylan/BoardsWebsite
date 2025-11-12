import React from 'react';
import { Code, Database, Smartphone, Globe, Layers, BarChart3, Github, ExternalLink, FileText, Brain, TrendingUp, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Objectives: React.FC = () => {
  const csObjectives = [
    {
      id: 1,
      title: "Document a software development process to analyze a problem and to design, build and test software solutions.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-red-600",
      projects: [
        {
          name: "CoPay App",
          description: "Documented and analyzed the app's purpose, competitors, and features as part of my SIP.",
          explanation: "This project shows how I planned out a real app from start to finish. I wrote down what problem it solves, looked at similar apps, and documented each step of building it. This proves I can analyze problems and design solutions properly.",
          tech: ["React", "TypeScript", "JavaScript"],
          type: "Mobile Application",
          github: "https://github.com/portgasdylan/CoPaySIP",
          demo: "https://youtube.com/shorts/pVcEdkaTU-8?feature=share",
          pdf: "/CoPayDocumentation.pdf"
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
          name: "Genshin Impact (Game) Simulator",
          description: "Developed a character gacha simulation system with probability mechanics and user interaction.",
          explanation: "I built this game step by step, first figuring out how gacha systems work, then designing the code structure, and finally testing it to make sure the probabilities worked correctly. This shows I can break down complex problems and build working solutions.",
          tech: ["C++"],
          type: "Game Simulation",
          github: "https://github.com/portgasdylan/CSC275/tree/main/GenshinImpactWishSim",
          demo: "https://youtu.be/GPpk6bh7kr0",
          pdf: "/GenshinImpactSim.pdf"
        },
        {
          name: "Theme Park Database (MySQL)",
          description: "Create a normalized schema with joins and useful queries.",
          explanation: "This database project demonstrates data-driven solutions by creating a normalized relational schema that stores visitor, ride, employee, and ticket data. The system uses foreign keys to establish relationships between tables, implements CRUD operations (Create, Read, Update, Delete), and uses JOIN queries to combine data from multiple tables to answer business questions. The data structure drives decision-making about visitor access, employee assignments, and maintenance scheduling.",
          tech: ["MySQL"],
          type: "Data Science",
          github: "https://github.com/portgasdylan/CSC211/blob/main/Theme%20Park%20DB/ThemeParkDB.sql",
          pdf: "/UniversalOrlandoThemeParkDatabaseDocumentation.pdf"
        } 
        // {
        //   name: "Portfolio Website",
        //   description: "Documented design process, analyzed user experience needs, and built a responsive showcase site.",
        //   explanation: "I planned this website by thinking about what visitors would want to see, sketched out the design, and built it piece by piece. I tested it on different devices to make sure it works everywhere. This shows I can design and build complete web solutions.",
        //   tech: ["React", "TypeScript", "Tailwind CSS"],
        //   type: "Web Application",
        //   github: "https://github.com/portgasdylan/BoardsWebsite",
        //   demo: "https://dylanmaxwell.netlify.app/",
        //   pdf: "/SDLC-Process-Documentation.md"
        // }
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
          explanation: "This app uses both JavaScript and TypeScript, showing I can work with different programming languages. I built it in VS Code and also worked with React Native tools, proving I can use multiple development environments.",
          tech: ["React", "JavaScript", "TypeScript"],
          type: "Mobile Application",
          github: "https://github.com/portgasdylan/CoPaySIP",
          demo: "https://youtube.com/shorts/pVcEdkaTU-8?feature=share"
        },
        {
          name: "M5Core2 IoT Display Color Changer",
          description: "Developed in C++/Arduino for real-time sensor output and button integrations.",
          explanation: "This project uses C++ and Arduino IDE, which are completely different from web development. I had to learn new tools and ways of coding for hardware instead of websites, showing I can adapt to different programming environments.",
          tech: ["C++"],
          type: "IoT",
          github: "https://github.com/portgasdylan/CSC230/blob/main/Lab8",
          demo: "https://www.youtube.com/shorts/AfAaL3NtWaE"
        },
        {
          name: "Portfolio Website",
          description: "Built using React/TypeScript in VS Code with modern development practices.",
          explanation: "I used React and TypeScript together, plus modern tools like Tailwind CSS. I worked in VS Code with extensions and used Git for version control. This shows I can use professional development tools and workflows.",
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
        {
          name: "Theme Park Database (MySQL)",
          description: "Create a normalized schema with joins and useful queries.",
          explanation: "This database project demonstrates data-driven solutions by creating a normalized relational schema that stores visitor, ride, employee, and ticket data. The system uses foreign keys to establish relationships between tables, implements CRUD operations (Create, Read, Update, Delete), and uses JOIN queries to combine data from multiple tables to answer business questions. The data structure drives decision-making about visitor access, employee assignments, and maintenance scheduling.",
          tech: ["MySQL"],
          type: "Data Science",
          github: "https://github.com/portgasdylan/CSC211/blob/main/Theme%20Park%20DB/ThemeParkDB.sql",
          pdf: "/UniversalOrlandoThemeParkDatabaseDocumentation.pdf"
        },  
        // {
        //   name: "To-Do List with Priority Sorting",
        //   description: "This task management app implements a data-driven solution by storing, processing, and transforming task data to dynamically control UI behavior, sorting, filtering, and persistence.",
        //   explanation: "This app takes user data (tasks) and uses it to make decisions about what to show on screen. It sorts tasks by priority, filters them by status, and saves everything so it remembers your tasks later. The data controls how the app behaves.",
        //   tech: ["HTML", "CSS", "Javascript"],
        //   type: "Program",
        //   github: "https://github.com/portgasdylan/ToDoList",
        //   demo: "https://youtu.be/kKP6MIAWJbM"
        // }, 
        {
          name: "Fair Game Website",
          description: "Stored RFID-linked clothing data and implemented account-based access.",
          explanation: "This website connects clothing items to student accounts using RFID data stored in a database. When students scan their cards, the system looks up their data and shows their clothes. The database information drives what each user can see and do.",
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
          explanation: "I built this app to work on phones, tablets, and computers. Users can access it from any device and it looks good on all screen sizes. This shows I can make apps that work across different platforms and devices.",
          tech: ["React Native", "JavaScript", "TypeScript"],
          type: "Mobile Application",
          github: "https://github.com/portgasdylan/CoPaySIP",
          demo: "https://youtube.com/shorts/pVcEdkaTU-8?feature=share"
        },
        {
          name: "Vowel Learning App",
          description: "Educational mobile app teaching vowel pronunciation in both English and Spanish with interactive exercises.",
          explanation: "This is a mobile-only app built with React Native that works on both iPhone and Android. It teaches vowels in two languages with touch interactions and audio. This proves I can build native mobile apps for multiple platforms.",
          tech: ["React Native", "JavaScript"],
          type: "Mobile Application",
          github: "https://github.com/portgasdylan/VowelLearning",
          demo: "https://youtube.com/shorts/QkjAxAlicKc"
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
          explanation: "This game uses classes for different character types (Ninja, Pirate) that inherit from a base Character class. Each character type has its own special abilities (polymorphism) while keeping health and stats private (encapsulation). This shows I understand OOP principles.",
          tech: ["C++"],
          type: "Application",
          github: "https://github.com/portgasdylan/CSC275/tree/main/NinjaVPirates",
          demo: "https://youtu.be/cgCruoKg5-M"
        },
        {
          name: "Genshin Impact Simulator",
          description: "Built class hierarchy leveraging inheritance, encapsulation, abstraction, and polymorphism.",
          explanation: "I created different character classes that all inherit from a base class but behave differently (polymorphism). Private variables keep character stats safe (encapsulation), and users don't need to know how the gacha system works internally (abstraction).",
          tech: ["C++"],
          type: "Game Simulation",
          github: "https://github.com/portgasdylan/CSC275/tree/main/GenshinImpactWishSim",
          demo: "https://youtu.be/GPpk6bh7kr0"
        },
        {
          name: "Banking App",
          description: "Created using multiple classes with proper OOP principles applied.",
          explanation: "This app has separate classes for different account types (Checking, Savings) that inherit from a main Account class. Each account type has different rules for withdrawals and fees, but they all share basic account features. This demonstrates all four OOP principles working together.",
          tech: ["C++"],
          type: "Application",
          github: "https://github.com/portgasdylan/CSC275/tree/main/BankingApp",
          demo: "https://youtu.be/ueUgcxxo-8Y"
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
          explanation: "I used arrays to store task objects, implemented sorting algorithms to organize tasks by priority, and used filtering to show different task categories. I also used localStorage to save and load data, showing I understand how to work with different data structures.",
          tech: ["HTML", "CSS", "Javascript"],
          type: "Program",
          github: "https://github.com/portgasdylan/ToDoList",
          demo: "https://youtu.be/kKP6MIAWJbM"
        },
        {
          name: "Fair Game Website",
          description: "This web application implements and analyzes data structure techniques through MongoDB's schema design and JavaScript-based logic to manage user-linked scholar garments and access control.",
          explanation: "I designed database schemas to organize student and clothing data efficiently. The website uses JavaScript objects and arrays to manage user sessions and clothing inventories. This shows I can choose the right data structures for different tasks.",
          tech: ["MongoDB", "JavaScript", "HTML", "Css"],
          type: "Website",
          github: "https://github.com/FAIR-GAME-TM/Fair_Game-V2.0",
          demo: "https://youtu.be/blP0Mr-GUXo"
        },
      ]
    }
  ];

  const dsObjectives = [
    {
      id: 1,
      title: "Assess, structure, manage and implement large data sets derived from real-time sources.",
      icon: <Database className="w-8 h-8" />,
      color: "bg-blue-600",
      projects: [
        {
          name: "CSC338 Final - Maricopa Daily Mobility",
          description: "Assessed and structured large-scale mobility data from real-time sources to analyze daily transportation patterns in Maricopa County.",
          explanation: "This project involved working with real-time mobility data, requiring careful structuring and management of large datasets to extract meaningful patterns from daily transportation activities.",
          tech: ["Python", "Pandas", "Data Analysis"],
          type: "Data Analysis",
          colab: "https://colab.research.google.com/drive/1Ftx_WE4VEK-8isi_OpAWi8G9-Vd_G6D0?usp=sharing"
        },
        {
          name: "CSC115 Final",
          description: "Implemented data structures and algorithms to manage and process large datasets efficiently.",
          explanation: "Demonstrated the ability to assess data requirements and implement appropriate data structures for managing large-scale information efficiently.",
          tech: ["Python", "Data Structures"],
          type: "Programming",
          colab: "https://colab.research.google.com/drive/1kn_-okiqHDiVPswE65a41biYMJ4i4qBr?usp=sharing"
        }
      ]
    },
    {
      id: 2,
      title: "Compile data from multiple sources, including data selection, data scrubbing and feature engineering, with an emphasis on tidy data and the tidyverse.",
      icon: <Layers className="w-8 h-8" />,
      color: "bg-green-600",
      projects: [
        {
          name: "CSC338 Assignment 8 - Bank Marketing",
          description: "Compiled and cleaned data from multiple sources, performing data scrubbing and feature engineering for bank marketing campaign analysis.",
          explanation: "This project focused on the complete data pipeline - from gathering raw data from various sources to cleaning, transforming, and engineering features for analysis, following tidy data principles.",
          tech: ["Python", "Pandas", "Data Cleaning"],
          type: "Data Science",
          colab: "https://colab.research.google.com/drive/1iOsIHtUwDIvljSKOJOKckLnV-lXt8yzn?usp=sharing"
        },
        {
          name: "CSC115 Final",
          description: "Processed and compiled data from multiple sources, applying data cleaning and transformation techniques.",
          explanation: "Demonstrated data compilation skills by integrating information from various sources and preparing it for analysis through systematic cleaning and transformation.",
          tech: ["Python", "Data Processing"],
          type: "Programming",
          colab: "https://colab.research.google.com/drive/1kn_-okiqHDiVPswE65a41biYMJ4i4qBr?usp=sharing"
        }
      ]
    },
    {
      id: 3,
      title: "Apply statistical tests and tools appropriately to analyze data sets drawn from different types of sources (nature, humankind, organizations, etc.), making inferences and projections from the data.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-blue-600",
      projects: [
        {
          name: "CSC338 Assignment 4",
          description: "Applied statistical tests and analytical tools to datasets from various sources, making data-driven inferences and projections.",
          explanation: "This assignment required selecting and applying appropriate statistical methods to analyze diverse datasets, drawing meaningful conclusions and making projections based on the data.",
          tech: ["Python", "Statistics", "Data Analysis"],
          type: "Statistical Analysis",
          colab: "https://colab.research.google.com/drive/1uovHsMEtGBXt4AZ1ykRNvW-sNcWyZxLw?usp=sharing"
        },
        {
          name: "CSC338 Assignment 3",
          description: "Conducted statistical analysis on datasets from different domains, performing hypothesis testing and predictive modeling.",
          explanation: "Demonstrated proficiency in applying statistical tools to real-world datasets, making inferences about populations and projecting trends from sample data.",
          tech: ["Python", "Statistical Testing"],
          type: "Data Science",
          colab: "https://colab.research.google.com/drive/18AQQXaGnI75ZLu_yHKJfAQ63XxYVmzCo?usp=sharing"
        }
      ]
    },
    {
      id: 4,
      title: "Create visualizations of large data sets in ways that clarify understanding of their meaning and implications.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-green-600",
      projects: [
        {
          name: "CSC338 Assignment 2",
          description: "Created comprehensive visualizations of large datasets to communicate insights and patterns effectively.",
          explanation: "This project emphasized creating clear, meaningful visualizations that help stakeholders understand complex data patterns and their implications for decision-making.",
          tech: ["Python", "Matplotlib", "Seaborn", "Data Visualization"],
          type: "Data Visualization",
          colab: "https://colab.research.google.com/drive/11VAGgFTFtBy6jbK5pTHLA7TlMH6F_M7r?usp=sharing"
        },
        {
          name: "CSC338 Final - Maricopa Daily Mobility",
          description: "Developed interactive visualizations to display mobility patterns and trends across Maricopa County.",
          explanation: "Created visual representations of large-scale mobility data that clarified daily transportation patterns, making complex datasets accessible and understandable.",
          tech: ["Python", "Data Visualization", "Geographic Data"],
          type: "Data Analysis",
          colab: "https://colab.research.google.com/drive/1Ftx_WE4VEK-8isi_OpAWi8G9-Vd_G6D0?usp=sharing"
        }
      ]
    },
    {
      id: 5,
      title: "Design and implement big data, artificial intelligence and statistical and visual analysis solutions that provide people and organizations with understanding, guidance and options drawn from the data.",
      icon: <Brain className="w-8 h-8" />,
      color: "bg-blue-600",
      projects: [
        {
          name: "CSC338 Assignment 8 - Bank Marketing",
          description: "Designed and implemented a comprehensive analytical solution for bank marketing campaigns, providing actionable insights.",
          explanation: "This project integrated statistical analysis, machine learning, and visualization to create a complete solution that helps organizations understand customer behavior and make data-driven marketing decisions.",
          tech: ["Python", "Machine Learning", "Analytics"],
          type: "Data Science",
          colab: "https://colab.research.google.com/drive/1iOsIHtUwDIvljSKOJOKckLnV-lXt8yzn?usp=sharing"
        },
        {
          name: "CSC338 Assignment 3",
          description: "Developed statistical and visual analysis solutions to provide organizational guidance based on data insights.",
          explanation: "Created end-to-end analytical solutions that transform raw data into actionable recommendations, demonstrating the full data science pipeline from analysis to decision support.",
          tech: ["Python", "Statistical Modeling", "Business Intelligence"],
          type: "Applied Analytics",
          colab: "https://colab.research.google.com/drive/18AQQXaGnI75ZLu_yHKJfAQ63XxYVmzCo?usp=sharing"
        }
      ]
    },
    {
      id: 6,
      title: "Demonstrate best practices regarding digital privacy and the ethical use of personal information.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-green-600",
      projects: [
        {
          name: "CSC338 Assignment 11",
          description: "Implemented best practices for handling sensitive data, including privacy protection and ethical data usage protocols.",
          explanation: "This assignment focused on understanding and applying ethical frameworks for data science, including proper handling of personal information, data anonymization, and privacy-preserving techniques.",
          tech: ["Python", "Data Privacy", "Ethics"],
          type: "Data Ethics"
        },
        {
          name: "CSC338 Assignment 7",
          description: "Analyzed and implemented privacy-preserving techniques in data analysis workflows.",
          explanation: "Demonstrated understanding of digital privacy principles by implementing data protection measures and ethical guidelines when working with personal information.",
          tech: ["Python", "Privacy Protection"],
          type: "Data Science"
        }
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
        {/* Computer Science Section */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            CS DEGREE <span className="text-red-600">OBJECTIVES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advancing Computer Science program objectives demonstrated through practical projects and real-world applications
          </p>
        </AnimatedSection>

        <div className="space-y-16 mb-32">
          {csObjectives.map((objective, index) => (
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
                          
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
                            <p className="text-blue-800 text-sm leading-relaxed">
                              <strong>Why this fits:</strong> {project.explanation}
                            </p>
                          </div>

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
                          <div className="flex flex-wrap gap-2">
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
                            {(objective.id === 1 || objective.id === 3) && project.pdf && (
                              <a
                                href={project.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 text-sm hover:bg-blue-700 transition-colors duration-300"
                              >
                                <FileText className="w-3 h-3" />
                                <span>PDF</span>
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

        {/* CS Summary Panel */}
        <AnimatedSection className="mt-20 text-center mb-32" delay={1.2}>
          <div className="bg-black text-white p-8 transform skew-y-2 border-4 border-black shadow-2xl inline-block max-w-4xl">
            <div className="transform -skew-y-2">
              <h3 className="text-2xl font-bold mb-4">CS Learning Journey</h3>
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

        {/* Data Science Section */}
        <AnimatedSection className="text-center mb-16" delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            DATA SCIENCE DEGREE <span className="text-blue-600">OBJECTIVES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise in data analysis, visualization, and ethical data practices through comprehensive coursework
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {dsObjectives.map((objective, index) => (
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

                    {/* Projects Grid - Empty state for now */}
                    {objective.projects.length === 0 ? (
                      <div className="bg-white border-2 border-dashed border-gray-300 p-8 text-center">
                        <p className="text-gray-500 text-lg">
                          Projects coming soon as I progress through the Data Science program
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {objective.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="bg-white border-2 border-gray-300 p-6 hover:border-blue-600 transition-colors duration-300 group">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                                {project.name}
                              </h4>
                              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                                {project.type}
                              </span>
                            </div>

                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              {project.description}
                            </p>

                            {project.explanation && (
                              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
                                <p className="text-blue-800 text-sm leading-relaxed">
                                  <strong>Why this fits:</strong> {project.explanation}
                                </p>
                              </div>
                            )}

                            {/* Tech Stack */}
                            {project.tech && (
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
                            )}

                            {/* Project Links */}
                            <div className="flex flex-wrap gap-2">
                              {project.colab && (
                                <a
                                  href={project.colab}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-1 bg-orange-500 text-white px-3 py-2 text-sm hover:bg-orange-600 transition-colors duration-300"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  <span>View Notebook</span>
                                </a>
                              )}
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
                                  className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 text-sm hover:bg-blue-700 transition-colors duration-300"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  <span>Demo</span>
                                </a>
                              )}
                              {project.pdf && (
                                <a
                                  href={project.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-1 bg-green-600 text-white px-3 py-2 text-sm hover:bg-green-700 transition-colors duration-300"
                                >
                                  <FileText className="w-3 h-3" />
                                  <span>PDF</span>
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* DS Summary Panel */}
        <AnimatedSection className="mt-20 text-center" delay={1.2}>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 transform skew-y-2 border-4 border-black shadow-2xl inline-block max-w-4xl">
            <div className="transform -skew-y-2">
              <h3 className="text-2xl font-bold mb-4">Data Science Journey</h3>
              <p className="mb-6">
                Building expertise in data science through hands-on projects covering statistical analysis,
                data visualization, machine learning, and ethical data practices.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white bg-opacity-20 p-3 backdrop-blur-sm">
                  <div className="font-bold">12</div>
                  <div>Projects</div>
                </div>
                <div className="bg-white bg-opacity-20 p-3 backdrop-blur-sm">
                  <div className="font-bold">6</div>
                  <div>Core Objectives</div>
                </div>
                <div className="bg-white bg-opacity-20 p-3 backdrop-blur-sm">
                  <div className="font-bold">Python</div>
                  <div>Primary Language</div>
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