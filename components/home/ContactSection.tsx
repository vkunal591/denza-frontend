export default function ContactSection() {
  return (
    <section
      className="relative w-full py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/cardfrontside.webp')", // your background image
      }}
    >
      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">

        {/* LEFT SIDE TEXT */}
        <div className="text-black max-w-xl mt-6">
          <h2 className="text-5xl font-semibold mb-4">Contact Us</h2>
          <h3 className="text-xl font-medium mb-3">We’d Love to Hear from You</h3>
          <p className="text-gray-700 text-md leading-relaxed">
            Our experts are available to provide clear answers and reliable assistance, 
            making your experience seamless and worry-free.
          </p>
        </div>

        {/* RIGHT SIDE GLASS FORM */}
        <div className="
          w-full lg:w-[520px] bg-white/30
          backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/40
        ">
          <form className="space-y-5">

            {/* Name */}
            <input
              type="text"
              placeholder="Enter Name*"
              className="
                w-full px-5 py-3 bg-white/40 backdrop-blur-md 
                rounded-full border border-white/50
                outline-none focus:ring-2 focus:ring-gray-300
              "
            />

            {/* Mobile */}
            <input
              type="text"
              placeholder="Enter Mobile Number*"
              className="
                w-full px-5 py-3 bg-white/40 backdrop-blur-md 
                rounded-full border border-white/50
                outline-none focus:ring-2 focus:ring-gray-300
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email*"
              className="
                w-full px-5 py-3 bg-white/40 backdrop-blur-md 
                rounded-full border border-white/50
                outline-none focus:ring-2 focus:ring-gray-300
              "
            />

            {/* Message */}
            <textarea
              rows={3}
              placeholder="Message"
              className="
                w-full px-5 py-3 bg-white/40 backdrop-blur-md 
                rounded-2xl border border-white/50 resize-none
                outline-none focus:ring-2 focus:ring-gray-300
              "
            ></textarea>

            {/* Checkboxes */}
            <div className="text-sm text-gray-800 space-y-3">

              <label className="flex items-start gap-2">
                <input type="checkbox" />
                <span>
                  Subscribe to our newsletter and be the first to receive our
                  latest news and offers.
                </span>
              </label>

              <label className="flex items-start gap-2">
                <input type="checkbox" />
                <span>
                  I consent to share my personal data to be used to receive 
                  all relevant Denza email updates.
                </span>
              </label>

              <p className="text-gray-700 text-sm">
                Please see our Privacy Policy for more information.
              </p>
            </div>

            {/* Submit Button */}
            <button
              className="
                mt-3 w-full lg:w-auto px-10 py-3 bg-white text-gray-800
                rounded-full shadow-md hover:bg-gray-100 transition
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
