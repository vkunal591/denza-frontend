import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/assets/images/cardfrontside.webp"
        alt="hero image"
        fill
        priority={false}          // lazy loads by default
        className="object-cover"
        placeholder="empty"       // or use blurDataURL for better quality
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="
          relative z-10 h-full 
          flex flex-col justify-center 
          px-6 md:px-20
          text-white
        "
      >
        <div className="
            mt-auto mb-14 md:mt-0 md:mb-0 md:max-w-xl
            flex flex-col md:justify-center
            text-center md:text-left
          "
        >

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The Future of Electric Mobility
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Experience unmatched performance, luxury, and efficiency with Denza.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6">

            <button
              className="
                w-full md:w-auto
                border border-white
                bg-black/40
                backdrop-blur-sm
                px-6 py-3 rounded-xl text-white
                transition duration-300 ease-in-out
                hover:bg-white hover:text-black
                active:scale-95
              "
            >
              Configure
            </button>

            <button
              className="
                w-full md:w-auto
                bg-white text-black 
                px-6 py-3 rounded-xl
                transition duration-300 ease-in-out
                hover:bg-gray-200
                active:scale-95
              "
            >
              Test Drive
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
