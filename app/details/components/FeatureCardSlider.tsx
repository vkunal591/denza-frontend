"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const features = [
  {
    title: "Super dmi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    image: "/assets/images/cardfrontside.webp",
  },
  {
    title: "Super dmi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    image: "/assets/images/carfrontrightside.jpg",
  },
  {
    title: "E-platform 3.0",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    image: "/assets/images/carside.jpg",
  },
  {
    title: "8-in-1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    image: "/assets/images/carsideright.jpg",
  },
  {
    title: "Next Gen Motor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    image: "/assets/images/cardfrontside.webp",
  },
];

export default function FeatureCardSlider() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  bg-white border border-gray-200 rounded-xl shadow-sm
                  hover:shadow-lg transition-all duration-300 
                  hover:-translate-y-1 cursor-pointer h-full flex flex-col
                "
              >
                {/* IMAGE SECTION */}
                <div className="relative w-full h-52 p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <button
                    className="
                      mt-auto px-4 py-2 text-sm rounded-lg border border-gray-300 
                      hover:bg-gray-100 active:scale-95 transition-all duration-300
                    "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
