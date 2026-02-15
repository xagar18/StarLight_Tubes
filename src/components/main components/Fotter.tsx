import { useState } from "react";
import { Link } from "react-router";

// Declare Google Translate types
declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: any;
      };
    };
    googleTranslateInitialized?: boolean;
  }
}

export default function Footer() {
  // Check for existing translation cookie on component mount
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  // Set initial language based on cookie
  const initialLanguage = getCookie("googtrans")?.includes("/ar")
    ? "ar"
    : getCookie("googtrans")?.includes("/fr")
      ? "fr"
      : "en";
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);

    if (languageCode === "ar") {
      // Check if Google Translate is ready
      if (
        window.googleTranslateInitialized &&
        window.google &&
        window.google.translate
      ) {
        try {
          // Try to trigger translation directly
          const translateCombo = document.querySelector(
            ".goog-te-combo",
          ) as HTMLSelectElement;
          if (translateCombo) {
            translateCombo.value = "ar";
            translateCombo.dispatchEvent(
              new Event("change", { bubbles: true }),
            );

            // Wait a bit for translation to apply
            setTimeout(() => {
              // Check if translation was applied
              if (document.documentElement.lang !== "ar") {
                // Fallback to cookie method
                document.cookie = "googtrans=/en/ar; path=/; max-age=31536000";
                window.location.reload();
              }
            }, 2000);
          } else {
            // Fallback: set cookie and reload
            document.cookie = "googtrans=/en/ar; path=/; max-age=31536000";
            setTimeout(() => window.location.reload(), 1000);
          }
        } catch (error) {
          console.warn(
            "Direct translation failed, using cookie fallback:",
            error,
          );
          document.cookie = "googtrans=/en/ar; path=/; max-age=31536000";
          setTimeout(() => window.location.reload(), 1000);
        }
      } else {
        // Google Translate not ready, use cookie method
        document.cookie = "googtrans=/en/ar; path=/; max-age=31536000";
        setTimeout(() => window.location.reload(), 1000);
      }
    } else if (languageCode === "fr") {
      // Check if Google Translate is ready
      if (
        window.googleTranslateInitialized &&
        window.google &&
        window.google.translate
      ) {
        try {
          // Try to trigger translation directly
          const translateCombo = document.querySelector(
            ".goog-te-combo",
          ) as HTMLSelectElement;
          if (translateCombo) {
            translateCombo.value = "fr";
            translateCombo.dispatchEvent(
              new Event("change", { bubbles: true }),
            );

            // Wait a bit for translation to apply
            setTimeout(() => {
              // Check if translation was applied
              if (document.documentElement.lang !== "fr") {
                // Fallback to cookie method
                document.cookie = "googtrans=/en/fr; path=/; max-age=31536000";
                window.location.reload();
              }
            }, 2000);
          } else {
            // Fallback: set cookie and reload
            document.cookie = "googtrans=/en/fr; path=/; max-age=31536000";
            setTimeout(() => window.location.reload(), 1000);
          }
        } catch (error) {
          console.warn(
            "Direct translation failed, using cookie fallback:",
            error,
          );
          document.cookie = "googtrans=/en/fr; path=/; max-age=31536000";
          setTimeout(() => window.location.reload(), 1000);
        }
      } else {
        // Google Translate not ready, use cookie method
        document.cookie = "googtrans=/en/fr; path=/; max-age=31536000";
        setTimeout(() => window.location.reload(), 1000);
      }
    } else if (languageCode === "en") {
      // Reset to English
      try {
        if (
          window.googleTranslateInitialized &&
          window.google &&
          window.google.translate
        ) {
          const translateCombo = document.querySelector(
            ".goog-te-combo",
          ) as HTMLSelectElement;
          if (translateCombo) {
            translateCombo.value = "en";
            translateCombo.dispatchEvent(
              new Event("change", { bubbles: true }),
            );

            // Wait for reset
            setTimeout(() => {
              if (document.documentElement.lang !== "en") {
                // Clear cookie and reload if direct method didn't work
                document.cookie =
                  "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                window.location.reload();
              }
            }, 1500);
          } else {
            // Clear cookie and reload
            document.cookie =
              "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            setTimeout(() => window.location.reload(), 500);
          }
        } else {
          // Clear cookie and reload
          document.cookie =
            "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
          setTimeout(() => window.location.reload(), 500);
        }
      } catch (error) {
        console.warn("Translation reset failed:", error);
        document.cookie =
          "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        setTimeout(() => window.location.reload(), 500);
      }
    }
  };
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
        { name: "About Us", path: "/about" },
        { name: "Certificates", path: "/certificates" },
        { name: "Technical Info", path: "/technical-info" },
        { name: "Materials", path: "/materials" },
        { name: "Products", path: "/product" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Popular Products",
      links: [
        { name: "SS 304 Pipe", path: "/stainless-steel-304-pipe" },
        { name: "Inconel 625 Pipe", path: "/inconel-625-pipe" },
        { name: "Carbon Steel Pipe", path: "/carbon-steel-pipe" },
        { name: "Copper Pipe", path: "/copper-pipe" },
        { name: "Aluminium Pipe", path: "/aluminium-pipe" },
        { name: "Pipe Fittings", path: "/pipe-fittings" },
        { name: "Elbow Fittings", path: "/elbow-fittings" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { name: "📍 Mumbai, Maharashtra", path: "/contact" },
        {
          name: "🌍 +91 85914 70791 (International)",
          path: "tel:+918591470791",
          external: true,
        },
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
            <Link
              to="/"
              className="flex flex-col items-center md:items-start mb-6"
            >
              <img
                src="https://res.cloudinary.com/dtdardvqm/image/upload/f_avif,q_60,w_200,fl_progressive/StarlightLogo_txn0kc"
                alt="Starlight Tubes"
                className="size-16 bg-white rounded-full mb-3"
              />
              <span className="text-white font-bold text-lg">
                Starlight Tubes
              </span>
            </Link>

            <div className="mt-4">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Office Address
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                Shop No. 01, Ground floor, 121/123, Nageshwar Bhuvan Bldg,
                Kumbharwada, Mumbai, Maharashtra 400004
              </p>
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
              © 2026 Starlight Tubes. All rights reserved.
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
            <span className="hidden md:inline text-gray-600">|</span>
            <p className="text-sm text-gray-400">IEC: DMZPA1125E</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                aria-label="Select language"
                className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-md border border-gray-600 focus:border-purple-400 focus:outline-none appearance-none pr-8"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
