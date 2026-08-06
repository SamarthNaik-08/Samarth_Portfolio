import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">

        {/* TEXT */}
        <p className="text-base sm:text-lg">
          Connect with me
        </p>

        {/* NAME */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 text-center">
          Samarth Venkatesh Naik
        </h2>

        {/* ABOUT */}
        <p className="text-sm text-gray-400 text-center max-w-md px-2">
          Passionate React Developer who loves building modern,
          responsive and user-friendly web applications.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">

          <a
            href="mailto:naiksamarth1849@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.instagram.com/_samarth.08___?igsh=MThqZTAybm5mdWMyeg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/SamarthNaik-08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* RESPONSIVE LINE */}
        <hr className="w-full border-gray-600 my-5" />

        {/* COPYRIGHT */}
        <p className="text-xs sm:text-sm text-gray-400 text-center">
          © 2026 Samarth V Naik. All rights reserved.
        </p>

        <p className="text-xs sm:text-sm text-gray-400 text-center">
          Designed by Samarth V Naik
        </p>

      </div>
    </footer>
  );
}

export default Footer;