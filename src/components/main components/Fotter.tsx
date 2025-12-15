import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"],
    },
    {
      title: "Support",
      links: ["Submit ticket", "Documentation", "Guides"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Jobs", "Press"],
    },
    {
      title: "Legal",
      links: ["Terms of service", "Privacy policy", "License"],
    },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M10 20C10 20 15 10 20 15C25 20 20 30 20 30"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M20 10C20 10 25 20 30 15C35 10 30 0 30 0"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Leading manufacturer and exporter of premium steel tubes, pipes,
              and industrial materials since 1992.
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
                <Github size={20} />
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
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </a>
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
