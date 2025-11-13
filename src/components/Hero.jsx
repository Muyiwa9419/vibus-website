import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 import animation library

export default function Hero() {
  return (
    <main>
      {/* 🔹 Hero Section */}
      <section className="relative bg-primary text-white h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Hero.jpeg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content with Animation */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 80 }} // Start below
          animate={{ opacity: 1, y: 0 }} // Slide up
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Powering the Future with VIBUS ⚡
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <strong>(Value Impact Business Services Limited)</strong> <br />
            We deliver sustainable, efficient, and innovative energy solutions
            for industries and communities nationwide.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/projects"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Our Projects
            </Link>
            <Link
              to="/contact"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 🔹 About Preview Section */}
      <section className="pt-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/aboutImg.jpeg"
              alt="About Vibus"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Value Impact Business Services Limited (VIBUS) is an Electrical
              and Mechanical Engineering company — a leader in providing reliable
              and sustainable power solutions across Africa. We focus on
              innovative, eco-friendly technology to power industries, cities,
              and homes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our commitment to excellence, safety, and innovation has made us a
              trusted name in the energy industry.
            </p>

            <Link
              to="/about"
              className="inline-block mt-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
            >
              Learn More →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Services Preview Section */}
      <section className="pt-24 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left Side - Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/servicesImg.jpeg"
              alt="Our Services"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We offer electrical installations, energy audits, electrical
              maintenance, mechanical and renewable energy consulting — ensuring
              every client gets sustainable and cost-effective solutions.
            </p>

            <Link
              to="/services"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Projects Preview Section */}
      <section className="pt-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left - Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Projects
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We have executed multiple large-scale electrical optimization
              projects across commercial, industrial, and residential sectors.
              Our focus is long-term efficiency and impact.
            </p>

            <Link
              to="/projects"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors"
            >
              Read More
            </Link>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            
            <div className="w-full mb-4 text-center">
  <img
    src="/projectImg.jpg"
    alt="Our Projects"
    className="rounded-2xl shadow-lg object-cover w-full h-[400px] mb-3"
  />

  <h2 className="text-2xl font-bold text-gray-700">
    Hospitality and excellent services
  </h2>
</div>

            
          </motion.div>
        </div>
      </section>
    </main>
  );
}
