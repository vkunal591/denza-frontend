"use client"
import { useState } from "react";

export default function ChooseYourDenza() {
  const [transformStyle, setTransformStyle] = useState<any>({});

  const handleMouseMove = (e: any, id: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const zone = Math.floor((x / rect.width) * 5) + 1; // 1 to 5 zones

    let scale = 1;
    let rotate = 0;

    // zone-based effect
    switch (zone) {
      case 1:
        scale = 1.08;
        rotate = -6;
        break;
      case 2:
        scale = 1.05;
        rotate = -3;
        break;
      case 3:
        scale = 1.03;
        rotate = 0;
        break;
      case 4:
        scale = 1.05;
        rotate = 3;
        break;
      case 5:
        scale = 1.08;
        rotate = 6;
        break;
    }

    setTransformStyle((prev: any) => ({
      ...prev,
      [id]: `perspective(900px) rotateY(${rotate}deg) scale(${scale})`,
    }));
  };

  const handleMouseLeave = (id: any) => {
    setTransformStyle((prev: any) => ({
      ...prev,
      [id]: "perspective(900px) rotateY(0deg) scale(1)",
    }));
  };

  return (
    <section className="py-12 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h3 className="text-4xl font-bold mb-3">Choose your Denza</h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Find your perfect match—whether it's the versatile Denza B5 or the powerful Denza B8
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">

        {/* ---------- DENZA B5 ---------- */}
        <div
          className="relative w-[500px] h-[320px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 ease-out"
          style={{
            backgroundImage: "url('/assets/images/carside.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: transformStyle["b5"],
            transition: "transform 0.15s ease-out",
          }}
          onMouseMove={(e) => handleMouseMove(e, "b5")}
          onMouseLeave={() => handleMouseLeave("b5")}
        >
          <div className="absolute inset-0 bg-black/20"></div>

          <h3 className="absolute top-5 left-6 text-white text-3xl font-semibold drop-shadow-xl">
            Denza B5
          </h3>

          <a
            href="https://denzaqatar.com/b5/"
            target="_blank"
            className="absolute bottom-6 left-6 bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg"
          >
            Explore DENZA B5
          </a>
        </div>

        {/* ---------- DENZA B8 ---------- */}
        <div
          className="relative w-[500px] h-[320px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 ease-out"
          style={{
            backgroundImage: "url('/assets/images/cardfrontside.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: transformStyle["b8"],
            transition: "transform 0.15s ease-out",
          }}
          onMouseMove={(e) => handleMouseMove(e, "b8")}
          onMouseLeave={() => handleMouseLeave("b8")}
        >
          <div className="absolute inset-0 bg-black/25"></div>

          <h3 className="absolute top-5 left-6 text-white text-3xl font-semibold drop-shadow-xl">
            Denza B8
          </h3>

          <a
            href="https://denzaqatar.com/b8/"
            target="_blank"
            className="absolute bottom-6 left-6 bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg"
          >
            Explore DENZA B8
          </a>
        </div>

      </div>
    </section>
  );
}
