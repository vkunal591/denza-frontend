    export default function FutureDriving() {
  return (
    <section className="py-16 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Experience the Future of Driving
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Schedule your test drive today and discover how intelligent SUV technology 
          redefines comfort, control, and confidence on every road.
        </p>

        {/* Image */}
        <div className="w-full flex justify-center mb-10">
          <img
            src="/assets/images/cardfrontside.webp"
            alt="Driving Car"
            className="rounded-2xl w-full max-w-3xl shadow-lg object-cover"
          />
        </div>

        {/* Button */}
        <div>
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-white text-gray-800 border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200"
          >
            Book A Test Drive
          </a>
        </div>

      </div>
    </section>
  );
}
