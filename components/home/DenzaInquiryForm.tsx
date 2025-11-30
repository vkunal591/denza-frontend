"use client";
import Image from "next/image";
import { useState } from "react";

export default function DenzaInquiryForm() {
  const [agree, setAgree] = useState(false);

  return (
    <section className="relative w-full min-h-screen">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/cardfrontside.webp"
          alt="Denza Car"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row justify-between px-6 lg:px-16 py-12">
        
        {/* LEFT TEXT SECTION */}
        <div className="text-white w-full lg:w-1/2 mt-10 lg:mt-20">
          <button className="text-sm opacity-80 mb-6 hover:opacity-100">
            Back
          </button>

          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            Inquire Us
          </h1>

          <p className="text-lg opacity-90 mb-2">
            Your Direct Access to Denza
          </p>

          <p className="text-sm opacity-80 leading-relaxed max-w-md">
            Our advisors are committed to delivering precise, professional, and timely
            assistance.
          </p>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full lg:w-[55%] mt-10 lg:mt-0">
          <div className="bg-white/20 backdrop-blur-xl p-8 lg:p-12 rounded-2xl border border-white/20 shadow-xl">
            
            {/* INPUTS */}
            <div className="space-y-6">

              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full bg-white/30 backdrop-blur-md rounded-full py-3 px-5 text-white placeholder-white/70 outline-none"
              />

              {/* Mobile + Email */}
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter Mobile Number*"
                  className="flex-1 bg-white/30 rounded-full py-3 px-5 text-white placeholder-white/70 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 bg-white/30 rounded-full py-3 px-5 text-white placeholder-white/70 outline-none"
                />
              </div>

              {/* Message */}
              <input
                type="text"
                placeholder="Message"
                className="w-full bg-white/30 rounded-full py-3 px-5 text-white placeholder-white/70 outline-none"
              />

              <p className="text-white text-xs opacity-90">*Required</p>

              {/* CHECKBOX */}
              <label className="flex items-start gap-3 text-white text-sm opacity-90 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  I consent to share my personal data to be used to receive all relevant
                  Denza email updates.
                </span>
              </label>

              <p className="text-white text-xs opacity-70">
                Please see our Privacy Policy for more information.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col lg:flex-row justify-between items-center pt-4 gap-4">
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-white/80 hover:bg-white text-black rounded-full">
                    Contact Us
                  </button>
                  <button className="px-6 py-2 bg-white/80 hover:bg-white text-black rounded-full">
                    Email Us
                  </button>
                </div>

                <button className="px-10 py-2 bg-white/90 hover:bg-white text-black rounded-full">
                  Submit
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
