import React from "react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "../Asset/Profile_photo.jpeg";

function Home() {
  const navigate = useNavigate();

  const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Samarth_Venkatesh_Naik_Resume.pdf";
  link.download = "Samarth_Venkatesh_Naik_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-0 md:left-10"></div>

      <div className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-0 md:right-10"></div>

      {/* CONTENT */}
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 z-10">

        {/* LEFT SIDE */}
        <div className="max-w-xl text-center lg:text-left">

          <h2 className="text-blue-400 text-base sm:text-lg md:text-xl mb-3 font-semibold">
            Hello, I'm
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Samarth Naik 👋
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            Passionate Full Stack & React Developer focused on building
            modern, responsive, scalable, and user-friendly web applications.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">

            <button
              onClick={() => navigate("/projects")}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-8 py-3 rounded-xl font-semibold shadow-[0_0_20px_rgba(0,150,255,0.5)]"
            >
              View Projects
            </button>

            <button
              onClick={downloadResume}
              className="w-full sm:w-auto border border-blue-400 hover:bg-blue-500/10 transition-all duration-300 px-8 py-3 rounded-xl font-semibold"
            >
              Download Resume
            </button>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">

          {/* GLOW */}
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>

          <img
            src={profilePhoto}
            alt="profile"
            className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-400 object-cover shadow-[0_0_50px_rgba(0,150,255,0.5)] hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>
  );
}

export default Home;