import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main>
      <section className="relative bg-primary text-white h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Hero.jpeg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Powering the Future with VIBUS ⚡
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            We deliver sustainable, efficient, and innovative energy solutions for industries and communities nationwide.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
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
          </div>
        </div>
      </section>

      {/* 🔹 About Preview Section */}
      <section className="pt-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/aboutImg.jpeg"
              alt="About Vibus"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Value Impact Business Services Limites(VIBUS) is an Electrical and Mechanical Engineering company, a leader in providing reliable and sustainable power solutions across Africa.
              We focus on innovative, eco-friendly technology to power industries, cities, and homes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our commitment to excellence, safety, and innovation has made us a trusted name in the energy industry.
            </p>

            <Link
              to="/about"
              className="inline-block mt-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 Services Preview Section */}
      <section className="pt-24 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src="/servicesImg.jpeg"
              alt="Our Services"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          {/* Right Side - Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We offer electrical installations, energy audits, electrical maintenance, mechanical
              and renewable energy consulting, ensuring every client gets
              sustainable and cost-effective solutions.
            </p>

            <Link
              to="/services"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 Projects Preview Section */}
      <section className="pt-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left - Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Projects</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We have executed multiple large-scale electrical optimization projects across
              commercial, industrial, and residential sectors. Our focus is long-term efficiency and impact.
            </p>

            <Link
              to="/projects"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors"
            >
              Read More
            </Link>
          </div>

          {/* Right - Image */}
          <div className="md:w-1/2">
            <img
              src="/projectImg.jpg"
              alt="Our Projects"
              className="rounded-2xl shadow-lg object-cover mb-4 w-full h-[400px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
