"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  alts,
}: {
  images: string[];
  children: (currentIndex: number) => React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  alts?: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  }, [images.length]);

  // Prefetch next image during idle time
  useEffect(() => {
    const next = currentIndex + 1 === images.length ? 0 : currentIndex + 1;

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => {
        const img = new Image();
        img.src = images[next];
      });
    } else {
      setTimeout(() => {
        const img = new Image();
        img.src = images[next];
      }, 200);
    }
  }, [currentIndex, images]);

  /* Autoplay */
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0] as [number, number, number, number],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: { duration: 1 },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: { duration: 1 },
    },
  };

  return (
    <div
      className={cn(
        "overflow-hidden h-full top-8 w-full relative flex items-center justify-center",
        className,
      )}
      style={{ perspective: "1000px" }}
    >
      {children(currentIndex)}

      {overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial="initial"
          animate="visible"
          exit={direction === "up" ? "upExit" : "downExit"}
          variants={slideVariants}
          className="image h-full w-full absolute inset-0 object-cover object-center"
          width={1600}
          height={900}
          alt={alts?.[currentIndex] || ""}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          fetchPriority={currentIndex === 0 ? "high" : "auto"}
          decoding="async"
          draggable={false}
        />
      </AnimatePresence>
    </div>
  );
};
