import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiDatabase, FiSmartphone, FiImage } from "react-icons/fi";


const services = [
  
  {
    icon: <FiCode size={42} />,
    title: "Full Stack Development",
    description:
      "Building scalable, secure, and responsive web applications using React, Java Spring Boot, and PostgreSQL.",
  },
  {
    icon: <FiLayout size={42} />,
    title: "UI / UX Design",
    description:
      "Creating modern, user-friendly, and visually appealing interfaces that deliver seamless digital experiences across all devices.",
  },
  {
    icon: <FiCode size={42} />,
    title: "Frontend Development",
    description:
      "Developing fast, interactive, and responsive user interfaces using React.js, Tailwind CSS, JavaScript, HTML5, and CSS3.",
  },
  {
    icon: <FiDatabase size={42} />,
    title: "Database Design",
    description:
      "Designing efficient, secure, and optimized relational databases with proper normalization and performance tuning.",
  },
  {
    icon: <FiSmartphone size={42} />,
    title: "Responsive Website Development",
    description:
      "Creating fully responsive websites that provide a consistent and engaging experience across desktop, tablet, and mobile devices.",
  },
  {
    icon: <FiImage size={42} />,
    title: "Graphic Design",
    description:
      "Designing creative logos, posters, banners, social media graphics, branding materials, and marketing assets with modern design principles.",
  },
];

export default function Services() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

      {/* SPINNER */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full shadow-[0_0_40px_rgba(0,200,255,0.8)]"
      />

      {/* TEXT */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="mt-8 text-xl text-blue-400 font-mono tracking-widest"
      >
        Initializing Services Module...
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
        transition={{
          repeat: Infinity,
          duration: 1.2,
        }}
        className="mt-4 text-gray-400 text-sm"
      >
        Loading Services Interface...
      </motion.p>

    </div>
  );
}

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[6px] font-semibold">Services</p>

          <h1 className="text-5xl font-bold mt-4">
            What <span className="text-blue-400">I Offer</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Professional web development services with modern technologies,
            scalable architecture and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*0.1}}
              whileHover={{scale:1.04,y:-8}}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.45)] p-8"
            >
              <div className="w-20 h-20 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400 mb-6">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                {service.title}
              </h2>

              <p className="text-gray-300 leading-8">
                {service.description}
              </p>

              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}