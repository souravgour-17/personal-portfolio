import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-neutral-900 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        <p>
          Hi, I’m <span className="font-semibold text-indigo-500">Sourav Gour</span>, 
          a passionate <span className="font-semibold">MERN Stack Developer</span> and 
          B.Tech Computer Science student with a strong interest in building modern, 
          user-friendly, and scalable web applications. I enjoy transforming ideas into 
          real-world projects that combine clean design with powerful functionality.
        </p>
        <p>
          I recently completed an internship at 
          <span className="font-semibold text-indigo-500"> TechCoder Software OPC Pvt. Ltd.</span>, 
          where I worked on developing full-stack solutions and learned how to collaborate in 
          a fast-paced, industry-ready environment. This experience gave me the confidence to 
          take on challenging projects, strengthen my problem-solving skills, and adapt to new 
          technologies quickly.
        </p>
        <p>
          My core skill set includes <span className="font-semibold">React, Node.js, Express, and MongoDB</span>, 
          along with frontend tools like Tailwind CSS and backend practices such as REST APIs and 
          authentication systems. I am also comfortable with Git, GitHub, and deployment platforms 
          to ensure smooth delivery of projects from development to production.
        </p>
        <p>
          Beyond coding, I’m deeply motivated to grow as a professional by exploring new frameworks, 
          contributing to impactful projects, and continuously learning. My long-term goal is to 
          become a versatile full-stack engineer who not only builds applications but also creates 
          meaningful solutions that make a difference in people’s lives.
        </p>
      </div>
    </section>
  );
}
