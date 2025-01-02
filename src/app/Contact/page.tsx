"use client";

import React, { FormEvent, useRef } from "react";
import Navbar from "../compnent/Navbar";
import Footer from "../Footer/page";
import Link from "next/link";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      formRef.current.reset();
    }

    alert("Successfully sent!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
