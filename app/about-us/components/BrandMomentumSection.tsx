"use client";

import Image from "next/image";
import { FaRegLightbulb, FaRegHeart } from "react-icons/fa";
import { MdOutlineDiamond } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function BrandMomentumSection() {
  const features = [
    {
      title: "Brand Proposition",
      icon: <FaRegLightbulb size={32} />,
    },
    {
      title: "Brand Value",
      icon: <MdOutlineDiamond size={32} />,
    },
    {
      title: "Brand Positioning",
      icon: <HiOutlineLocationMarker size={32} />,
    },
    {
      title: "Brand Mission",
      icon: <FaRegHeart size={32} />,
    },
  ];

  return (
    <section className="relative w-full h-[95vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/carfrontrightside.jpg"
        alt="Brand Earth Background"
        fill
        priority
        className="object-cover  "
      />

      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent z-10" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between px-6 md:px-20 py-16">

        {/* TEXT TOP LEFT */}
        <div className="max-w-xl text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            The momentum of  
            <br />
            Qixinjing is extraordinary
          </h1>
          <p className="text-sm text-white/80 leading-relaxed">
            New scenarios, new products, new services, new heights  
            <br />
            Embark on an extraordinary new era of luxury travel comprehensively
          </p>
        </div>

        {/* BOTTOM ICONS */}
        <div className="
          grid grid-cols-2 md:grid-cols-4 gap-8 
          place-items-center pb-6 md:pb-12
        ">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center gap-4 text-white cursor-pointer
                transition-all duration-300 p-4 rounded-xl
                hover:bg-white/10 hover:backdrop-blur-md
              "
            >
              {/* ICON */}
              <div className="text-white/90 transition-all duration-300 hover:text-white">
                {item.icon}
              </div>

              {/* TITLE */}
              <p className="text-sm md:text-base font-medium text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
