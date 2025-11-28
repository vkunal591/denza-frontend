"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const tabs = [
  "Accents",
  "Panoramic roof",
  "Interior lighting",
  "Features 04",
  "Features 05",
];

const slides = [
  {
    title: "Dual 15.6” OLED Touchscreens",
    description:
      "One screen dedicated to driving info and media, the other to climate, seat settings, and gesture controls.",
    image: "/assets/images/cardfrontside.webp",
  },
  {
    title: "Immersive Ambient Lighting",
    description: "64-color ambient lighting system with dynamic scenes.",
    image: "/assets/images/carfrontrightside.jpg",
  },
  {
    title: "Precision Glass Roof",
    description:
      "Panoramic electrochromic roof controlling light and heat intelligently.",
    image: "/assets/images/carsideright.jpg",
  },
];

export default function AccentSlider() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TABS */}
        <div className="flex gap-8 mb-10 text-sm font-medium justify-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`pb-1 transition ${
                activeTab === i
                  ? "font-semibold text-black border-b-2 border-black"
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
          navigation
          slidesPerView={2}
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={20}
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false },
            768: { slidesPerView: 2, centeredSlides: true },
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl overflow-hidden shadow-md bg-black relative group">

                {/* IMAGE */}
                <div className="w-full h-[420px] relative">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* OVERLAY TEXT LEFT */}
                <div className="absolute top-10 left-10 text-white max-w-xs">
                  <h2 className="text-xl font-semibold leading-snug">
                    {slide.title}
                  </h2>
                  <p className="text-sm mt-3 text-white/70">{slide.description}</p>
                </div>

                {/* CTA BUTTONS BOTTOM CENTER */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">

                  {/* Outline glass button */}
                  <button
                    className="
                      px-6 py-2 rounded-xl text-white text-sm
                      border border-white/40 bg-white/10
                      backdrop-blur-md
                      hover:bg-white/20 hover:border-white/60
                      active:scale-95 transition-all duration-300
                    "
                  >
                    Test drive
                  </button>

                  {/* White button */}
                  <button
                    className="
                      px-6 py-2 rounded-xl text-black text-sm bg-white
                      shadow-[0_2px_10px_rgba(0,0,0,0.25)]
                      hover:bg-gray-100 active:scale-95 transition-all duration-300
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
