"use client";

import { useState } from "react";
import Image from "next/image";

export default function BrandSection() {
  const tabs = ["Brand Story", "Brand Logo", "Brand History"];
  const [active, setActive] = useState(0);

  const content = [
    {
      title: "Brand Story",
      text: `Tengshi Automobile® is a technology-led new luxury car brand jointly launched by BYD and Mercedes-Benz, the world champions of new energy vehicles. 
      In 2016, it integrates technology luxury and traditional luxury, and is designed for the world. 
      In 2022, it officially became a wholly-owned brand of BYD and entered a new chapter in the technology leadership of the Tengshi Hybrid.
      
      We believe that in the era of new energy, technology will always be the soul of luxury brands.
      
      As a pioneer in the definition of new luxury technology, Tengshi Automobile has fully integrated its leading new intelligent super hybrid technology and products. It has released a globally distinctive vehicle technology — the "Tengshi Vehicle Intelligent Strategy". Its product matrix now covers the models of D9, N7, Z9GT/Z9 Pro. With products in all categories and a competitive global strategy, the Tengshi Series is equipped with highly intelligent driving assistance systems, creating new luxury and optimal travel while serving the shift of users. The system paying the global market with the version of green life.
      
      In the era of new energy, users need more than just a car. Tengshi Automobile stays true to the voice of users, actively creating a luxury and warming brand, and bringing the desirable new luxury travel experience and sustainable high-end smart life to families around the world.`,
      image: "/assets/images/carside.jpg",
    },
    {
      title: "Brand Logo",
      text: `The Tengshi brand logo represents advanced technology and forward-thinking luxury aesthetics...  In 2016, it integrates technology luxury and traditional luxury, and is designed for the world.  In 2022, it officially became a wholly- owned brand of BYD and entered a new chapter in the technology leadership of the Tengshi Hybrid. We believe that in the era of new energy, technology will always be the soul of luxury brands.  As a pioneer in the definition of new luxury technology, Tengshi Automobile has fully integrated its leading new intelligent super hybrid technology and products.It has released a globally distinctive vehicle technology — the "Tengshi Vehicle Intelligent Strategy".Its product matrix now covers the models of D9, N7, Z9GT / Z9 Pro.With products in all categories and a competitive global strategy, the Tengshi Series is equipped with highly intelligent driving assistance systems, creating new luxury and optimal travel while serving the shift of users.The system paying the global market with the version of green life.`,
      image: "/assets/images/carsideright.jpg",
    },
    {
      title: "Brand History",
      text: `The Tengshi brand logo represents advanced technology and forward-thinking luxury aesthetics...  In 2016, it integrates technology luxury and traditional luxury, and is designed for the world.  In 2022, it officially became a wholly- owned brand of BYD and entered a new chapter in the technology leadership of the Tengshi Hybrid. We believe that in the era of new energy, technology will always be the soul of luxury brands.  As a pioneer in the definition of new luxury technology, Tengshi Automobile has fully integrated its leading new intelligent super hybrid technology and products.It has released a globally distinctive vehicle technology — the "Tengshi Vehicle Intelligent Strategy".Its product matrix now covers the models of D9, N7, Z9GT / Z9 Pro.With products in all categories and a competitive global strategy, the Tengshi Series is equipped with highly intelligent driving assistance systems, creating new luxury and optimal travel while serving the shift of users.The system paying the global market with the version of green life.`,
      image: "/assets/images/carfrontrightside.jpg",
    },
  ];

  const current = content[active];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TABS */}
        <div className="flex justify-center gap-8 mb-12 text-sm font-medium">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                transition-all duration-300 pb-1
                ${active === i ? "text-black border-b-2 border-black font-semibold" : "text-gray-500 hover:text-black"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT TEXT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{current.title}</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
              {current.text}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              priority // Optionally use priority for above-the-fold images
              sizes="(max-width: 768px) 100vw, 50vw" // For better responsive optimization
            />
          </div>

        </div>
      </div>
    </section>
  );
}
