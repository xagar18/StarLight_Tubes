import { Link } from "react-router";

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Stainless Steel", path: "/stainless-steel" },
        { name: "Aluminium", path: "/aluminium" },
        { name: "Copper", path: "/copper" },
        { name: "Fittings", path: "/fittings" },
        { name: "Carbon Steel", path: "/carbon-steel" },
        { name: "Nickel Alloys", path: "/nickel-alloys" },
        { name: "Inconel", path: "/inconel" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Materials", path: "/materials" },
        { name: "Coating", path: "/coating" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Popular Products",
      links: [
        { name: "SS 304 Pipe", path: "/stainless-steel-304-pipe" },
        { name: "SS 316 Pipe", path: "/stainless-steel-316l-pipe" },
        { name: "Inconel 625 Pipe", path: "/inconel-625-pipe" },
        { name: "Carbon Steel Pipe", path: "/carbon-steel-pipe" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { name: "📍 Mumbai, Maharashtra", path: "/contact" },
        {
          name: "📞 +91 98922 33118",
          path: "tel:+919892233118",
          external: true,
        },
        {
          name: "✉️ sales@starlighttubes.com",
          path: "mailto:sales@starlighttubes.com",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/StarlightLogo.png"
                alt=""
                className="size-20 mx-auto bg-white rounded-full"
              />
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Shop No. 01, Ground floor, 121/123, Nageshwar Bhuvan Bldg,
              Kumbharwada, Mumbai, Maharashtra 400004
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.path}
                        className="text-sm  text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Starlight Tubes. All rights reserved.
            </p>
            <span className="hidden md:inline text-gray-600">|</span>
            <a
              href="https://www.starlighttubes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              www.starlighttubes.com
            </a>
            <span className="hidden md:inline text-gray-600">|</span>
            <p className="text-sm text-gray-400">GSTIN: 27DMZPA1125E1Z6</p>
          </div>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Crafted with <span className="text-red-500">♥</span> by{" "}
            <a
              href="https://xagar.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
            >
              Sagar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
