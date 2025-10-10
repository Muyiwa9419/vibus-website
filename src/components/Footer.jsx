export default function Footer() {
  return (
    <footer className="bg-[#2e3092] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Value Impact Business Services ltd</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Delivering reliable, efficient, and sustainable power solutions
            to communities and industries across the nation.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-secondary">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/services" className="hover:text-white transition">Installation</a></li>
            <li><a href="/services" className="hover:text-white transition">Marketing & Maintainance</a></li>
            <li><a href="/services" className="hover:text-white transition">Sales & Service Support</a></li>
            <li><a href="/services" className="hover:text-white transition">Fabrication/Assembly of Distribution Panel</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 88 Bayo Oyewole Street, Ago Palace Way, Lagos, Nigeria</li>
            <li>📞 +234 810 088 5093</li>
            <li>📧 info@powerplantco.com</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://wa.link/p1xzk3" className="hover:text-secondary transition">🌐Contact Developer</a>
            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Value Impact Business Services Ltd. All Rights Reserved.
         
      </div>
    </footer>
  );
}
