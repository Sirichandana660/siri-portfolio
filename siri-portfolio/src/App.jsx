import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education'; // <-- Check this path!
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education /> 
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;