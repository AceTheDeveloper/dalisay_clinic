// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            Dr. Dalisay
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#doctor"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Doctor
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-600/30"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-emerald-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <Link
              href="#home"
              className="block py-2 text-gray-600 hover:text-emerald-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block py-2 text-gray-600 hover:text-emerald-600 font-medium"
            >
              About
            </Link>
            <Link
              href="#services"
              className="block py-2 text-gray-600 hover:text-emerald-600 font-medium"
            >
              Services
            </Link>
            <Link
              href="#doctor"
              className="block py-2 text-gray-600 hover:text-emerald-600 font-medium"
            >
              Doctor
            </Link>
            <Link
              href="#contact"
              className="block w-full text-center py-2.5 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
