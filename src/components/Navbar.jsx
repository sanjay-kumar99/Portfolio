import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../assets/photo.avif";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-yellow-600 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={pic}
            alt="logo"
            className="w-10 h-10 rounded-full border-2 border-yellow-400"
          />
          <h2 className="text-lg font-bold text-yellow-300">Sanjay</h2>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-yellow-200 font-medium mx-auto">
          <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link></li>
          <li><Link to="/skills" className="hover:text-yellow-400 transition-colors">Skills</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-400 transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-300 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {open && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900 text-yellow-200 font-medium">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
