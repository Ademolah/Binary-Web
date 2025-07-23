import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/binarylogo.svg';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo + Name */}
        <Link to="/" className="flex items-center space-x-3">
          {/* Uncomment to use logo image */}
          <img
            src={logo}
            alt="Binary Logo"
            className="h-10 w-auto object-contain transition-transform hover:scale-105 duration-300"
          />
          {/* <span className="text-2xl font-bold text-[#00477B] hidden sm:inline">Binary</span> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative tracking-wide text-gray-800 hover:text-[#50D6FE] transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#50D6FE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 bg-[#00477B] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#00355c] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Let’s Talk
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 space-y-3 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2 border-b border-gray-100 hover:text-[#00477B]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-2 w-full text-center bg-[#00477B] text-white px-4 py-2 rounded hover:bg-[#00355c] transition"
          >
            Let’s Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
