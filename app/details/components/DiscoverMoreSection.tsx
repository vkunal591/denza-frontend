"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function DiscoverMoreSection() {
  const items = [
    {
      title: "Full Specification",
      subtitle: "Download Brochure",
      image: "/discover/spec.jpg",
    },
    {
      title: "Test Drive",
      subtitle: "Lorem ipsum dolor sit amet",
      image: "/discover/testdrive.jpg",
    },
    {
      title: "Car Configurator",
      subtitle: "Lorem ipsum dolor sit amet",
      image: "/discover/configurator.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TITLE */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          Discover More
        </h2>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {items.map((card, index) => (
            <div
              key={index}
              className="
                relative group overflow-hidden rounded-2xl h-64 cursor-pointer
                shadow-md bg-black
              "
            >
              {/* IMAGE */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* DARK OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

              {/* TEXT CONTENT */}
              <div className="absolute top-6 left-6 text-white">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm opacity-80 mt-1">{card.subtitle}</p>
              </div>

              {/* BOTTOM-RIGHT ARROW BUTTON */}
              <div
                className="
                  absolute bottom-6 right-6 
                  w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm
                  flex items-center justify-center
                  group-hover:bg-white/30 transition
                "
              >
                <FiArrowRight className="text-white" size={18} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
