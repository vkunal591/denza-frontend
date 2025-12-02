"use client";
import { useState } from "react";
import Image from "next/image";

export default function DenzaContactSection() {
  const [tab, setTab] = useState("showroom");

  const showroomData = {
    title: "Showroom",
    location: [
      "Ground Floor",
      "Tornado Tower Dunes Plaza,",
      "Tornado Tower, Majlis Al Taawon St,",
      "Doha Zone 60, Doha",
    ],
    email: "crm@mannai.com.qa",
    phone: "8001808",
    hours: {
      weekdays: "8 am – 8 pm",
      friday: "Closed",
      saturday: "9 am – 7 pm",
    },
  };

  const serviceCenterData = {
    title: "Service Center",
    location: [
      "Street 26, Industrial Area",
      "Building 104, Zone 57, Doha",
      "Bahrain",
    ],
    email: "service@mannai.com.qa",
    phone: "8001808",
    hours: {
      weekdays: "7 am – 6 pm",
      friday: "Closed",
      saturday: "8 am – 2 pm",
    },
  };

  const active = tab === "showroom" ? showroomData : serviceCenterData;

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#03153b]">
      
      {/* LEFT IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-auto">
        <Image
          src="/assets/images/cardfrontside.webp"
          alt="Denza Bahrain"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* RIGHT CONTENT PANEL */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 text-white">

        {/* Back */}
        <button className="text-sm opacity-80 hover:opacity-100 my-4">
          Back
        </button>

        <h2 className="text-4xl lg:text-5xl font-semibold mb-10">Denza Bahrain</h2>

        {/* Tabs */}
        <div className="flex border-b border-white/20 gap-8 mb-6">
          <button
            onClick={() => setTab("showroom")}
            className={`pb-3 text-lg ${
              tab === "showroom"
                ? "border-b-2 border-white"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            Showroom
          </button>
          <button
            onClick={() => setTab("service")}
            className={`pb-3 text-lg ${
              tab === "service"
                ? "border-b-2 border-white"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            Service Center
          </button>
        </div>

        {/* CONTENT BOX */}
        <div className="border border-white/20 p-6 lg:p-8 rounded-lg space-y-5">

          {/* Address */}
          <div>
            {active.location.map((line, i) => (
              <p key={i} className="opacity-80 leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          {/* Email */}
          <div>
            <p className="opacity-80">E: {active.email}</p>
            <p className="opacity-80">Telephone: {active.phone}</p>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold mb-1">WORKING HOURS</h4>

            <p className="opacity-80">
              <strong>Sunday – Thursday:</strong> <br />
              {active.hours.weekdays}
            </p>

            <p className="opacity-80">
              <strong>Friday:</strong> {active.hours.friday}
            </p>

            <p className="opacity-80">
              <strong>Saturday:</strong> <br /> {active.hours.saturday}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
