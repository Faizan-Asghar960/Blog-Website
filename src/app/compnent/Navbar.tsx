"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left-aligned Logo */}
        <div className="text-2xl font-bold text-white">
          MFK USA Industry
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-6 text-lg text-white">
        <li>
            <a href="/" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/Blog" className="hover:text-blue-500 transition">
              Blog
            </a>
          </li>
          <li>
            <a href="/About" className="hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="/Contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
