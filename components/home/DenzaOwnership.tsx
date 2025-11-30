export default function DenzaOwnership() {
  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header Row */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-2">
              Your Denza Ownership
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Experience premium care, exclusive benefits, and complete peace of mind
              with every drive
            </p>
          </div>

          <a
            href="https://denzaqatar.com/service-maintenance/?utm_source=internal&utm_medium=direct"
            target="_blank"
            className="px-8 py-3 bg-white border border-gray-300 rounded-full
              shadow-sm text-gray-800 hover:bg-gray-100 transition"
          >
            Experience Ownership Services
          </a>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1 */}
          <div className="overflow-hidden rounded-3xl group">
            <img
              src="/assets/images/cardfrontside.webp"
              className="w-full h-[380px] object-cover rounded-3xl 
                         transition-transform duration-500 ease-out 
                         group-hover:scale-110"
              alt="ownership 1"
            />
          </div>

          {/* 2 */}
          <div className="overflow-hidden rounded-3xl group">
            <img
              src="/assets/images/carside.jpg"
              className="w-full h-[380px] object-cover rounded-3xl 
                         transition-transform duration-500 ease-out 
                         group-hover:scale-110"
              alt="ownership 2"
            />
          </div>

          {/* 3 */}
          <div className="overflow-hidden rounded-3xl group">
            <img
              src="/assets/images/cardfrontside.webp"
              className="w-full h-[380px] object-cover rounded-3xl 
                         transition-transform duration-500 ease-out 
                         group-hover:scale-110"
              alt="ownership 3"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
