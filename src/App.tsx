import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;