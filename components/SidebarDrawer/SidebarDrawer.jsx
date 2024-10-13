// components/SidebarDrawer.js

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";

const SidebarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef();

  // Toggle drawer open state
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Close the drawer
  const closeDrawer = () => {
    setIsOpen(false);
  };

  // Handle clicks outside the drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Menu */}
      <button
        className="p-2 focus:outline-none"
        onClick={toggleDrawer}
        aria-label="Toggle Menu"
      >
        {/* Hamburger Icon */}
        <GiHamburgerMenu size={24} className="ham" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (optional) */}
        <button
          className="p-2 focus:outline-none absolute top-4 right-4"
          onClick={closeDrawer}
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="mt-16 flex flex-col space-y-4 px-6">
          <span className="text-xl font-bold text-gray-800">EAPC</span>
          <Link href="/">
            <div
              className="text-gray-700 hover:text-blue-500 bg-gray-200 py-2 rounded.lg flex gap-x-2 items-center"
              onClick={closeDrawer}
            >
              <FiTarget size={20} className="ml-2" />
              Target
            </div>
          </Link>
          <Link href="/tuma-ripoti">
            <div
              className="text-gray-700 hover:text-blue-500 bg-gray-200 py-2 rounded.lg flex"
              onClick={closeDrawer}
            >
              <HiDocumentReport size={20} className="ml-2" />
              Tuma Ripoti
            </div>
          </Link>
          {/* Add more links as needed */}
        </nav>
      </div>
    </>
  );
};

export default SidebarDrawer;
