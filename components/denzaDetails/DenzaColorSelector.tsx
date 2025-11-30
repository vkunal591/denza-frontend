"use client";
import { useState } from "react";
import Image from "next/image";

export default function DenzaColorSelector({ model = "B5" }) {
    const data: any = {
        B5: {
            title: "A Spectrum of Style: Colors That Define Every Drive",
            desc:
                "Color matching inspired by nature creates a new experience of comfortable travel",
            colors: [
                {
                    name: "Donomiti Green",
                    hex: "#d4decf",
                    image: "/assets/images/carside.jpg",
                },
                {
                    name: "Arctic Blue",
                    hex: "#a9bbc7",
                    image: "/assets/images/cardfrontside.webp",
                },
                {
                    name: "Pearl White",
                    hex: "#e9e9e9",
                    image: "/assets/images/carfrontrightside.jpg",
                },
                {
                    name: "Shadow Black",
                    hex: "#000000",
                    image: "/assets/images/carsideright.jpg",
                },
            ],
        },

        B8: {
            title: "A Spectrum of Style: Colors That Define Every Drive",
            desc:
                "Carefully curated exterior colors inspired by elegance and modern aesthetics.",
            colors: [
                {
                    name: "Galaxy Grey",
                    hex: "#73787e",
                    image: "/assets/colors/cardfrontside.webp",
                },
                {
                    name: "Sky Blue",
                    hex: "#9ec2d7",
                    image: "/assets/colors/carside.jpg",
                },
                {
                    name: "Diamond White",
                    hex: "#f4f4f4",
                    image: "/assets/colors/carsiderigh.jpg",
                },
                {
                    name: "Obsidian Black",
                    hex: "#0a0a0a",
                    image: "/assets/colors/cardfrontrightside.jpg",
                },
            ],
        },
    };

    const active = data[model];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* FULLSCREEN BACKGROUND WITH SMOOTH FADE */}
            <div className="absolute inset-0">
                <Image
                    key={active.colors[activeIndex].image} // 👈 important for fade animation
                    src={active.colors[activeIndex].image}
                    alt={active.colors[activeIndex].name}
                    fill
                    priority
                    className="object-cover transition-opacity duration-700 opacity-100 animate-fade"
                />
            </div>

            {/* CONTENT OVERLAY */}
            <div className="relative z-10 h-full w-full flex flex-col justify-between py-10 px-6 lg:px-20">

                <div>
                    {/* LEFT TEXT */}
                    <h4 className="text-white text-4xl mb-2 max-w-xs opacity-90">
                        {active.title}
                    </h4>
                    {/* LEFT TEXT */}
                    <p className="text-white text-sm max-w-xs opacity-90">
                        {active.desc}
                    </p>
                </div>

                {/* COLOR SELECTOR BOTTOM CENTER */}
                <div className="flex flex-col items-center pb-6">
                    {/* Color Buttons */}
                    <div className="flex justify-center gap-6 mb-4">
                        {active.colors.map((c: any, i: any) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                  transition-all duration-300 ${activeIndex === i ? "border-white scale-110" : "border-white/30"
                                    }`}
                            >
                                <span
                                    className="w-7 h-7 rounded-full block"
                                    style={{ backgroundColor: c.hex }}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Active Color Name */}
                    <div className="text-white text-sm font-medium opacity-95">
                        {active.colors[activeIndex].name}
                    </div>
                </div>
            </div>

            {/* Fade Animation */}
            <style>{`
        .animate-fade {
          animation: fadeEffect 0.6s ease-in-out;
        }
        @keyframes fadeEffect {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </section>
    );
}
