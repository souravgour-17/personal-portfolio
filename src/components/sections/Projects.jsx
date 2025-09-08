import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce App",
    desc: "Fullstack e-commerce application using React, Node.js, and MongoDB.",
    link: "https://github.com/souravgour-17/ecommerce-app"
  },
  {
    title: "Social Media Platform",
    desc: "A social media web app with authentication, posts, and real-time chat.",
    link: "https://github.com/souravgour-17/social-media-app"
  },
  {
    title: "Task Manager API",
    desc: "RESTful API for managing tasks with Node.js and Express.",
    link: "https://github.com/souravgour-17/task-manager-api"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-neutral-950">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.desc}</p>
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-indigo-500 hover:underline mt-auto"
            >
              View Code <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
