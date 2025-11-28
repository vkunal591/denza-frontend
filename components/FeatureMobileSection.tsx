"use client";

import Image from "next/image";

const FeatureMobileSection = () => {
  const cards = [
    {
      id: 1,
      image: "/assets/images/carfront.jpg",
      title: "Denza Z9GT",
      desc: "High-performance electric sedan with luxury interior.",
      button: true,
    },
    {
      id: 2,
      image: "/assets/images/carside.jpg",
      title: "Leopard 5",
      desc: "Premium SUV with advanced capability and comfort.",
    },
    {
      id: 3,
      image: "/assets/images/carback.jpg",
      title: "Electric Pro",
      desc: "Efficient, eco-friendly, and futuristic design.",
    },
    {
      id: 4,
      image: "/assets/images/carfront.jpg",
      title: "Urban Drive",
      desc: "Compact electric car designed for a modern lifestyle.",
      button: true,
    },
  ];

  return (
    <section className="w-full py-16 bg-[#0f0f11] md:hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        {cards.map((card) => (
          <div key={card.id} className="bg-[#0c0c0d] rounded-2xl">
            {/* Outer Card */}
            <div
              className="
                bg-[#0c0c0d] rounded-2xl
                shadow-[0_0_25px_rgba(0,0,0,0.4)]
                hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
                transition duration-300
              "
            >
              {/* Image */}
              <div className="w-full h-56 md:h-64 rounded-xl overflow-hidden mb-4 relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Inner Gradient Wrapper */}
              <div
                className="
                  p-[2px] rounded-2xl 
                  bg-gradient-to-b from-white/40 to-white/5
                  hover:from-white/70 hover:to-white/20
                  transition duration-300
                "
              >
                {/* Inner Card Content */}
                <div
                  className="
                    bg-[#0f0f11] rounded-2xl p-5
                    shadow-[0_0_25px_rgba(0,0,0,0.4)]
                    hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
                    transition duration-300
                  "
                >
                  <h2 className="text-white text-lg font-semibold mb-2">
                    {card.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>

                  {card.button && (
                    <button
                      className="
                        w-full py-3 rounded-lg text-sm
                        bg-white/10 text-white border border-white/20
                        hover:bg-white hover:text-black
                        transition duration-300
                      "
                    >
                      Test Drive
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureMobileSection;
