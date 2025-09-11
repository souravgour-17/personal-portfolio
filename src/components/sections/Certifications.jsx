// Certifications.jsx
import React from "react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 bg-gray-50 dark:bg-neutral-950 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Certifications & Internship Letters
        </h2>

        {/* Internship Offer Letter */}
        <div className="mb-8 p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Internship Offer Letter</h3>
          <p className="mb-4">TechCoder – Internship Offer</p>
          <a
            href="/internship_offer_letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View PDF
          </a>
        </div>

        {/* Internship Completion Letter */}
        <div className="mb-8 p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">
            Internship Completion Letter
          </h3>
          <p className="mb-4">TechCoder – Internship Completed</p>
          <a href="/internship_completion_letter.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/internship_completion_letter.png"
              alt="Completion Letter"
              className="w-full h-auto rounded-md mb-3"
            />
          </a>
          <a
            href="/internship_completion_letter.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Image
          </a>
        </div>

        {/* Internship Certificate */}
        <div className="mb-8 p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Internship Certificate</h3>
          <p className="mb-4">TechCoder – Certificate of Completion</p>
          <a href="/internship_certificate.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/internship_certificate.png"
              alt="Certificate"
              className="w-full h-auto rounded-md mb-3"
            />
          </a>
          <a
            href="/internship_certificate.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Image
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
