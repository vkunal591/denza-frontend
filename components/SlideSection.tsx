"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const SlideSection = () => {
  const [activeTab, setActiveTab] = useState("Denza Z9GT");

  const cars = [
    {
      id: 1,
      model: "Denza Z9GT",
      title: "Denza Z9GT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      badge: "LOREM IPSUM",
      image: "/assets/images/cardfrontside.webp",
    },
    {
      id: 5,
      model: "Denza Z9GT",
      title: "Leopard 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      badge: "LOREM IPSUM",
      image: "/assets/images/carsideright.jpg",
    },
    {
      id: 2,
      model: "Leopard 5",
      title: "Leopard 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      badge: "LOREM IPSUM",
      image: "/assets/images/carfrontrightside.jpg",
    },
    {
      id: 3,
      model: "Leopard 5",
      title: "Leopard 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      badge: "LOREM IPSUM",
      image: "/assets/images/carsideright.jpg",
    },
    {
      id: 4,
      model: "Leopard 5",
      title: "Leopard 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      badge: "LOREM IPSUM",
      image: "/assets/images/carside.jpg",
    },
  ];

  // Filter cars based on selected tab
  const filteredCars = cars.filter((car) => car.model === activeTab);

  return (
    <section className="w-full py-16 bg-[#1f1f1f] text-white">

      {/* Tabs Header */}
      <div className="text-center mb-10 text-gray-300 text-sm md:text-base flex justify-center gap-6">

        {/* TAB 1 */}
        <span
          className={`cursor-pointer px-3 pb-1 
            ${activeTab === "Denza Z9GT" ? "text-white border-b-2 border-white" : ""}
          `}
          onClick={() => setActiveTab("Denza Z9GT")}
        >
          Denza Z9GT
        </span>

        {/* TAB 2 */}
        <span
          className={`cursor-pointer px-3 pb-1 
            ${activeTab === "Leopard 5" ? "text-white border-b-2 border-white" : ""}
          `}
          onClick={() => setActiveTab("Leopard 5")}
        >
          Leopard 5
        </span>

      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          key={activeTab} // Forces Swiper to refresh when tab changes
          modules={[Navigation]}
          slidesPerView={2}
          centeredSlides
          grabCursor
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-10"
        >
          {filteredCars.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-xl relative group h-[450px] md:h-[520px]">

                {/* Car Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="absolute top-0 left-0 p-6 md:p-8 w-full h-full flex flex-col justify-between">
                  <div className="text-center md:text-left">
                    <p className="text-[10px] md:text-xs tracking-wider text-gray-300">{car.badge}</p>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">{car.title}</h2>
                    <p className="text-sm md:text-base mt-2 text-gray-300">{car.desc}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <button className="w-full px-5 py-3 rounded-xl border border-white bg-black/40 text-white backdrop-blur-sm hover:bg-white hover:text-black transition">
                      Test drive
                    </button>

                    <button className="w-full px-5 py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition">
                      Purchase options
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default SlideSection;
