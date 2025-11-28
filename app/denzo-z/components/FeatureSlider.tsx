"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const featureTabs = ["Light", "Feature 02", "Feature 03", "Feature 04"];

const slides = [
  {
    id: 1,
    title: "Light",
    description:
      "One screen dedicated to driving info and media, the other for climate, seat settings, and gesture controls.",
    image: "/assets/images/cardfrontside.webp",
  },
  {
    id: 2,
    title: "Exterior Finish",
    description:
      "A refined body structure with advanced LED matrix lighting and precise aerodynamic lines.",
    image: "/assets/images/carside.jpg",
  },
  {
    id: 3,
    title: "Control Panel",
    description:
      "Smart control central interface with intuitive UI, fast interaction, and smooth response.",
    image: "/assets/images/carfrontrightside.jpg",
  },
  {
    id: 4,
    title: "Seat Comfort",
    description:
      "Premium seating experience optimized for long drives with superior ergonomic support.",
    image: "/assets/images/carsideright.jpg",
  },
];

export default function FeatureSlider() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TABS */}
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
          {featureTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`transition-all duration-300 ${
                activeTab === index
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* SWIPER SLIDER */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={20}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[360px] bg-black rounded-xl overflow-hidden shadow-md">

                {/* IMAGE */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />

                {/* GRADIENT OVERLAY LEFT */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

                {/* TEXT CONTENT */}
                <div className="absolute top-10 left-8 text-white max-w-xs">
                  <h2 className="text-xl font-semibold">{slide.title}</h2>
                  <p className="text-sm mt-2 text-white/80 leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                {/* BOTTOM BUTTONS */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">

                  {/* Test Drive – Outline button */}
                  <button
                    className="
                      px-6 py-2 rounded-xl text-white text-sm tracking-wide
                      border border-white/40 bg-white/5
                      backdrop-blur-md
                      hover:bg-white/10 hover:border-white/60
                      active:scale-95 
                      transition-all duration-300
                    "
                  >
                    Test drive
                  </button>

                  {/* Configurator – Filled button */}
                  <button
                    className="
                      px-6 py-2 rounded-xl text-black text-sm tracking-wide
                      bg-white shadow-[0_2px_10px_rgba(0,0,0,0.25)]
                      hover:bg-gray-100
                      active:scale-95
                      transition-all duration-300
                    "
                  >
                    Configurator
                  </button>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
