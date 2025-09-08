import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id='contact' className='py-20 text-center'>
      <h2 className='text-4xl font-bold mb-6'>Let's Connect</h2>
      <div className='flex justify-center space-x-6'>
        <a href="https://github.com/souravgour-17/" target="_blank" rel="noopener noreferrer">
          <Github className='w-8 h-8 cursor-pointer hover:text-yellow-300'/>
        </a>
        <a href="https://www.linkedin.com/in/sourav-gour-0574932a9/" target="_blank" rel="noopener noreferrer">
          <Linkedin className='w-8 h-8 cursor-pointer hover:text-yellow-300'/>
        </a>
        <a href="https://www.instagram.com/_gour_sourav/" target="_blank" rel="noopener noreferrer">
          <Instagram className='w-8 h-8 cursor-pointer hover:text-yellow-300'/>
        </a>
      </div>
    </section>
  );
}
