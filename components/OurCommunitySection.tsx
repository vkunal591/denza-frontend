"use client";

import Image from "next/image";
import { FiInstagram } from "react-icons/fi";

const OurCommunitySection = () => {
  const items = [
    { id: 1, title: "Denza D9", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/community/img1.jpg" },
    { id: 2, title: "Denza D9", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/community/img1.jpg" },
    { id: 3, title: "Denza D9", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/community/img1.jpg" },
    { id: 4, title: "Denza D9", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/community/img1.jpg" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Our Community</h2>
        <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
