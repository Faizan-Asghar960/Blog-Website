"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "./compnent/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center">
        {/* Main Container */}
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="space-y-4 lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span
                  className="relative inline-block after:absolute after:-inset-1 after:blur-md  after:rounded-md"
                  style={{ animation: "slide-shadow 4s infinite" }}
                >
                  Welcome To MFK USA industry
                </span>
              </h1>
              <p
                className="text-gray-300 leading-relaxed text-lg relative"
                style={{ animation: "text-slide 3s infinite" }}
              >
                Discover amazing stories, insights, and ideas from our community
                of writers.
              </p>
              <Link href="/Blog">
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition">
                  Explore Blog →
                </button>
              </Link>
            </div>

            {/* Side Image */}
            <div className="lg:w-1/2 flex justify-center relative">
              <Image
                src="/blog-home.jpg"
                alt="Do Something Great"
                className="rounded-lg shadow-xl"
                width={600} // Set an appropriate width
                height={400} // Set an appropriate height
                style={{ animation: "shadow-slide 2s infinite" }}
              />
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes slide-shadow {
            0% {
              transform: translateX(-100%);
              opacity: 0.2;
            }
            50% {
              transform: translateX(0%);
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0.2;
            }
          }

          @keyframes text-slide {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes shadow-slide {
            0% {
              box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.4);
            }
            50% {
              box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.7);
            }
            100% {
              box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.4);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
