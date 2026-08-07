import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  // 🔥 LOADER TIMER
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // 🚀 INSANE LOADER
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full shadow-[0_0_30px_rgba(0,200,255,0.8)]"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-xl text-blue-400 font-mono tracking-widest"
        >
          Initializing Contact Module...
        </motion.h1>

        <div className="w-64 h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
        </div>

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-4 text-gray-400 text-sm"
        >
          Loading Contact Interface...
        </motion.p>
      </div>
    );
  }

  // ✅ NORMAL PAGE
  const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";

    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email";
    }

    if (!form.subject.trim()) {
      err.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      err.message = "Message is required";
    }

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      toast.error("Fix errors ❌");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});

    } catch (error) {
      console.error("EmailJS Error:", error.text || error.message || error);
      toast.error("Failed to send message ❌");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">

      {/* CONTACT HEADER */}
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mb-12">
            Feel free to contact me for collaborations, freelance work,
            internships or any project discussion 🚀
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
              <p>Baggon, Post: Kalbhag, Kumta, Uttara Kannada</p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
              <FaPhoneAlt className="text-green-400 text-xl" />
              <p>+91 8901559500</p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
              <FaEnvelope className="text-red-400 text-xl" />
              <p className="break-all">
                naiksamarth1849@gmail.com
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 text-2xl pt-4">

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
                href="https://linkedin.com/in/samarth-naik-1561363a0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-blue-500"
              />

              {errors.name && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-blue-500"
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-blue-500"
              />

              {errors.subject && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="
                w-full
                px-4
                py-3
                bg-black/30
                border border-white/20
                rounded-xl
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:border-blue-500
                transition
                resize-none"
              />

              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={!isSending ? { scale: 1.05 } : {}}
              whileTap={!isSending ? { scale: 0.95 } : {}}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out ${isSending
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-500"
                }`}
            >
              {isSending ? "Sending..." : "Send Message 🚀"}
            </motion.button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
