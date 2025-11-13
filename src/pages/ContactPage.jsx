import React from "react";

export default function Contact() {
  return (
    <section className="pt-24 pb-16 bg-white">
        <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/servicesImg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-white text-5xl font-extrabold text-center">
          Contact <span className="text-red-500">Us</span>
        </h1>
      </div>
      {/* Header */}
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl font-bold text-navy">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you! Whether you have a question about our
          services, need support, or want to partner with us — we’re ready to help.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-6">
            Our offices are open Monday to Friday from 8:00am – 5:00pm. You can
            reach us through any of the following means.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Address:</strong> 88, Bayo Oyewole Street, Ago Palace Way, Lagos
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href="https://wa.link/5fnwcx"
                className="text-red-600 hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <strong>Phone call only:</strong>{" "}
                 08023535863, 08053736463
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@vibuspower.com"
                className="text-red-600 hover:underline"
              >
                info@vibus.com
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <iframe
              title="Vibus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31657.124689404138!2d3.28541733306402!3d6.593750501374223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf1fa5780d49d%3A0x970e81aae8f7bcf7!2s88%20Bayo%20Oyewole%20St%2C%20Ago%20Palace%20Way%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="250"
              className="rounded-lg border"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-4">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
