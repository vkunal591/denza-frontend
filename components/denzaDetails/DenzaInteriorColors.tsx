"use client";
import { useState } from "react";
import Image from "next/image";

export default function DenzaInteriorColors({ model = "B5" }) {
    const data: any = {
        B5: {
            title: "Interior Colors",
            desc:
                "Color combinations inspired by mountains and seas create a comfortable and new experience",

            colors: [
                {
                    name: "Brown",
                    hex: "#b59771",
                    image: "/assets/images/cardfrontside.webp",
                },
                {
                    name: "Black",
                    hex: "#0d0d0d",
                    image: "/assets/images/carfrontrightside.jpg",
                },
            ],
        },

        B8: {
            title: "Interior Colors",
            desc:
                "Elegant interior tones crafted for premium aesthetics and comfort",

            colors: [
                {
                    name: "Sand Beige",
                    hex: "#d6c2a3",
                    image: "/assets/interior/b8-beige.webp",
                },
                {
                    name: "Jet Black",
                    hex: "#050505",
                    image: "/assets/interior/b8-black.webp",
                },
            ],
        },
    };

    const active = data[model];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* BACKGROUND IMAGE (transitions on change) */}
            <div className="absolute inset-0 transition-all duration-700 ease-in-out">
                <Image
                    key={active.colors[activeIndex].image}
                    src={active.colors[activeIndex].image}
                    alt={active.colors[activeIndex].name}
                    fill
                    className="object-cover transition-opacity duration-700"
                    priority
                />
            </div>

            {/* GRADIENT OVERLAY (bottom fade) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            {/* TEXT LEFT BOTTOM */}
            <div className="absolute bottom-20 left-6 lg:left-16 text-white">
                <p className="text-sm opacity-80 max-w-lg mb-2">
                    {active.desc}
                </p>

                <h2 className="text-3xl lg:text-4xl font-semibold">
                    {active.title}
                </h2>
            </div>

            {/* COLOR SELECTOR RIGHT BOTTOM */}
            <div className="absolute bottom-20 right-6 lg:right-16 flex gap-6">
                {active.colors.map((color: any, i: any) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center 
                        transition-all duration-300 ${activeIndex === i ? "border-white scale-110" : "border-white/40"
                            }`}
                    >
                        <span
                            className="w-8 h-8 rounded-full block"
                            style={{ backgroundColor: color.hex }}
                        />
                    </button>
                ))}
            </div>

            {/* ACTIVE COLOR NAME — centered under selector */}
            <div className="absolute bottom-10 right-0 left-0 text-center text-white text-sm font-medium">
                {active.colors[activeIndex].name}
            </div>
        </section>
    );
}
