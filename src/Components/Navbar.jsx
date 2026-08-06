import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaTools, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive
      ? "bg-blue-500 text-white"
      : "hover:bg-gray-100 hover:text-blue-500"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav className="h-[80px] flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-4 sticky top-0 z-40 bg-[#0b1120]">
        {/* LOGO */}
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 tracking-wide">
          Samarth Venkatesh Naik
        </h1>

        {/* HAMBURGER */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="text-3xl text-white hover:text-blue-500 transition"
          >
            <FaBars />
          </button>
        )}
      </nav>

      {/* SIDEBAR MENU */}
      <div
        className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"
          }`}
      >
        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setOpen(false)}
        ></div>

        {/* SIDEBAR */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] sm:w-72 md:w-80 bg-white shadow-xl p-6 flex flex-col transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >

          {/* HEADER */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-lg sm:text-xl font-semibold">Menu</h2>

            <button
              onClick={() => setOpen(false)}
              className="text-2xl hover:text-red-500 transition"
            >
              <FaTimes />
            </button>
          </div>

          {/* MENU ITEMS */}
          <ul className="flex flex-col gap-3 sm:gap-4 text-base sm:text-lg font-medium">

            <NavLink to="/" onClick={() => setOpen(false)} className={linkStyle}>
              <FaHome /> Home
            </NavLink>

            <NavLink to="/projects" onClick={() => setOpen(false)} className={linkStyle}>
              <FaBriefcase /> Projects
            </NavLink>

            <NavLink to="/services" onClick={() => setOpen(false)} className={linkStyle}>
              <FaTools /> Services
            </NavLink>

            <NavLink to="/about" onClick={() => setOpen(false)} className={linkStyle}>
              <FaUser /> About
            </NavLink>

            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkStyle}>
              <FaPhone /> Contact
            </NavLink>


          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;