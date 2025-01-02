// src/app/contact/page.tsx
"use client";

import React, { FormEvent, useRef } from "react";
import Navbar from "../compnent/Navbar";
import Footer from "../Footer/page";

const ContactPage = () => {
  // Reference to form
  <Navbar/>
  const formRef = useRef<HTMLFormElement>(null);

  // Form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }

    // Show success alert
    alert("Successfully sent!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <header className="bg-gray-800 py-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Cubex Blog</h1>
          <ul className="flex space-x-6 text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="mt-16 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-8">
          Get in touch with us for any inquiries or feedback
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={5}
              required
              className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-gray-900 font-bold py-3 rounded-md hover:bg-green-500 transition"
          >
            Send Message
          </button>
        </form>
      </section><Footer/>
    </div>
  );
};

export default ContactPage;
