import React from "react";

export default function ProjectsPage() {
  return (
    <section className="pt-24 bg-gray-50 text-gray-800">
      {/* 🔹 Hero Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/servicesImg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-white text-5xl font-extrabold text-center">
          Our <span className="text-red-500">Projects</span>
        </h1>
      </div>

      {/* 🔹 Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Powering Change Through Innovation
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          From power farms to industrial power solutions, VIBUS has successfully
          executed energy projects that drive progress and sustainability.
          Explore some of our landmark projects across Nigeria and Africa.
        </p>
      </div>

      {/* 🔹 Project Grid */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Lagos Airport Hotel ltd – Ikeja, Lagos",
            desc: "Electrical consultant for the hotel that undertakes the repairs, maintenance, and installation support services of their sundry electrical power equipments.",
            img: "/projectImg.jpg",
          },
          {
            title: "Delacrox Event Centres and Hotels – Ajegunle, Lagos",
            desc: "Electrical consultant for the above named organisation which undertakes the repairs, maintenance, and installation support services of their sundry electrical services..",
            img: "/project2.png",
          },
          {
            title: "National Agency for Food and Drug Administration Control – Oshodi, Lagos",
            desc: "We carried out relocating of an existing SF6 11KV(RMU), Constructed synchronising 1600A change over panel and other sub-distribution power panels, Fabricated and assembled 1600A Transformer Incoming Isolator Feeders as per designer's specification, Installed the Main Distribution and Sub-distribtion control panels 750KVA 11/0.415KV Transformer also installed ",
            img: "/project3.jpg",
          },
          {
            title: "Automated Process Limited – Dopemu, Lagos",
            desc: "Carried out installation of protective earthing for instrumention control panel at NDL, Assembled 100A Automation Motor ControlPanels. Also carried out electrical installations at GSK Agbara, Ogun State, Carried out Power Control installation at Cocacola plant Sango, Otta ",
            img: "/project4.jpg",
          },
          {
            title: "FINBURG Nigeria Ltd – Ago Okota, Lagos",
            desc: "Carried out the electrical installation project of the above named factory and office block, Replaced burnt 200A Gear Switch with 400A MCCB Breaker/other electrical support services.",
            img: "/project5.jpg",
          },
          {
            title: "BIOPACK Synergies Ltd – Ogun ",
            desc: "Constructed 3200A motorized manual change over panel with outgoing feeder, 2500A and 1600A sub distribution power panels and also carried out installation.",
            img: "/project6.jpg",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.desc}
              </p>
              <a
                href="/contact"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Project Stats */}
      <div className="bg-gray-100 mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Our <span className="text-red-500">Impact</span> in Numbers
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { number: "2000+", label: "Completed Projects" },
              { number: "10+", label: "Ongoing Installations" },
              { number: "5000MW+", label: "Total Power Generated" },
              { number: "200+", label: "Communities Powered" },
            ].map((stat, index) => (
              <div key={index}>
                <h4 className="text-4xl font-bold text-red-600 mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 CTA Section */}
      <div className="bg-gray-100 text-gray-700 py-16 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Partner With <span className="text-red-500">VIBUS</span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Ready to collaborate on your next energy project? Let’s build a
            sustainable future together through innovation, reliability, and
            impact-driven energy solutions.
          </p>
          <a
            href="/contact"
            className="bg-red-600 text-white px-8 mt-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
}
