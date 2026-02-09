import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Admin", href: "#admin" },
    { name: "Parents", href: "#parents" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#003566]/90 backdrop-blur-md shadow-lg"
          : "bg-[#003566]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">QuickCampus</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link, idx) => (
            <li key={idx} className="relative group">
              <a
                href={link.href}
                className="text-white hover:text-[#ffc300] transition-colors"
              >
                {link.name}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#ffc300] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
          <li>
            <a
              href="#demo"
              className="bg-[#ffc300] text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              Request Demo
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-full bg-[#003566]/95 backdrop-blur-md transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 flex flex-col justify-center items-center space-y-6 text-white text-xl font-semibold`}
      >
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-white hover:text-[#ffc300] transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#demo"
          onClick={() => setOpen(false)}
          className="bg-[#ffc300] text-black px-6 py-3 rounded hover:bg-yellow-400 transition"
        >
          Request Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
