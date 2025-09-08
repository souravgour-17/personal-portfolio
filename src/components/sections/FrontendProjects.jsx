import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const frontendProjects = [
  {
    title: "Coming Soon Page",
    desc: "A simple 'Coming Soon' page with subscription form made in HTML/CSS.",
    screenshot: "/coming-soon.png",
    liveLink: "https://souravgour-17.github.io/coming-soon/",
    codeLink: "https://github.com/souravgour-17/coming-soon"
  },
  
  {
    title: "Gradient Calculator",
    desc: "A stylish calculator with gradient design built using HTML, CSS & JavaScript.",
    screenshot: "/calculator.png", 
    liveLink: "https://souravgour-17.github.io/calculator/",
    codeLink: "https://github.com/souravgour-17/calculator"
  },
  {
    title: "Containeer",
    desc: "Responsive container layout using modern CSS grid techniques.",
    screenshot: "/containeer.png",
    codeLink: "https://github.com/souravgour-17/Containeer",
    liveLink: "https://souravgour-17.github.io/Containeer/",
  },
  {
    title: "Doraemon Fan Page",
    desc: "Colorful Doraemon-themed fan page built with Bootstrap.",
    screenshot:
      "/Doraemon _Fan _Page.png",
    codeLink:
      "https://github.com/souravgour-17/-Doraemon-Fan-Page-Colorful-Bootstrap-Layout",
    liveLink:
      "https://souravgour-17.github.io/-Doraemon-Fan-Page-Colorful-Bootstrap-Layout/",
  },
  {
    title: "Kal Tak News",
    desc: "Modern newspaper layout with multi-column design and carousel.",
    screenshot: "Kal_Tak_News.png",
    codeLink:
      "https://github.com/souravgour-17/Kal-Tak-News-Modern-Newspaper-Layout",
    liveLink:
      "https://souravgour-17.github.io/Kal-Tak-News-Modern-Newspaper-Layout/",
  },
  {
    title: "Modern Newspaper Layout",
    desc: "Clean, responsive newspaper layout with grid system.",
    screenshot:
      "Modern_Newspaper_Layout.png",
    codeLink: "https://github.com/souravgour-17/-Modern-Newspaper-Layout",
    liveLink: "https://souravgour-17.github.io/-Modern-Newspaper-Layout/",
  },
  {
    title: "Doraemon Login Form",
    desc: "Interactive Doraemon-themed login form with modern styling.",
    screenshot: "Doraemon_Login_Form.png",
    codeLink: "https://github.com/souravgour-17/Doraemon-Login-Form",
    liveLink: "https://souravgour-17.github.io/Doraemon-Login-Form/",
  },
  {
    title: "Newspaper Grid Layout",
    desc: "Grid-based newspaper template showing articles and images.",
    screenshot: "Newspaper_Grid_Layout.png",
    codeLink: "https://github.com/souravgour-17/Newspaper-Grid-Layout",
    liveLink: "https://souravgour-17.github.io/Newspaper-Grid-Layout/",
  },
  {
    title: "Grid Bootstrap Layout Project",
    desc: "Bootstrap grid layout project demonstrating responsive design.",
    screenshot:
      "Grid_Bootstrap_Layout_Project.png",
    codeLink: "https://github.com/souravgour-17/Grid-Bootstrap-Layout-Project",
    liveLink: "https://souravgour-17.github.io/Grid-Bootstrap-Layout-Project/",
  },
];

export default function FrontendProjects() {
  return (
    <section
      id="frontend-projects"
      className="py-20 px-6 bg-gray-50 dark:bg-neutral-900"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Frontend Designs</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {frontendProjects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <img
              src={proj.screenshot}
              alt={proj.title}
              className="rounded-xl mb-4 object-cover h-48 w-full"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {proj.desc}
              </p>
            </div>
            <div className="flex justify-between mt-auto">
              <a
                href={proj.codeLink}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-500 hover:underline flex items-center"
              >
                Code <ExternalLink className="ml-1 w-4 h-4" />
              </a>
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