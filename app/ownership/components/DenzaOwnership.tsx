"use client";
import Image from "next/image";
import { Download } from "lucide-react";

export default function DenzaOwnership() {
  return (
    <section className="relative w-full min-h-screen text-white">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/cardfrontside.webp"
          alt="Denza Background"
          fill
          className="object-cover"
          priority
        />

        {/* TOP DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 px-6 lg:px-16 py-6 flex flex-col items-center text-center">
        
        {/* BACK BUTTON (top-left) */}
        <div className="w-full text-left">
          <button className="text-sm opacity-80 hover:opacity-100">Back</button>
        </div>

        {/* SPACING */}
        <div className="mt-16 lg:mt-24" />

        {/* TITLE */}
        <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
          Your Denza Ownership
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-4xl text-sm lg:text-base leading-relaxed opacity-90 px-4">
          Owning a Denza is more than driving a vehicle—it’s embracing a seamless lifestyle 
          of innovation, luxury, and dedicated support. From comprehensive warranty protection 
          and expert service to effortless connectivity and exclusive care programs, every aspect 
          of Denza ownership is designed to enhance your journey. Our commitment goes beyond the 
          road, ensuring that you experience lasting value, unrivaled convenience, and the confidence 
          that your Denza will perform at its best, every time you drive.
        </p>

        {/* DOWNLOAD BUTTONS */}
        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          
          {/* Button 1 */}
          <button className="flex items-center gap-2 bg-white/90 text-black px-6 py-3 rounded-full hover:bg-white">
            <Download size={18} />
            User Manual Denza B8
          </button>

          {/* Button 2 */}
          <button className="flex items-center gap-2 bg-white/90 text-black px-6 py-3 rounded-full hover:bg-white">
            <Download size={18} />
            User Manual Denza B5
          </button>

        </div>
      </div>
    </section>
  );
}
