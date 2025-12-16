import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Stainless Steel", path: "/stainless-steel" },
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
              <img src="/StarlightLogo.png" alt="" className="size-10" />
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Leading exporter of premium steel tubes, pipes, and industrial
              materials since 1992.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
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
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
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
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-sm text-gray-400">
            © 2025 Starlight Tubes. All rights reserved. |
            www.starlighttubes.com | GSTIN: 27DMZPA1125E1Z6
          </p>
        </div>
      </div>
    </footer>
  );
}
