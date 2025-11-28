"use client";

import Image from "next/image";

export default function CarSpecsSection() {
  const specs = [
    {
      value: "1000",
      unit: "km",
      description: "Acceleration 0–62 mph (0–100 km/h) with Sport Chrono Package",
    },
    {
      value: "6.9",
      unit: "secs",
      description: "Acceleration 0–62 mph (0–100 km/h) with Sport Chrono Package",
    },
    {
      value: "93",
      unit: "miles",
      description: "Acceleration 0–62 mph (0–100 km/h) with Sport Chrono Package",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* WRAPPER */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT — SPECIFICATIONS */}
          <div className="space-y-12">
            {specs.map((spec, index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-4xl font-semibold text-black flex items-baseline gap-2">
                  {spec.value}
                  <span className="text-lg text-gray-500">{spec.unit}</span>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT — IMAGE */}
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-xl">
              <Image
                src="/cars/z9gt-silver.png"
                alt="Denza Car"
                width={900}
                height={600}
                priority
                className="object-contain w-full"
              />
            </div>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-6 mt-14">

          {/* Full Specs Button */}
          <button
            className="
              px-6 py-3 rounded-xl border border-gray-400 text-sm
              text-black bg-white
              hover:bg-gray-100
              active:scale-95 transition-all duration-300
            "
          >
            Full Specifications
          </button>

          {/* Test Drive Button */}
          <button
            className="
              px-6 py-3 rounded-xl border border-gray-400 text-sm
              text-black bg-white
              hover:bg-gray-100
              active:scale-95 transition-all duration-300
            "
          >
            Test drive
          </button>

          {/* Configurator Button (Black) */}
          <button
            className="
              px-6 py-3 rounded-xl text-sm text-white
              bg-black hover:bg-gray-800
              active:scale-95 transition-all duration-300
            "
          >
            Configurator
          </button>
        </div>

      </div>
    </section>
  );
}
