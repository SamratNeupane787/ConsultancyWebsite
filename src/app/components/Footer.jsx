export function Footer() {
  return (
    <footer className="bg-[#242424] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Consulty</h3>
          <p className="text-sm">
            Empowering your journey with trusted immigration consultancy
            services worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline text-[#87CEFA]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[#87CEFA]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[#87CEFA]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[#87CEFA]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">Email: support@consulty.com</p>
          <p className="text-sm">Phone: 01-5858558</p>
          <p className="text-sm">Address:Kalanki, Kathmandu</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-[#87CEFA]">
        © {new Date().getFullYear()} Consulty. All rights reserved.
      </div>
    </footer>
  );
}
