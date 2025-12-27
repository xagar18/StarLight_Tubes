"use client";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ImagesSlider } from "../ui/images-slider";
import { useEffect, useMemo, useState } from "react";

const CLOUD_NAME = "dtdardvqm";

/* 🔥 Responsive Cloudinary URL */
const getImageUrl = (publicId: string, width: number) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width},c_fill/${publicId}`;

export function ImagesSliderDemo() {
  const [imgWidth, setImgWidth] = useState(1600);

  /* ✅ Decide image width ONCE */
  useEffect(() => {
    const w = window.innerWidth;
    if (w < 640) setImgWidth(480); // mobile
    else if (w < 1024) setImgWidth(1024); // tablet
    else setImgWidth(1600); // desktop
  }, []);

  /* ✅ Images generated only once */
  const images = useMemo(
    () => [
      getImageUrl("Home_aaq22e", imgWidth),
      getImageUrl("Home1_uqnocu", imgWidth),
      getImageUrl("Home2_g7sivg", imgWidth),
      getImageUrl("Home3_ph7c4v", imgWidth),
      getImageUrl("Home4_wrv7d7", imgWidth),
      getImageUrl("Home5_l875gv", imgWidth),
      getImageUrl("Home6_ybywtc", imgWidth),
    ],
    [imgWidth]
  );

  /* ✅ Preload ONLY the first image (LCP) */
  useEffect(() => {
    const img = new Image();
    img.src = images[0];
  }, [images]);

  const texts = [
    {
      title: "Global Metal",
      highlight: "Exports",
      subtitle:
        "Trusted Exporter of Stainless Steel, Nickel Alloys, Inconel & Carbon Steel to 60+ Countries",
      badge: "Worldwide Delivery",
    },
    {
      title: "Your Global",
      highlight: "Supply Partner",
      subtitle:
        "SS Pipes, Nickel Sheets, Inconel Bolts, Carbon Steel & More — Delivered Worldwide",
      badge: "Export Specialists",
    },
    {
      title: "Precision",
      highlight: "Engineering",
      subtitle: "Seamless & Welded Tubes Built for Industrial Excellence",
      badge: "Global Delivery",
    },
    {
      title: "Inconel & Nickel",
      highlight: "Superalloys",
      subtitle: "High-Performance Materials for Extreme Environments",
      badge: "Premium Quality",
    },
    {
      title: "Carbon Steel",
      highlight: "Expertise",
      subtitle:
        "ASTM & API 5L Certified for Oil, Gas & Petrochemical Industries",
      badge: "Trusted Partner",
    },
    {
      title: "Global Export",
      highlight: "Network",
      subtitle: "Serving 60+ Countries Across 6 Continents with Excellence",
      badge: "Worldwide",
    },
    {
      title: "Quality",
      highlight: "Guaranteed",
      subtitle: "Mill Test Certificates & Third Party Inspection Available",
      badge: "100% Authentic",
    },
  ];

  return (
    <ImagesSlider className="md:h-[85vh] h-[75vh]" images={images}>
      {(currentIndex) => (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center px-6 md:px-12"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="text-amber-400 text-sm font-semibold uppercase">
              {texts[currentIndex].badge}
            </span>
          </span>

          {/* Heading */}
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center max-w-5xl">
            <span className="text-white">{texts[currentIndex].title}</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              {texts[currentIndex].highlight}
            </span>
          </h1>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-6 mb-6 rounded-full" />

          {/* Subtitle */}
          <p className="text-base md:text-xl lg:text-2xl text-center text-white/80 max-w-4xl">
            {texts[currentIndex].subtitle}
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:scale-105 transition-all shadow-xl"
            >
              Request Quote
            </Link>
          </div>
        </motion.div>
      )}
    </ImagesSlider>
  );
}
