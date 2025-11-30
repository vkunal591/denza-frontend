import Image from "next/image";

export default function DenzaIntro({ model = "B5" }) {
  // Dynamic data for both versions
  const data: any = {
    B5: {
      title: "Denza B5",
      subtitle:
        "Elevating the drive with refined aesthetics and intelligent plug-in hybrid power.",
      heroImage: "/assets/images/cardfrontside.webp",
      specs: [
        { value: "31.8", unit: "kwh", label: "Battery Capacity" },
        { value: "780", unit: "km", label: "WLTP Combine Range (80km EV range)" },
        { value: "425", unit: "kw", label: "Comprehensive Power" },
        { value: "4.8", unit: "s", label: "0 - 100km/h" },
        { value: "1.5", unit: "T", label: "Engine" },
      ],
    },

    B8: {
      title: "Denza B8",
      subtitle:
        "Power meets elegance with advanced hybrid performance and future-forward design.",
      heroImage: "/assets/images/cardfrontside.webp",
      specs: [
        { value: "40", unit: "kwh", label: "Battery Capacity" },
        { value: "900", unit: "km", label: "WLTP Combine Range" },
        { value: "500", unit: "kw", label: "Comprehensive Power" },
        { value: "4.5", unit: "s", label: "0 - 100km/h" },
        { value: "2.0", unit: "T", label: "Engine" },
      ],
    },
  };

  const active = data[model];

  return (
    <section className="relative w-full">

      {/* HERO IMAGE */}
      <div className="relative w-full h-[80vh] lg:h-[90vh]">
        <Image
          src={active.heroImage}
          alt={active.title}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 text-white text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            {active.title}
          </h1>

          <p className="max-w-2xl text-sm lg:text-base leading-relaxed opacity-90">
            {active.subtitle}
          </p>
        </div>
      </div>

      {/* SPECS BAR */}
      <div className="w-full bg-[#001E52] text-white py-6 px-4 lg:px-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {active.specs.map((item: any, index: any) => (
          <div key={index}>
            <h2 className="text-3xl font-semibold">
              {item.value} <span className="text-sm">{item.unit}</span>
            </h2>
            <p className="text-xs opacity-80 mt-1">{item.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
