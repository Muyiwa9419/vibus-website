import React from "react";

export default function ServicesPage() {
  return (
    <section className="pt-24 bg-gray-50 text-gray-800">
      {/* 🔹 Hero Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/power3.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-white text-5xl font-extrabold text-center">
          Our <span className="text-red-500">Services</span>
        </h1>
      </div>

      {/* 🔹 Services Overview */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Do</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          At <b>Value Impact Business Services ltd</b>, we offer a comprehensive range of energy and technology
          solutions designed to meet the growing needs of industries, 
          communities, and businesses across Africa. Our services are 
          built on innovation, reliability, and sustainability.
        </p>
      </div>

      {/* 🔹 Service Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Installation",
            desc: "200A AC Power Panel.",
            img: "/power1.png",
          },
          {
            title: "Marketing & Maintainance",
            desc: "From electrical grid systems to mini-grids, we build and manage infrastructure that powers communities efficiently.",
            img: "/power.jpeg",
          },
          {
            title: "Sales & Service Support",
            desc: "Our experts provide advisory services on energy optimization, project design, and investment planning for businesses and governments.",
            img: "/power2.jpeg",
          },
          {
            title: "Smart Metering & IoT Systems",
            desc: "We integrate intelligent metering solutions to improve monitoring, billing accuracy, and energy management for utilities.",
            img: "/power3.jpeg",
          },
          {
            title: "Fabrication",
            desc: "Our team provides ongoing system maintenance, technical inspections, and fabrication.",
            img: "/power4.jpeg",
          },
          {
            title: "Training & Capacity Building",
            desc: "We empower local engineers and technicians through professional training programs in renewable energy and power management.",
            img: "/aboutImg.jpeg",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">{service.desc}</p>
              <a
                href="/contact"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Why Choose Us */}
      <div className="bg-gray-100 mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Why Choose <span className="text-red-500">VIBUS</span>?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            We combine years of industry expertise, cutting-edge technology,
            and a passion for clean energy to deliver world-class solutions that
            exceed expectations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left md:text-center">
            {[
              {
                title: "Expert Team",
                text: "Our engineers and energy consultants are highly trained professionals committed to quality and innovation.",
              },
              {
                title: "Sustainable Impact",
                text: "Every project we execute aims to promote renewable energy adoption and environmental responsibility.",
              },
              {
                title: "Customer-Focused",
                text: "We prioritize our clients’ needs, ensuring transparent communication and tailored energy solutions.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
