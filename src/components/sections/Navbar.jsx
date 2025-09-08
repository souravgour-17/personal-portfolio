import { Link } from "react-scroll";
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if(dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between p-6 bg-darkRed/60 backdrop-blur-md'>
      <h1 className='text-2xl font-bold'>Sourav Gour</h1>
      <div className="space-x-6 flex items-center">
  <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:opacity-80">Projects</Link>
  <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:opacity-80">Skills</Link>
  <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:opacity-80">Contact</Link>
</div>

    </nav>
  );
}