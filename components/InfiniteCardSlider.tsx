"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

const InfiniteCardSlider = () => {
    const cards = [
        {
            id: 1,
            image: "/cars/car1.jpg",
            title: "Denza Z9GT",
            desc: "High-performance electric sedan with luxury interior. igh-performance electric sedan with luxury interior.igh-performance electric sedan with luxury interior.",
        },
        {
            id: 2,
            image: "/cars/car2.jpg",
            title: "Leopard 5",
            desc: "Premium SUV with advanced capability and comfort. igh-performance electric sedan with luxury interior.igh-performance electric sedan with luxury interior.",
        },
        {
            id: 3,
            image: "/cars/car3.jpg",
            title: "Electric Pro",
            desc: "Efficient, eco-friendly, and futuristic design. igh-performance electric sedan with luxury interior. igh-performance electric sedan with luxury interior.",
        },
        {
            id: 4,
            image: "/cars/car4.jpg",
            title: "Urban Drive",
            desc: "Compact electric car designed for city lifestyle. igh-performance electric sedan with luxury interior. igh-performance electric sedan with luxury interior.",
        },
        {
            id: 4,
            image: "/cars/car4.jpg",
            title: "Urban Drive",
            desc: "Compact electric car designed for city lifestyle. igh-performance electric sedan with luxury interior. igh-performance electric sedan with luxury interior.",
        }, {
            id: 5,
            image: "/cars/car4.jpg",
            title: "Urban Drive",
            desc: "Compact electric car designed for city lifestyle. igh-performance electric sedan with luxury interior. igh-performance electric sedan with luxury interior.",
        }, {
            id: 6,
            image: "/cars/car4.jpg",
            title: "Urban Drive",
            desc: "Compact electric car designed for city lifestyle. igh-performance electric sedan with luxury interior. igh-performance electric sedan with luxury interior.",
        }, {
            id: 7,
            image: "/cars/car4.jpg",
            title: "Urban Drive",
            desc: "Compact electric car designed for city lifestyle. igh-performance electric sedan with luxury interior. igh-performance electric sedan with luxury interior.",
        },
    ];

    return (
        <section className="w-full py-16 bg-white">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                    Explore Our Vehicles
                </h2>
                <p className="text-gray-600 mt-2">
                    Discover the future of mobility with our latest car lineup.
                </p>
            </div>

            {/* Slider */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={4500}
                    loop={true}
                    slidesPerView={1.3}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-10"
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div
                                className="
                  bg-white 
                  overflow-hidden  
                  transition duration-300 ease-in-out
                "
                            >
                                {/* Image */}
                                <div className="h-40 md:h-48 mb-2 w-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Description */}
                                <div className="p-5 rounded-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
                                    <p className="mt-2 text-gray-600 text-sm">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default InfiniteCardSlider;
