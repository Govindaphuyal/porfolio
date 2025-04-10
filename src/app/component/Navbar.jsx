"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
        {/* Logo */}
        <a className="font-bold text-xl tracking-tight" href="/">
          Portfolio
        </a>

        {/* Hamburger Menu Button (Visible on Mobile/Tablet) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 focus:outline-none"
        >
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#"
          >
            Contact
          </Link>
          <Link href="/create">
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
              Create
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile/Tablet Navigation Links */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } bg-gray-800 mt-2`}
      >
        <ul className="flex flex-col space-y-2 px-4 py-2">
          <li>
            <Link
              className="block text-sm px-4 py-2 rounded-full hover:bg-gray-700"
              href="/"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block text-sm px-4 py-2 rounded-full hover:bg-gray-700"
              href="/about"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="block text-sm px-4 py-2 rounded-full hover:bg-gray-700"
              href="#"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="/create">
              <button
                className="mt-2 w-full bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Create
              </button>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <button
                className="mt-2 w-full bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;