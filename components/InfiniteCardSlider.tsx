"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

const InfiniteCardSlider = () => {
  const cards = [
    {
      id: 1,
      image: "/assets/images/carside.jpg",
      title: "Denza Z9GT",
      desc: "High-performance electric sedan with luxury interior. Stylish and efficient for modern driving.",
    },
    {
      id: 2,
      image: "/assets/images/carsideright.jpg",
      title: "Leopard 5",
      desc: "Premium SUV with advanced capability and comfort. Perfect for urban and off-road adventures.",
    },
    {
      id: 3,
      image: "/assets/images/carfrontrightside.jpg",
      title: "Electric Pro",
      desc: "Efficient, eco-friendly, and futuristic design. Embrace the future of electric mobility.",
    },
    {
      id: 4,
      image: "/assets/images/cardfrontside.webp",
      title: "Urban Drive",
      desc: "Compact electric car designed for city lifestyle. Convenient, stylish, and smart.",
    },
    {
      id: 5,
      image: "/assets/images/carside.jpg",
      title: "Urban Drive 2",
      desc: "Compact electric car designed for city lifestyle. Smart, Stylish, Sleek and efficient .",
    },
    {
      id: 6,
      image: "/assets/images/cardfrontside.webp",
      title: "Urban Drive 3",
      desc: "Compact electric car designed for city lifestyle. Perfect for eco-conscious drivers.",
    },
    {
      id: 7,
      image: "/assets/images/carfrontrightside.jpg",
      title: "Urban Drive 4",
      desc: "Compact electric car designed for city lifestyle. Modern design with advanced features.",
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
          loop
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
              <div className="bg-white overflow-hidden transition duration-300 ease-in-out rounded-lg ">
                {/* Image */}
                <div className="h-48 md:h-56 w-full mb-2 shadow-sm hover:shadow-xl border border-gray-200 rounded-lg overflow-hidden relative hover:-translate-y-1 transition duration-300 ease-in-out">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>

                {/* Description */}
                <div className="p-4 md:p-5 h-full rounded-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
                  <h3 className="text-black font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
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
