"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const SlideSection = () => {
    const cars = [
        {
            id: 1,
            title: "Denza Z9GT",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            badge: "LOREM IPSUM",
            image: "/cars/car1.jpg",
        },
        {
            id: 2,
            title: "Leopard 5",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            badge: "LOREM IPSUM",
            image: "/cars/car2.jpg",
        },
    ];

    return (
        <section className="w-full py-16 bg-[#1f1f1f] text-white">
            {/* Tabs Header */}
            <div className="text-center mb-10 text-gray-300 text-sm md:text-base">
                <span className="text-white font-semibold mx-4 cursor-pointer">
                    Denza Z9GT
                </span>
                <span className="mx-4 cursor-pointer">Leopard 5</span>
            </div>

            {/* Slider */}
            <div className="max-w-7xl mx-auto px-4">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={2}
                    centeredSlides={true}
                    grabCursor={true}
                 
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                    className="pb-10"
                >
                    {cars.map((car) => (
                        <SwiperSlide key={car.id}>
                            <div
                                className="
                  bg-[#2a2a2a] 
                  rounded-2xl overflow-hidden 
                  shadow-xl relative
                  h-[420px] md:h-[450px] 
                  group
                "
                            >
                                {/* Car Image */}
                                <Image
                                    src={car.image}
                                    alt={car.title}
                                    width={700}
                                    height={700}
                                    className="
                    w-full h-full object-cover 
                    transition duration-500 ease-in-out
                    group-hover:scale-105
                  "
                                />

                                {/* Content */}
                                <div
                                    className="
                    absolute top-0 left-0 p-6 md:p-8 
                    w-full h-full flex flex-col justify-between
                  "
                                >
                                    <div className="text-center md:text-left">
                                        <p className="text-[10px] md:text-xs tracking-wider text-gray-300">
                                            {car.badge}
                                        </p>
                                        <h2 className="text-2xl md:text-3xl font-bold mt-2">
                                            {car.title}
                                        </h2>
                                        <p className="text-sm md:text-base mt-2 text-gray-300">
                                            {car.desc}
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div
                                        className="
                      flex flex-col md:flex-row 
                      gap-4 mt-4
                    "
                                    >
                                        {/* Test Drive */}
                                        <button
                                            className="
                        w-full md:w-auto
                        px-5 py-3 md:px-6 md:py-3
                        rounded-xl border border-white
                        bg-black/40 text-white backdrop-blur-sm
                        transition duration-300 ease-in-out
                        hover:bg-white hover:text-black 
                        active:scale-95
                      "
                                        >
                                            Test drive
                                        </button>

                                        {/* Purchase Options */}
                                        <button
                                            className="
                        w-full md:w-auto
                        px-5 py-3 md:px-6 md:py-3
                        rounded-xl bg-white text-black
                        transition duration-300 ease-in-out
                        hover:bg-gray-200 
                        active:scale-95
                      "
                                        >
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
