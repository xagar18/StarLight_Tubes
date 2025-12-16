import { motion } from "motion/react";

const industries = [
  "Stainless Steel Pipes & Tubes",
  "Carbon Steel Pipes",
  "Steel Plates & Sheets",
  "Industrial Steel Bars",
  "Alloy Steel Products",
];

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-950 to-black text-white flex items-center justify-center px-6">
      {/* Subtle animated grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating glow blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-72 h-72 bg-emerald-700/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl"
      />

      {/* Content card */}
      <div className="relative max-w-3xl w-full text-center bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
        {/* Brand */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl md:text-5xl font-bold tracking-wide"
        >
          Starlight Tubes
          <motion.span
            animate={{ left: ["-100%", "100%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 h-0.5 w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          />
        </motion.h1>

        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          India’s Leading Exporter & Stockist of Industrial Steel Products
        </p>

        {/* Since badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-xs md:text-sm text-emerald-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          Serving Global Industries Since 2020
        </motion.div>

        <div className="w-20 h-0.5 bg-emerald-500 mx-auto my-8 rounded-full opacity-80" />

        {/* Coming soon */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Crafting Our Next Chapter
        </h2>

        {/* Rotating industries */}
        <div className="mt-3 h-6 overflow-hidden text-emerald-300 text-sm md:text-base font-medium">
          <motion.div
            animate={{ y: industries.map((_, i) => `-${i * 24}px`) }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            {industries.map((item, index) => (
              <div key={index} className="h-6">
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:sales@starlighttubes.com"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition font-medium"
          >
            Contact Sales
          </a>
          <a
            href="tel:+919892233118"
            className="px-6 py-3 rounded-xl border border-emerald-700 hover:bg-emerald-600 hover:text-white transition font-medium"
          >
            Call Us
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-xs md:text-sm text-gray-400 space-y-2 leading-relaxed">
          <p>Building No. 121/123, Shop No. 1, Nageshwar Bhuvan,</p>
          <p>2nd Kumbharwada Lane, Mumbai – 400004, India</p>
          <p>Phone: +91 98922 33118 | Email: sales@starlighttubes.com</p>
          <p>GSTIN: 27DMZPA1125E1Z6</p>
        </div>

        <div className="mt-8 text-xs text-gray-500 opacity-80">
          © 2025 Starlight Tubes. All rights reserved.
        </div>
      </div>
    </div>
  );
}
