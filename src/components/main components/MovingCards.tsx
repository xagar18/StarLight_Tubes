"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Premium Industrial Metal Products
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "Duplex 2205 Plate.png",
    name: "Duplex 2205 Plate",
    title: "Premium Grade Stainless Steel",
  },

  {
    image: "Duplex Stainless Steel Round Bar.png",
    name: "Duplex Round Bar",
    title: "Industrial Grade Quality",
  },

  {
    image: "Nickel 201 Tube.png",
    name: "Nickel 201 Tube",
    title: "Low Carbon Content",
  },
  {
    image: "StainlessSteelTube1.png",
    name: "Stainless Steel Tube",
    title: "Corrosion Resistant",
  },
];
