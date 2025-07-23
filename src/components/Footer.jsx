import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00477B] text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Binary</h2>
          <p className="text-sm text-white/80">
            Powering innovative software solutions across industries — from startups and enterprises to governments.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#50D6FE] transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#50D6FE] transition">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#50D6FE] transition">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#50D6FE] transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.linkedin.com/company/binaryinnovations/" target="_blank" rel="noopener noreferrer" className="hover:text-[#50D6FE]">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#50D6FE]">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#50D6FE]">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/binary_hq?igsh=MWhnZ2k1a2Q4b3Rvbw==" target="_blank" rel="noopener noreferrer" className="hover:text-[#50D6FE]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Bottom Text */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Binary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
