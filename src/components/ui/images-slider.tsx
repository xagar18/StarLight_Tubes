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
}: {
  images: string[];
  children: (currentIndex: number) => React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    // Load only first image initially, then lazy load rest
    const loadFirstImage = () => {
      const img = new Image();
      img.src = images[0];
      img.onload = () => {
        setLoadedImages([images[0]]);
        setLoading(false);
        // Load remaining images in background
        loadRemainingImages();
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${images[0]}`);
        setLoading(false);
      };
    };

    const loadRemainingImages = () => {
      images.slice(1).forEach((image) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          setLoadedImages((prev) => [...prev, image]);
        };
      });
    };

    loadFirstImage();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoplay && !loading) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious, loading]);

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
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  // Loading skeleton
  if (loading) {
    return (
      <div
        className={cn(
          "overflow-hidden h-full  w-full relative flex items-center justify-center",
          className
        )}
      >
        <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black animate-pulse" />
        <div className="z-50 flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
          <p className="text-white/60 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden h-full top-8 w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {loadedImages.length > 0 && children(currentIndex)}
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
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
};
