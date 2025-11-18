import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Home;