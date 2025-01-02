"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left-aligned Logo */}
        <div className="text-2xl font-bold text-white">MFK USA Industry</div>

        {/* Navbar Links */}
        <ul className="flex space-x-6 text-lg text-white">
          <li>
            <Link href="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="hover:text-blue-500 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
