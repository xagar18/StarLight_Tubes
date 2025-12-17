"use client";
import { motion } from "motion/react";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/MainScrollableImage/Home.webp",
    "/MainScrollableImage/Home1.webp",
    "/MainScrollableImage/Home2.webp",
    "/MainScrollableImage/Home3.webp",
    "/MainScrollableImage/Home4.webp",
    "/MainScrollableImage/Home5.webp",
    "/MainScrollableImage/Home6.webp",
  ];

  const texts = [
    {
      title: "Premium Steel Tubes",
      subtitle: "Quality Manufacturing Excellence",
    },
    {
      title: "ERW Steel Pipes",
      subtitle: "Precision Engineering Solutions",
    },
    {
      title: "Seamless Tubes",
      subtitle: "Strength & Durability Combined",
    },
    {
      title: "Industrial Solutions",
      subtitle: "Trusted by Leading Industries",
    },
    {
      title: "Custom Fabrication",
      subtitle: "Tailored to Your Specifications",
    },
    {
      title: "Global Export",
      subtitle: "Worldwide Delivery Network",
    },
    {
      title: "ISO Certified",
      subtitle: "Quality Assurance Guaranteed",
    },
  ];

  return (
    <ImagesSlider className="md:h-150 h-120" images={images}>
      {(currentIndex) => (
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            {texts[currentIndex].title}
          </motion.p>
          <motion.p className="font-normal text-base md:text-2xl text-center text-neutral-300 mt-2">
            {texts[currentIndex].subtitle}
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Contact Us →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      )}
    </ImagesSlider>
  );
}
