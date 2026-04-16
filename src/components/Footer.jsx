import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-black via-gray-900 to-yellow-600 text-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0 text-yellow-300">
          © 2025 Sanjay Kumar. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/sanjay-kumar-8182742a7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://www.instagram.com/san_jay22?igsh=d3QwZWludTVwcnNl&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="mailto:sanjayldhsanjay556@gmail.com"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
