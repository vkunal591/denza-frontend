"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CarColorOption {
  label: string;
  value: string;
  thumbnail: string;
  image: string;
}

interface WheelOption {
  label: string;
  value: string;
  thumbnail: string;
  image: string;
}

const CarConfigurator = () => {
  // ---- EXTERIOR COLORS ----
  const colors: CarColorOption[] = [
    { label: "White", value: "white", thumbnail: "/assets/images/cardfrontside.webp", image: "/assets/images/cardfrontside.webp" },
    { label: "Blue", value: "blue", thumbnail: "/assets/images/carfrontrightside.jpg", image: "/assets/images/carside.jpg" },
    { label: "Grey", value: "grey", thumbnail: "/assets/images/carside.jpg", image: "/assets/images/carfrontrightside.jpg" },
    { label: "Black", value: "black", thumbnail: "/assets/images/carsideright.jpg", image: "/assets/images/carsideright.jpg" },
  ];

  // ---- WHEELS ----
  const wheels: WheelOption[] = [
    { label: "Wheel A", value: "wheelA", thumbnail: "/assets/images/cardfrontside.webp", image: "/assets/images/cardfrontside.webp" },
    { label: "Wheel B", value: "wheelB", thumbnail: "/assets/images/cardfrontside.webp", image: "/assets/images/cardfrontside.webp" },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedWheel, setSelectedWheel] = useState(wheels[0]);
  const [fade, setFade] = useState(false);

  // ---- GALLERY / 360° TOGGLE ----
  const [mode, setMode] = useState<"gallery" | "360">("gallery");

  const totalFrames = 36;
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    let interval: any;

    if (mode === "360") {
      interval = setInterval(() => {
        setFrame((prev) => (prev >= totalFrames ? 1 : prev + 1));
      }, 60);
    }

    return () => clearInterval(interval);
  }, [mode]);

  const applyFade = () => {
    setFade(true);
    setTimeout(() => setFade(false), 400);
  };

  const handleColorChange = (color: CarColorOption) => {
    applyFade();
    setSelectedColor(color);
  };

  const handleWheelChange = (wheel: WheelOption) => {
    applyFade();
    setSelectedWheel(wheel);
  };

  return (
    <section className="w-full py-10 bg-[#f4f6f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* CAR IMAGE AREA */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl h-screen flex items-center">
            <div className={`transition-opacity duration-500 ease-in-out w-full ${fade ? "opacity-0" : "opacity-100"}`}>
              {mode === "gallery" ? (
                <Image
                  src={selectedColor.image}
                  alt="Car"
                  width={1400}
                  height={900}
                  priority
                  className="w-full h-auto object-contain"
                />
              ) : (
                <Image
                  src={`/360/frame-${frame}.png`}
                  alt="360 View"
                  width={1400}
                  height={900}
                  priority
                  className="w-full h-auto object-contain"
                />
              )}
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-10 flex flex-wrap items-start justify-between">

          {/* COLOR + WHEELS */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

            {/* COLORS */}
            <div className="bg-white/80 p-6 backdrop-blur rounded-lg shadow">
              <p className="font-semibold text-sm mb-2">Exterior Color</p>

              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => handleColorChange(c)}
                    className={`w-10 h-10 rounded-full border-2 transition ${selectedColor.value === c.value
                      ? "border-black scale-110"
                      : "border-gray-300"
                      }`}
                  >
                    <Image
                      src={c.thumbnail}
                      alt={c.label}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* WHEELS */}
            <div className="bg-white/80 p-6 backdrop-blur rounded-lg shadow">
              <p className="font-semibold text-sm mb-2">Wheels</p>

              <div className="flex gap-3">
                {wheels.map((w) => (
                  <button
                    key={w.value}
                    onClick={() => handleWheelChange(w)}
                    className={`p-1 rounded-full border transition ${selectedWheel.value === w.value
                      ? "border-black scale-105"
                      : "border-gray-300"
                      }`}
                  >
                    <Image
                      src={w.thumbnail}
                      alt={w.label}
                      width={50}
                      height={50}
                      className="rounded-lg w-10 h-10 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* GALLERY & 360° TOGGLE BUTTONS */}
          <div className="flex items-center mt-6 lg:mt-0">

            <button
              onClick={() => setMode("gallery")}
              className={`
                px-6 py-3 border border-black bg-white 
                rounded-l-lg transition active:scale-95
                ${mode === "gallery" ? "bg-black text-white" : "hover:bg-gray-200 text-black"}
              `}
            >
              Gallery
            </button>

            <button
              onClick={() => setMode("360")}
              className={`
                px-6 py-3 border border-black bg-white 
                rounded-r-lg transition active:scale-95 border-l-0
                ${mode === "360" ? "bg-black text-white" : "hover:bg-gray-200 text-black"}
              `}
            >
              360° View
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CarConfigurator;
