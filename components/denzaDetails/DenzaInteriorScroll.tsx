"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function DenzaInteriorScroll({ model = "B5" }) {
    const data: any = {
        B5: {
            title: "Calm and exquisite interior design",
            desc:
                "Every time you start the car, the shift lever rises gracefully, the transparent crystal buttons gleam, the electric massage seats activate thoughtfully, and a sense of ceremony washes over you.",
            cards: [
                {
                    title: "Ambient Lighting",
                    image: "/assets/images/cardfrontside.webp",
                    desc: "Creates a personalized atmosphere that matches your mood.",
                },
                {
                    title: "Comfortable Seats",
                    image: "/assets/images/carside.jpg",
                    desc: "Designed to provide exceptional comfort and support.",
                },
                {
                    title: "Premium Dashboard",
                    image: "/assets/images/carfrontrightside.jpg",
                    desc: "Smart digital cockpit with elegant finishing.",
                },
            ],
            finalImage: "/assets/images/carside.jpg",
        },

        B8: {
            title: "Luxury Intelligent Interior",
            desc:
                "Sophisticated cabin layout, exquisite materials and immersive intelligent technology create a spacious and refined interior experience.",
            cards: [
                {
                    title: "Wide Smart Display",
                    image: "/assets/images/b8-feature-4.webp",
                    desc: "Immersive panoramic digital experience.",
                },
                {
                    title: "Premium Seats",
                    image: "/assets/images/b8-feature-6.webp",
                    desc: "Luxury seating comfort crafted with top-grade materials.",
                },
                {
                    title: "Intelligent Console",
                    image: "/assets/images/b8-feature-5.webp",
                    desc: "Advanced cockpit control system.",
                },
            ],
            finalImage: "/assets/images/b8-feature-2.webp",
        },
    };

    const active = data[model];

    const containerRef = useRef(null);
    const horizontalRef = useRef(null);
    const [maxScroll, setMaxScroll] = useState(0);

    // Calculate how far horizontal scroll should run
    useEffect(() => {
        const section = containerRef.current;
        const horizontal: any = horizontalRef.current;

        if (section && horizontal) {
            const totalWidth = horizontal.scrollWidth;
            const windowWidth = window.innerWidth;
            setMaxScroll(totalWidth - windowWidth);
        }
    }, [model]);

    // Sync vertical scroll → horizontal scroll
    useEffect(() => {
        const handleScroll = () => {
            const section: any = containerRef.current;
            const horizontal: any = horizontalRef.current;

            if (!section || !horizontal) return;

            const rect = section.getBoundingClientRect();
            const start = rect.top;
            const end = rect.bottom - window.innerHeight;

            if (start <= 0 && end >= 0) {
                const progress = -start / (rect.height - window.innerHeight);
                const scrollX = progress * maxScroll;
                horizontal.style.transform = `translateX(-${scrollX}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [maxScroll]);

    return (
        <section ref={containerRef} className="relative w-full min-h-[300vh] bg-white">

            {/* STICKY TITLE + DESCRIPTION */}
            <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md py-10 px-6 lg:px-20">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4">{active.title}</h2>
                <p className="max-w-xl text-sm opacity-80">{active.desc}</p>
            </div>

            {/* HORIZONTAL SCROLL WRAPPER */}
            <div className="sticky top-32 w-full overflow-hidden h-[350px] lg:h-[420px] bg-transparent z-10">
                <div
                    ref={horizontalRef}
                    className="flex gap-10 transition-transform duration-300 will-change-transform"
                >
                    {active.cards.map((item: any, i: any) => (
                        <div
                            key={i}
                            className="min-w-[420px] lg:min-w-[600px] rounded-2xl overflow-hidden relative"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />

                            <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-xs opacity-90">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FINAL EXPANDING IMAGE */}
            <div className="mt-[60vh] w-full h-screen relative">
                <Image
                    src={active.finalImage}
                    alt="final interior"
                    fill
                    className="object-cover rounded-xl"
                />
            </div>
        </section>
    );
}
