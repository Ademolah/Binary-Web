import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#00477B]">Binary</h1>
      <div className="space-x-4 text-sm font-medium text-gray-800">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
