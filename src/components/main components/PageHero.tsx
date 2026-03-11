"use client";
import { motion } from "motion/react";
import { Link } from "react-router";

const CLOUD_BASE = "https://res.cloudinary.com/dtdardvqm/image/upload/";

function buildCloudinarySrcSet(publicId: string) {
  const widths = [480, 768, 1024, 1200];
  const srcSet = widths
    .map((w) => `${CLOUD_BASE}f_auto,q_70,w_${w},c_fill/${publicId} ${w}w`)
    .join(", ");
  const sizes = "(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px";
  const src = `${CLOUD_BASE}f_auto,q_70,w_1200,c_fill/${publicId}`;
  return { src, srcSet, sizes };
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function PageHero({
  title,
  subtitle,
  image = "aboutus_whnwsq",
  buttonText = "Get Quote →",
  buttonLink = "/contact",
}: PageHeroProps) {
  // If image is a Cloudinary URL, extract publicId; if it's a publicId, use directly
  const isCloudinaryUrl = image.startsWith(CLOUD_BASE);
  const isLocalPath = image.startsWith("/");

  let imgProps: { src: string; srcSet?: string; sizes?: string };
  if (isLocalPath) {
    imgProps = { src: image };
  } else {
    const publicId = isCloudinaryUrl
      ? image.replace(/.*\/upload\/[^/]+\//, "")
      : image;
    imgProps = buildCloudinarySrcSet(publicId);
  }

  return (
    <div className="relative top-8 md:h-150 h-120 w-full overflow-hidden">
      <img
        src={imgProps.src}
        srcSet={imgProps.srcSet}
        sizes={imgProps.sizes}
        alt={`${title} - Starlight Tubes`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={1200}
        height={600}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* ✅ CONTENT ANIMATES (NOT IMAGE) */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium"
          >
            Starlight Tubes
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="font-bold text-3xl md:text-5xl lg:text-6xl text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 py-4 max-w-4xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-normal text-base md:text-xl text-center text-neutral-300 mt-2 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to={buttonLink}
              className="inline-block px-6 py-3 backdrop-blur-sm border bg-emerald-500/20 border-emerald-500/40 text-white text-center rounded-full relative mt-6 hover:bg-emerald-500/30 transition-all"
            >
              {buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
