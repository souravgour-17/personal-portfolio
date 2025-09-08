import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce App",
    desc: "Fullstack e-commerce application - In Progress.",
    codeLink: "https://github.com/souravgour-17/ecommerce-app",
    liveLink: null,
    screenshot: "/ecommerce-app.png"
  },
  {
    title: "Emoji Flip Game",
    desc: "A fun memory card game built with HTML, CSS & JS where players flip cards to match emojis.",
    liveLink: "https://souravgour-17.github.io/Emoji_flip_game/",
    codeLink: "https://github.com/souravgour-17/Emoji_flip_game",
    screenshot: "/emoji-flip.png"
  },
  {
    title: "Number Guess Game",
    desc: "An interactive guessing game where players try to guess the correct number with hints.",
    liveLink: "https://souravgour-17.github.io/Number-Guess/",
    codeLink: "https://github.com/souravgour-17/Number-Guess",
    screenshot: "/number-guess.png"
  },
  {
    title: "Fee Payment App",
    desc: "A complete fee management system built with React and Node.js.",
    codeLink: "https://github.com/souravgour-17/Fee_Payment",
    liveLink: "https://fee-payment-frontend.onrender.com/#/login",
    screenshot: "/Fee_Payment_App.png"
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
            {/* Screenshot */}
            {proj.screenshot && (
              <img
                src={proj.screenshot}
                alt={proj.title}
                className="rounded-xl mb-4 object-cover h-48 w-full"
              />
            )}

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.desc}</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-auto">
              {proj.codeLink && (
                <a
                  href={proj.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500 hover:underline flex items-center"
                >
                  Code <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              )}
              {proj.liveLink && (
                <a
                  href={proj.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 hover:underline flex items-center"
                >
                  Live <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
