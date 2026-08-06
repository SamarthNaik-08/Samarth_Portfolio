import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";

function Projects() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔥 LOADER TIMER
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 🚀 INSANE LOADER
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

        {/* SPINNER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full shadow-[0_0_40px_rgba(0,200,255,0.8)]"
        />

        {/* TEXT */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-8 text-xl text-blue-400 font-mono tracking-widest"
        >
          Initializing Projects Module...
        </motion.h1>

        {/* PROGRESS BAR */}
        <div className="w-64 h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
        </div>

        {/* SUB TEXT */}
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="mt-4 text-gray-400 text-sm"
        >
          Loading Projects Interface...
        </motion.p>

      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white flex flex-wrap justify-center gap-10 p-10">
      

      {/* PROJECT CARD */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.6)] p-6 max-w-sm cursor-pointer"
        onClick={() => setOpen1(true)}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDd_-T7qApy-RgskfkTqRtRwat_WLd-0hxzI5cySULA&s"
          alt="Tuberculosis"
          className="rounded-xl mb-4 w-full h-48 object-cover"
        />

        <h2 className="text-2xl font-bold text-blue-400 mb-2">
          Tuberculosis Project
        </h2>

        <p className="text-gray-300 text-sm">
          Deep learning-based system for automated TB detection using chest X-ray images with real-time results.
        </p>
      </motion.div>

      {/* 🔥 POPUP MODAL */}
      <AnimatePresence>
        {open1 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen1(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-blue-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,200,255,0.3)] max-w-2xl w-full p-8 text-white"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen1(false)}
                className="absolute top-4 right-4 text-xl hover:text-red-400"
              >
                <FaTimes />
              </button>

              {/* TITLE */}
              <h1 className="text-3xl font-bold text-blue-400 mb-4">
                Tuberculosis Detection
              </h1>

              {/* INFO */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <p>
                  <span className="text-gray-400">Category:</span> Deep Learning, Healthcare
                </p>
                <p>
                  <span className="text-gray-400">Technology:</span> Python, TensorFlow, CNN, Grad-CAM
                </p>
                <p>
                  <span className="text-gray-400">Date:</span> June 2025
                </p>

                <a
                  href="https://github.com/SamarthNaik-08"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mb-6">
                The Tuberculosis Detection project is a deep learning-based system that automates TB detection from chest X-ray images. It provides real-time feedback, confidence scores, and interpretable results to assist healthcare professionals.
              </p>

              {/* FEATURES */}
              <ul className="space-y-2 text-gray-300">
                <li>✔️ Real-time TB detection using CNN models</li>
                <li>✔️ Confidence score indicating likelihood of TB</li>
                <li>✔️ Interpretable results with Grad-CAM visualization</li>
                <li>✔️ Scalable & accessible for underserved regions</li>
                <li>✔️ Web-based interface for easy X-ray upload & instant results</li>
              </ul>

            </motion.div>
          </div> 
        )}
      </AnimatePresence>
      
      
      {/* PROJECT CARD 2*/}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.6)] p-6 max-w-sm cursor-pointer"
        onClick={() => setOpen2(true)}
      >
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
          alt="Tuberculosis"
          className="rounded-xl mb-4 w-full h-48 object-cover"
        />

        <h2 className="text-2xl font-bold text-blue-400 mb-2">
          Smart Blueprint Generator for Civil Engineers
        </h2>

        <p className="text-gray-300 text-sm">
          AI-powered residential floor planning and 3D visualization system for civil engineers.
        </p>
      </motion.div>

      {/* 🔥 POPUP MODAL */}
      <AnimatePresence>
        {open2 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen2(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-blue-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,200,255,0.3)] max-w-2xl w-full p-8 text-white"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen2(false)}
                className="absolute top-4 right-4 text-xl hover:text-red-400"
              >
                <FaTimes />
              </button>

              {/* TITLE */}
              <h1 className="text-3xl font-bold text-blue-400 mb-4">
                Smart Blueprint Generator for Civil Engineers
              </h1>

              {/* INFO */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <p>
                  <span className="text-gray-400">Category:</span> Web Development, Civil Engineering
                </p>
                <p>
                  <span className="text-gray-400">Technology:</span> React.js, Java, Hibernate ORM, PostgreSQL, Three.js, JWT, REST API
                </p>
                <p>
                  <span className="text-gray-400">Date:</span> April 2026
                </p>

                <a
                  href="https://github.com/SamarthNaik-08"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mb-6">
                Developed a Smart Blueprint Generator web application for automated residential floor planning and visualization.
              </p>

              {/* FEATURES */}
              <ul className="space-y-2 text-gray-300">
                <li>✔️ Interactive 2D blueprint planning</li>
                <li>✔️ Real-time 3D house visualization</li>
                <li>✔️ JWT authentication system</li>
                <li>✔️ Blueprint PDF export</li>
                <li>✔️ Multi-floor planning support</li>
              </ul>

            </motion.div>

            
          </div>

          
        )}
      </AnimatePresence>

      
      {/* PROJECT CARD 3*/}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.6)] p-6 max-w-sm cursor-pointer"
        onClick={() => setOpen3(true)}
      >
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
          alt="Tuberculosis"
          className="rounded-xl mb-4 w-full h-48 object-cover"
        />

        <h2 className="text-2xl font-bold text-blue-400 mb-2">
          E-Commerce Web Application
        </h2>

        <p className="text-gray-300 text-sm">
          Responsive e-commerce platform with authentication, cart management, and product filtering.
        </p>
      </motion.div>

      {/* 🔥 POPUP MODAL */}
      <AnimatePresence>
        {open3 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen3(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-blue-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,200,255,0.3)] max-w-2xl w-full p-8 text-white"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen3(false)}
                className="absolute top-4 right-4 text-xl hover:text-red-400"
              >
                <FaTimes />
              </button>

              {/* TITLE */}
              <h1 className="text-3xl font-bold text-blue-400 mb-4">
                E-Commerce Web Application
              </h1>

              {/* INFO */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <p>
                  <span className="text-gray-400">Category:</span> Full Stack Web Development
                </p>
                <p>
                  <span className="text-gray-400">Technology:</span> React.js, Firebase, Tailwind CSS, Context API, Firestore
                  <span className="text-gray-400">Date:</span> March 2026
                </p>

                <a
                  href="https://github.com/SamarthNaik-08"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mb-6">
                Developed a responsive e-commerce application with user authentication and email verification using Firebase.
              </p>

              {/* FEATURES */}
              <ul className="space-y-2 text-gray-300">
                <li>✔️ Firebase authentication with email verification</li>
                <li>✔️ Cart & wishlist management</li>
                <li>✔️ Product search and filtering</li>
                <li>✔️ Responsive Tailwind UI</li>
                <li>✔️ FakeStore API integration</li>
              </ul>
            </motion.div>         
          </div>          
        )}
      </AnimatePresence>

      
      {/* PROJECT CARD 4*/}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.6)] p-6 max-w-sm cursor-pointer"
        onClick={() => setOpen4(true)}
      >
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
          alt="Tuberculosis"
          className="rounded-xl mb-4 w-full h-48 object-cover"
        />

        <h2 className="text-2xl font-bold text-blue-400 mb-2">
          Portfolio Website
        </h2>

        <p className="text-gray-300 text-sm">
          A responsive portfolio website showcasing my projects and skills.
        </p>
      </motion.div>

      {/* 🔥 POPUP MODAL */}
      <AnimatePresence>
        {open4 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen4(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-blue-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,200,255,0.3)] max-w-2xl w-full p-8 text-white"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen4(false)}
                className="absolute top-4 right-4 text-xl hover:text-red-400"
              >
                <FaTimes />
              </button>

              {/* TITLE */}
              <h1 className="text-3xl font-bold text-blue-400 mb-4">
                Portfolio Website
              </h1>

              {/* INFO */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <p>
                  <span className="text-gray-400">Category:</span> Frontend Development
                </p>
                <p>
                  <span className="text-gray-400">Technology:</span> React.js, Tailwind CSS, Framer Motion, React Router DOM
                </p>
                <p>
                  <span className="text-gray-400">Date:</span> March 2026
                </p>

                <a
                  href="https://github.com/SamarthNaik-08"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mb-6">
                Developed a responsive personal portfolio website with smooth animations and modern UI.
              </p>

              {/* FEATURES */}
              <ul className="space-y-2 text-gray-300">
                <li>✔️ Modern responsive design</li>
                <li>✔️ Smooth page animations</li>
                <li>✔️ React Router navigation</li>
                <li>✔️ Interactive project showcase</li>
                <li>✔️ Modern glassmorphism UI</li>
              </ul>
            </motion.div>         
          </div>          
        )}
      </AnimatePresence>

      

    </section>
  );
}

export default Projects;