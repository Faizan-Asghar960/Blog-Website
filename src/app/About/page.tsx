"use client";

import React from "react";
import Navbar from "../compnent/Navbar";
import Footer from "../Footer/page";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-4 md:px-8">
      {/* Header Section */}
      <Navbar />
      <header className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-2">MFK &amp; USA industry Blog</h1>
        <p className="text-lg text-gray-300">✨ A platform for sharing knowledge, ideas, and stories ✨</p>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl mb-4">📖</div>
          <h2 className="text-xl font-semibold mb-2">Quality Content</h2>
          <p className="text-gray-400">Curated from expert Dsigan and thought leaders</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl mb-4">👥</div>
          <h2 className="text-xl font-semibold mb-2">Community</h2>
          <p className="text-gray-400">Join a community of passionate readers and writers</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl mb-4">⚡</div>
          <h2 className="text-xl font-semibold mb-2">Innovation</h2>
          <p className="text-gray-400">Stay updated with the latest trends and technologies</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="mt-10 max-w-4xl text-center">
        <p className="text-gray-300 mb-4">
          <span className="text-green-400 font-bold">MFK &amp; USA Industries</span> is a platform dedicated to sharing knowledge and insights
          about construction, industrial advancements, and innovative practices. Our mission is to create a space where professionals in
          construction and industry can learn, grow, and connect with like-minded individuals.
        </p>
        <p className="text-gray-300">
          🏗️ Whether you're a seasoned professional or just starting your journey, you'll find valuable content that helps you stay ahead
          in the ever-evolving world of construction and industrial innovation.
        </p>
      </section><Footer/>
    </div>
  );
};

export default AboutPage;
