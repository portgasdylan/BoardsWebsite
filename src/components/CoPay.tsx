import React from 'react';
import { Smartphone, Users, CreditCard, Zap, Github, ExternalLink, Play } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CoPay: React.FC = () => {
  return (
    <section id="copay" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-black transform -skew-y-12 origin-top-right opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-red-600 transform skew-y-12 origin-bottom-left opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            SIP <span className="text-red-600">COPAY</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Student Innovation project - A smart bill splitting application
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel - Project Info */}
          <AnimatedSection className="space-y-8" delay={0.2} direction="left">
            {/* Logo Panel */}
            <div className="bg-white p-8 transform skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform -skew-y-2 text-center">
                <img 
                  src="/src/assets/CoPay.png" 
                  alt="CoPay Logo" 
                  className="w-64 h-auto mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-black mb-2">CoPay</h3>
                <p className="text-blue-500 font-semibold text-lg">Split Smarter</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-black text-white p-8 transform -skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform skew-y-2">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-red-500" />
                  Project Overview
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  CoPay is a comprehensive bill-splitting application designed to simplify group payments and expense management. 
                  Built as my Senior Independent Project, it demonstrates full-stack development skills and user-centered design principles.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-600 p-4 text-center">
                    <Smartphone className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Mobile First</div>
                  </div>
                  <div className="bg-red-600 p-4 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Group Payments</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 font-semibold hover:bg-gray-100 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 font-semibold hover:bg-red-700 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Panel - Features & Media */}
          <AnimatedSection className="space-y-8" delay={0.4} direction="right">
            {/* Key Features */}
            <div className="bg-white p-8 transform -skew-y-1 border-4 border-black shadow-2xl">
              <div className="transform skew-y-1">
                <h4 className="text-xl font-bold text-black mb-6 flex items-center">
                  <CreditCard className="w-6 h-6 mr-2 text-red-600" />
                  Key Features
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-black">Smart Bill Splitting</h5>
                      <p className="text-gray-600 text-sm">Automatically calculate individual shares with tax and tip distribution</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-black">Group Management</h5>
                      <p className="text-gray-600 text-sm">Create and manage payment groups with real-time updates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-black">Payment Integration</h5>
                      <p className="text-gray-600 text-sm">Seamless integration with popular payment platforms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-black">Expense Tracking</h5>
                      <p className="text-gray-600 text-sm">Track spending patterns and payment history</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Placeholder */}
            <div className="bg-black p-8 transform skew-y-1 border-4 border-black shadow-2xl">
              <div className="transform -skew-y-1">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Play className="w-6 h-6 mr-2 text-red-500" />
                  Project Demo
                </h4>
                
                {/* Video/GIF Placeholder */}
                <div className="bg-gray-800 border-2 border-gray-600 h-48 flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="text-center">
                    <Play className="w-12 h-12 text-red-500 mx-auto mb-2" />
                    <p className="text-gray-400">Demo Video/GIF</p>
                    <p className="text-gray-500 text-sm">Coming Soon</p>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 border-2 border-red-600 opacity-20 animate-pulse"></div>
                </div>
                
                <p className="text-gray-300 text-sm text-center">
                  Interactive demonstration of CoPay's core functionality and user interface
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Technical Details */}
        <AnimatedSection className="mt-16" delay={0.6}>
          <div className="bg-red-600 text-white p-8 transform skew-y-1 border-4 border-black shadow-2xl">
            <div className="transform -skew-y-1">
              <h3 className="text-2xl font-bold mb-6 text-center">Technical Implementation</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Frontend</h4>
                  <div className="space-y-1 text-sm">
                    <p>React Native</p>
                    <p>TypeScript</p>
                    <p>React Navigation</p>
                    <p>Styled Components</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Backend</h4>
                  <div className="space-y-1 text-sm">
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>MongoDB</p>
                    <p>JWT Authentication</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Features</h4>
                  <div className="space-y-1 text-sm">
                    <p>Real-time Updates</p>
                    <p>Payment Processing</p>
                    <p>User Management</p>
                    <p>Data Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project Status */}
        <AnimatedSection className="mt-12 text-center" delay={0.8}>
          <div className="bg-white p-6 transform -skew-y-1 border-4 border-black shadow-2xl inline-block">
            <div className="transform skew-y-1">
              <h4 className="text-lg font-bold text-black mb-2">Project Status</h4>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">In Development</span>
                </div>
                <div className="text-gray-400">|</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Senior Independent Project</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoPay;