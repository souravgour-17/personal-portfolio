// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/sections/Navbar';
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import FrontendProjects from "./components/sections/FrontendProjects";
import Contact from './components/sections/Contact';
import Certifications from './components/sections/Certifications';

export default function PortfolioApp() {
  return (
    <Router>
      <div className='min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white selection:bg-indigo-500/20'>
        <Navbar />
        <main className='space-y-20 md:space-y-0'>
          <Routes>
            {/* Main Portfolio Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <FrontendProjects />
                  <Projects />
                  <Skills />
                  <Contact />
                </>
              }
            />

            {/* Certifications Page */}
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
