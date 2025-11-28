"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

interface Slide {
    id: number;
    title: string;
    description: string;
    image: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Car Design",
        description:
            "Slide into hand-stitched Italian leather seats, set beneath a panoramic electrochromic glass roof. Ambient lighting with 64 colors and precision-machined metal accents surround you.",
        image: "/assets/images/cardfrontside.webp",
    },
    {
        id: 2,
        title: "Interior Luxury",
        description:
            "Experience unmatched refinement with handcrafted surfaces, ambient lighting and dynamic comfort.",
        image: "/assets/images/carsideright.jpg",
    },
    {
        id: 3,
        title: "Performance",
        description:
            "Powered by dual motors delivering breathtaking acceleration with whisper-quiet smoothness.",
        image: "/assets/images/carfrontrightside.jpg",
    },
];

const HeroDesignSlider = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
    const prevSlide = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
    const goToSlide = (i: number) => setIndex(i);

    const current = slides[index];

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-[1]" />

            <div className="relative z-[3] w-full h-full">
                
                <div className="max-w-7xl mx-auto flex flex-col justify-between h-full px-6 lg:px-20 py-12">

                    {/* TOP LEFT TITLE */}
                    <h2 className="text-white text-3xl md:text-4xl font-semibold">
                        {current.title}
                    </h2>

                    {/* CENTER IMAGE */}
                    <div className="flex justify-center items-center mt-4 mb-6 pointer-events-none">
                        <div className="relative w-full max-w-[900px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.id}
                                    initial={{ opacity: 0, y: 20, scale: 1.02 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <Image
                                        src={current.image}
                                        alt={current.title}
                                        width={1400}
                                        height={900}
                                        priority
                                        className="w-full object-contain"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="flex justify-between items-end w-full pb-4">

                        {/* ⭐ HERE IS YOUR EXACT BLOCK ⭐ */}
                        {/* LEFT BUTTONS + PAGINATION */}
                        <div className="flex flex-col gap-5">

                            {/* CTA BUTTONS */}
                            <div className="flex items-center gap-4">

                                {/* Test Drive Button */}
                                <button
                                    className="
                                        px-8 py-3 rounded-xl text-white text-sm tracking-wide
                                        border border-white/40 bg-white/5
                                        backdrop-blur-md
                                        hover:bg-white/10 hover:border-white/60
                                        active:scale-95 
                                        transition-all duration-300
                                    "
                                >
                                    Test drive
                                </button>

                                {/* Configurator Button */}
                                <button
                                    className="
                                        px-8 py-3 rounded-xl text-black text-sm tracking-wide
                                        bg-white shadow-[0_2px_10px_rgba(0,0,0,0.25)]
                                        hover:bg-gray-100
                                        active:scale-95
                                        transition-all duration-300
                                    "
                                >
                                    Configurator
                                </button>

                            </div>

                            {/* PAGINATION BARS */}
                            <div className="flex gap-3 mt-2">
                                {slides.map((_, i) => (
                                    <div
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className="
                                            h-[3px] w-10 rounded-full 
                                            bg-white/20 hover:bg-white/30
                                            cursor-pointer overflow-hidden relative
                                            transition-all duration-300
                                        "
                                    >
                                        {index === i && (
                                            <motion.div
                                                layoutId="active-pagination"
                                                className="absolute inset-0 bg-white rounded-full"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 240,
                                                    damping: 25,
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* RIGHT TEXT DESCRIPTION */}
                        <div className="max-w-md text-right text-white/80 hidden md:block">
                            <p className="text-sm leading-relaxed">{current.description}</p>
                        </div>

                    </div>
                </div>

                {/* NEXT BUTTON */}
                <button
                    onClick={nextSlide}
                    className="
                        absolute right-10 top-1/2 -translate-y-1/2 
                        w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl
                        flex items-center justify-center border border-white/20
                        hover:bg-white/20 transition duration-300
                        z-[20]
                    "
                >
                    <FiArrowRight className="text-white text-xl" />
                </button>

                {/* PREV BUTTON */}
                <button
                    onClick={prevSlide}
                    className="
                        absolute left-10 top-1/2 -translate-y-1/2 
                        w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl
                        flex items-center justify-center border border-white/20
                        hover:bg-white/20 transition duration-300
                        z-[20]
                    "
                >
                    <FiArrowLeft className="text-white text-xl" />
                </button>

            </div>
        </section>
    );
};

export default HeroDesignSlider;
