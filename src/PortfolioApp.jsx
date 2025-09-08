import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import FrontendProjects from "./components/sections/FrontendProjects";
import Contact from './components/sections/Contact';

export default function PortfolioApp() {
  return (
    <div className='min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white selection:bg-indigo-500/20'>
      <Navbar />
      <main className='space-y-20 md:space-y-0'>
        <Hero />
        <FrontendProjects />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}