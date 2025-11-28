import Image from "next/image";

const HeroImageSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen flex items-end">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/cardfrontside.webp"
          alt="Hero Car Back"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          priority={false} // lazy load
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Title */}
      <div
        className="
          relative z-10 
          text-white 
          w-full 
          px-6 md:px-12 
          pb-10 md:pb-16 
          text-center md:text-left
        "
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          The Future Starts Here
        </h1>
      </div>
    </section>
  );
};

export default HeroImageSection;
