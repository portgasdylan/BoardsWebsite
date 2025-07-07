import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-black transform skew-y-12 origin-top-left opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-red-600 transform -skew-y-12 origin-bottom-right opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            GET IN <span className="text-red-600">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection className="space-y-8" delay={0.2} direction="left">
            <AnimatedSection delay={0.3}>
              <div className="bg-black text-white p-8 transform skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform -skew-y-2">
                <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
                <p className="text-gray-300 mb-6">
                  Looking to connect about job opportunities, internships, or collaborative projects? I'm all ears!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-red-500" />
                    <span>dylanmaxwell579@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-red-500" />
                    <span>+1 (123) 456-7891</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-red-500" />
                    <span>Tempe, Arizona</span>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.5}>
              <div className="bg-red-600 text-white p-8 transform -skew-y-2 border-4 border-black shadow-2xl">
              <div className="transform skew-y-2">
                <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/portgasdylan" className="bg-white text-red-600 p-3 hover:bg-gray-100 transition-colors duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/dylan-maxwell-86a798254/" className="bg-white text-red-600 p-3 hover:bg-gray-100 transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white text-red-600 p-3 hover:bg-gray-100 transition-colors duration-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection className="bg-gray-100 p-8 transform skew-y-1 border-4 border-black shadow-2xl" delay={0.4} direction="right">
            <div className="transform -skew-y-1">
              <h3 className="text-2xl font-bold text-black mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Speech Bubble */}
        <AnimatedSection className="mt-16 text-center" delay={0.8}>
          <div className="relative inline-block">
            <div className="bg-black text-white p-6 transform rotate-2 border-4 border-black shadow-2xl">
              <div className="transform -rotate-2">
                <p className="text-lg font-medium">
                  "Looking forward to our collaboration!"
                </p>
              </div>
            </div>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;