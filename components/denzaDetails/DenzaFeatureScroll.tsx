"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function DenzaScrollFeatures({ model = "B5" }) {
    const data: any = {
        B5: [
            {
                title: "Tough Outline of the Vehicle",
                desc: "Bold silhouette blends strength & sophistication with refined durability.",
                image: "/assets/images/cardfrontside.webp",
            },
            {
                title: "All-Terrain Driving Mastery",
                desc: "Confident performance across any surface or environment.",
                image: "/assets/images/carside.jpg",
            },
            {
                title: "Premium Comfort Cabin",
                desc: "Ergonomic seating and intelligent layout for unmatched comfort.",
                image: "/assets/images/carsideright.jpg",
            },
            {
                title: "Smart Digital Cockpit",
                desc: "High-resolution display system with intuitive interaction.",
                image: "/assets/images/cardfrontside.webp",
            },
        ],

        B8: [
            {
                title: "Elegant Exterior Stance",
                desc: "Refined lines and sophisticated proportions define modern luxury.",
                image: "/assets/images/b8-feature-1.webp",
            },
            {
                title: "Hybrid Power Evolution",
                desc: "Next-gen intelligent hybrid performance for effortless strength.",
                image: "/assets/images/b8-feature-2.webp",
            },
            {
                title: "Immersive Wide Cabin",
                desc: "Expansive interior space engineered for comfort and presence.",
                image: "/assets/images/b8-feature-3.webp",
            },
            {
                title: "360° Smart Assistance",
                desc: "Intelligent monitoring system for enhanced safety and awareness.",
                image: "/assets/images/b8-feature-4.webp",
            },
        ],
    };

    const features = data[model];
    const sectionRef = useRef(null);
    const imageRefs: any = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // Observe each image to change text
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e: any) => {
                    if (e.isIntersecting) {
                        const idx = Number(e.target.dataset.index);
                        setActiveIndex(idx);
                    }
                });
            },
            {
                root: null,
                threshold: 0.6, // detect only when big portion visible
            }
        );

        imageRefs.current.forEach((el: any) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-20 relative">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20">

                {/* LEFT FIXED CONTENT */}
                <div className="sticky top-32 h-fit">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                        {features[activeIndex].title}
                    </h2>
                    <p className="text-sm lg:text-base text-black/80 max-w-md">
                        {features[activeIndex].desc}
                    </p>
                </div>

                {/* RIGHT SCROLLING IMAGES */}
                <div className="space-y-4">
                    {features.map((item: any, i: any) => (
                        <div
                            key={i}
                            data-index={i}
                            ref={(el: any) => (imageRefs.current[i] = el)}
                            className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
