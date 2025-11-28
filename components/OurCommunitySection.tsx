"use client";

import Image from "next/image";
import { FiInstagram } from "react-icons/fi";

const OurCommunitySection = () => {
  const items = [
    {
      id: 1,
      title: "Denza D9",
      desc: "High-performance electric sedan with luxury interior.",
      img: "/assets/images/cardfrontside.webp",
    },
    {
      id: 2,
      title: "Denza D9 Sport",
      desc: "Premium SUV with advanced features and comfort.",
      img: "/assets/images/carsideright.jpg",
    },
    {
      id: 3,
      title: "Denza D9 Eco",
      desc: "Efficient, eco-friendly, and futuristic design.",
      img: "/assets/images/carsideright.jpg",
    },
    {
      id: 4,
      title: "Denza D9 Urban",
      desc: "Compact electric car designed for city lifestyle.",
      img: "/assets/images/cardfrontside.webp",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Our Community</h2>
        <p className="text-gray-600 mt-1">
          See what our passionate drivers are sharing about DENZA.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          max-w-7xl mx-auto px-6 
          flex overflow-x-auto gap-6 pb-4 
          snap-x snap-mandatory 
          sm:grid sm:grid-cols-2 sm:overflow-visible 
          lg:grid-cols-4 no-scrollbar
        "
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[75%] sm:min-w-0
              snap-start
              bg-white rounded-xl overflow-hidden shadow-md 
              transition-all duration-300 ease-in-out
              hover:shadow-xl hover:-translate-y-2 cursor-pointer
            "
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 75vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1 leading-snug">{item.desc}</p>

              <div className="mt-3 text-gray-700">
                <FiInstagram size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCommunitySection;
