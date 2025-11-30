export default function DMOSection() {
  return (
    <section
      className="relative w-full h-[600px] md:h-[650px] flex items-center"
      style={{
        backgroundImage: "url('/assets/images/cardfrontside.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-xl pt-10">
          <h2 className="text-white text-5xl font-semibold mb-4 tracking-wide">
            DMO
          </h2>

          <p className="text-gray-200 text-xl font-light mb-8 leading-relaxed">
            Electric off-road pioneering platform
          </p>

          <a
            href="#"
            className="inline-block bg-white text-gray-800 px-8 py-3 rounded-full 
            shadow-md border border-gray-200 hover:bg-gray-100 transition-all duration-200"
          >
            Experience Denza's Technology
          </a>
        </div>
      </div>
    </section>
  );
}
