import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React", "Node.js", "Express.js", "MongoDB", 
  "TypeScript", "JavaScript", "TailwindCSS", 
  "Framer Motion", "REST APIs", "GraphQL"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-neutral-900">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {skills.map((skill, i) => (
          <span
            key={i}
            className="rounded-xl px-4 py-2 text-sm bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
