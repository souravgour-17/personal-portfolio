import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const links = ["projects", "skills", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-darkRed/80 backdrop-blur-md shadow-md">
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer hover:text-marvelRed transition">
        Sourav Gour
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {links.map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-marvelRed border-b-2 border-marvelRed"
            className="cursor-pointer hover:text-marvelRed transition pb-1"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}

        {/* Resume Button */}
        <a
          href="/SouravGour-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-2xl bg-marvelRed text-white font-semibold hover:bg-darkRed hover:scale-105 transition transform duration-300 shadow-lg"
        >
          View Resume
        </a>

        {/* Dark/Light toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          {dark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-2">
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          {dark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-200" />
          )}
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded hover:bg-white/10 transition">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-darkRed/90 backdrop-blur-md flex flex-col items-center md:hidden space-y-4 py-4 z-40">
          {links.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-marvelRed text-lg transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {/* Resume Button */}
          <a
            href="/SouravGour-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-2xl bg-marvelRed text-white font-semibold hover:bg-darkRed hover:scale-105 transition transform duration-300 shadow-lg"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
}
