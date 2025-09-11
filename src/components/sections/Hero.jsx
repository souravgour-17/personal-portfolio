import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css"; 

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      {/* Profile Photo */}
      <motion.img
        src="/profile-photo.jpg"
        alt="Sourav Gour"
        className="hero-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-6xl font-bold mb-4"
      >
        Hi, I'm <span className="text-yellow-300">Sourav Gour</span>
      </motion.h1>

      {/* Typewriter Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl max-w-2xl mb-2"
      >
        I'm a{" "}
        <span className="font-semibold text-indigo-500">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Full Stack Developer",
              "React & Node.js Enthusiast"
            ]}
            loop={0}          
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.p>

      {/* Short intro line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-gray-300 max-w-xl mb-6"
      >
        Full Stack Development Intern at <span className="text-indigo-400 font-medium">TechCoder Software OPC Pvt. Ltd.</span>  
        Skilled in building web applications using the MERN stack.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-indigo-500 text-indigo-500 rounded-xl hover:bg-indigo-500 hover:text-white transition"
        >
          Hire Me
        </a>
        
      </motion.div>
    </section>
  );
}
