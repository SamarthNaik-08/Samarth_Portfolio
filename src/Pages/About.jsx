import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePhoto from "../Asset/Profile_photo.jpeg";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sec loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

        {/* ROTATING RING */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full shadow-[0_0_30px_rgba(0,200,255,0.8)]"
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-xl text-blue-400 font-mono tracking-widest"
        >
          Initializing About Module...
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

        {/* LOADING TEXT */}
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-4 text-gray-400 text-sm"
        >
          Loading About Interface...
        </motion.p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I'm <span className="text-blue-400 font-semibold">Samarth</span> 👋
            A passionate frontend developer who loves building modern,
            responsive and user-friendly web applications.
          </p>

          <p className="text-gray-400">
            I specialize in React, Tailwind CSS and creating clean UI/UX.
            I enjoy turning ideas into reality using code 🚀
          </p><br />

          {/* PERSONAL INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">

            <div className="flex">
              <span className="text-blue-400 font-semibold min-w-[65px]">🎂 DOB:</span>
              <span>20 Nov 2004</span>
            </div>

            <div className="flex">
              <span className="text-blue-400 font-semibold min-w-[85px]">🌐 Website:</span>
              <span className="break-all">samarthportfolio-phi.vercel.app</span>
            </div>

            <div className="flex">
              <span className="text-blue-400 font-semibold min-w-[73px]">📞 Phone:</span>
              <span>+91 8901559500</span>
            </div>

            <div className="flex">
              <span className="text-blue-400 font-semibold min-w-[65px]">📍 City:</span>
              <span className="break-words">
                Baggon, Post: Kalbhag, Kumta, Uttara Kannada
              </span>
            </div>

            <div className="flex">
              <span className="text-blue-400 font-semibold min-w-[80px]">🎓 Degree:</span>
              <span>Bachelor of Computer Applications (BCA)</span>
            </div>

            <div className="flex">
              <span className="text-blue-400 font-semibold min-w-[68px]">📧 Email:</span>
              <span className="break-all">naiksamarth1849@email.com</span>
            </div>

          </div>

          
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="flex justify-center">
          <img
            src={profilePhoto}
            alt="profile"
            className="w-72 h-72 object-cover rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.6)]"
          />
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Java", "Python", "PostgreSQL"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-6 text-center bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8 text-center">
        {[
          { num: "5+", label: "Projects" },
          { num: "2+", label: "Years Learning" },
          { num: "100%", label: "Passion" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-blue-400">{item.num}</h3>
            <p className="text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default About;

