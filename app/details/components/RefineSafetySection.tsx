"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function RefineSafetySection() {
  const safetyFeatures = [
    {
      title: "Safe feature 01",
      desc: `One screen dedicated to driving info and media, the other to climate, seat settings,
            and gesture controls.`,
    },
    {
      title: "Safe feature 02",
      desc: `One screen dedicated to driving info and media, the other to climate, seat settings,
            and gesture controls.`,
    },
    {
      title: "Safe feature 03",
      desc: `One screen dedicated to driving info and media, the other to climate, seat settings,
            and gesture controls.`,
    },
    {
      title: "Safe feature 04",
      desc: `One screen dedicated to driving info and media, the other to climate, seat settings,
            and gesture controls.`,
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TOP TITLE */}
        <h2 className="text-3xl font-semibold">Refine Safety</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* CAR BOX */}
        <div className="mt-12 bg-gray-100 rounded-2xl p-10 relative">

          {/* CAR IMAGE */}
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-md h-64">
              <Image
                src="/assets/images/cardfrontside.webp"
                alt="Car Top View"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex justify-center gap-4 mt-8">

            {/* Test drive */}
            <button
              className="
                px-8 py-3 rounded-xl text-sm text-black bg-white
                border border-gray-300 hover:bg-gray-100
                active:scale-95 transition-all duration-300
              "
            >
              Test drive
            </button>

            {/* Configurator */}
            <button
              className="
                px-8 py-3 rounded-xl text-sm text-white bg-black
                hover:bg-gray-800 active:scale-95 
                transition-all duration-300
              "
            >
              Configurator
            </button>
          </div>

          {/* RIGHT SMALL ICONS */}
          <div className="absolute bottom-6 right-6 flex gap-3">

            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition">
              <FiArrowLeft className="text-gray-700" size={18} />
            </button>

            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition">
              <FiArrowRight className="text-gray-700" size={18} />
            </button>

          </div>
        </div>

        {/* SAFETY FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">

          {safetyFeatures.map((item, index) => (
            <div
              key={index}
              className="
                bg-white shadow-sm rounded-xl p-6 border border-gray-100
                hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                text-left
              "
            >
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
