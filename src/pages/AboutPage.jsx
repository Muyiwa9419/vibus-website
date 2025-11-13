import React from "react";

export default function AboutPage() {
  return (
    <section className="pt-24">
      {/* 🔹 Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/aboutImg.jpeg')", // from /public folder
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center">
          About <span className="text-red-500">Us</span>
        </h1>
      </div>

      {/* 🔹 Company Overview */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/aboutImg.jpeg"
            alt="Vibus Power Plant"
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Empowering the Nation Through Reliable Power
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            VALUE IMPACT BUSINESS SERVICES LIMITED is a trusted engineering and technical solutions, a leading power solutions company
            specializing in the generation, distribution, and maintenance of
            sustainable power systems across Nigeria and Africa. With a strong
            engineering backbone and a commitment to innovation, we deliver
            efficient power infrastructure to industries, communities, and
            governments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With decades of experience in delivering reliable services across electrical repair,
            maintenance,installation support,and industrial projects. Our team of experts has implemented groundbreaking
            power technologies that drive economic growth, reduce emissions, and
            promote power accessibility for all.
          </p>
        </div>
      </div>

      {/* 🔹 Our Story */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              About the Founder
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 1979 when, Engr. O.O Oloba ventured into the engineering business with a passion for
                practical skills and innovation. This vision led to the establishment of O.O Oloba Technical
                Company, which was officially registered under the Corporate Affairs Commission (CAC)in 1984.
             </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Over time, the company evolved and rebranded into Value Impact Business Services Limited(VIBUS LTD),
                reflecting our commitment to delivering solutions that truly make an impact.
                The founder is also an accomplished author,having written and published two books <b>"Electricity
                Generation and Usage of Electrical Energy"</b>  and <b>"Safety of Electrical Installation Practice"</b> . These
                works serve as valuable reference guides for professionals in electrical repair, maintenance, and
                installation support services.
                With decades of hands-on experience and multiple engineering training programs across both
                domestic and industrial fields,the founder has built a legacy rooted in excellence, innovation, and
                service.
            </p>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Value Impact Business Services Limited, our guiding principle is simple:
                We deliver, You get value. Value makes impact.
                Customer satisfaction is at the heart of everything we do, and we remain dedicated to providing
                reliable engineering solutions that exceed expectations.</p>
             </div>

                <div className="order-1 md:order-2">
                <img
                  src="/team.jpeg"
                  alt="Our Team"
                  className="rounded-xl shadow-lg w-full h-[500px] object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>

        </div>
      </div>

      {/* 🔹 Mission / Vision / Values */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Our Vission",
              text: "To be the leading provider of innovative and sustainable engineering solutions in Nigeria and beyond, delivering excellence that transforms industries and communities",
            },
            {
              title: "Our Mission",
              text: (
                <ul className="text-gray-700 space-y-2 text-left md:text-center">
                  <li>• To consistently deliver high-quality engineering, electrical, and technical services that meet
                    international standards.</li>
                  <li>• To empower clients with reliable solutions that add value, ensure safety, and improve efficiency</li>
                  <li>• To build long term relationships through professionalism, innovation and customer satisfaction</li>
                </ul>
              ),
            },
            {
              title: "Our Core Values",
              text: (
                <ul className="text-gray-700 space-y-2 text-left md:text-center">
                  <li>• Integrity - We operate with honesty, transparency and accountability</li>
                  <li>• Excellence - We strive for the highest standards in every project</li>
                  <li>• Innovation - We embrace new technologies and creative approaches to problem-solving</li>
                  <li>• Customer Focus - Our clients' satisfaction is our top priority</li>
                  <li>• Safety - We prioritize safe practices in all our operations</li>
                  <li>• Impact - We aim to make lasting contributions to industries</li>
                </ul>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Leadership Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            Our Leadership
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Engr. O. O Oloba",
                role: "Chairman",
                img: "/ceo.jpeg",
              },
              {
                name: "Mrs. Oladunjoye I. A",
                role: "Director",
                img: "/director.jpeg",
              },
              {
                name: "Engr. Oladunjoye O. A",
                role: "Managing Director",
                img: "/md.jpeg",
              },
            ].map((leader, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-red-600"
                />
                <h4 className="text-xl font-bold text-blue-900">
                  {leader.name}
                </h4>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Sustainability Section */}
      <div className="bg-gray-100 text-gray-700 py-20 text-center mb-8 px-6">
        <h2 className="text-3xl font-bold mb-6">Committed to Sustainability 🌍</h2>
        <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed mb-8">
          At VIBUS, we believe in powering progress responsibly. Our renewable
          initiatives and eco-friendly operations ensure that we meet today’s
          energy needs without compromising the planet’s future.
        </p>
        <a
          href="/projects"
          className="bg-red-600 px-8 py-3 text-white rounded-full font-semibold hover:bg-red-700 transition"
        >
          Explore Our Projects →
        </a>
      </div>
    </section>
  );
}
