import Image from "next/image";

export default function DenzaKeyFeatures({ model = "B5" }) {
    // Dynamic data for each car model
    const data: any = {
        B5: {
            title: "Key Features",
            subtitle: "Discover intelligent innovations designed to elevate every drive",
            features: [
                {
                    title: "The Denza Power Aesthetic Appearance",
                    desc: "Bold, iconic design presence.",
                    image: "/assets/images/cardfrontside.webp",
                },
                {
                    title: "Plug-in Hybrid System",
                    desc: "Efficient hybrid performance.",
                    image: "/assets/images/carside.jpg",
                },
                {
                    title: "Powerful Performance Technology",
                    desc: "Maximum capability across terrains.",
                    image: "/assets/images/carsideright.jpg",
                },
                {
                    title: "Premium Intelligent Cockpit",
                    desc: "Smart and immersive driving experience.",
                    image: "/assets/images/carfrontrightside.jpg",
                },
                {
                    title: "Advanced Dashboard Integration",
                    desc: "Next-generation vehicle control.",
                    image: "/assets/images/cardfrontside.webp",
                },
                {
                    title: "All-Terrain Driving Excellence",
                    desc: "Powerful stability anywhere.",
                    image: "/assets/images/carside.jpg",
                },
            ],
        },

        B8: {
            title: "Key Features",
            subtitle: "Experience luxury, intelligence and performance—refined for every journey",
            features: [
                {
                    title: "Denza B8 Signature Exterior Design",
                    desc: "Premium modern exterior aesthetics.",
                    image: "/assets/images/carside.jpg",
                },
                {
                    title: "High-Efficiency Hybrid Powertrain",
                    desc: "Strong and optimized hybrid performance.",
                    image: "/assets/images/carfrontrightside.jpg",
                },
                {
                    title: "Intelligent Off-Road Capability",
                    desc: "Terrain-adaptive power management.",
                    image: "/assets/images/cardfrontside.webp",
                },
                {
                    title: "Ultra-Wide Smart Cockpit Display",
                    desc: "Panoramic smart driving interface.",
                    image: "/assets/images/carsideright.jpg",
                },
                {
                    title: "360° Smart Assistance System",
                    desc: "Safety enhanced with intelligent support.",
                    image: "/assets/images/carside.webp",
                },
                {
                    title: "Luxury Interior Comfort Experience",
                    desc: "Comfort crafted with premium materials.",
                    image: "/assets/images/carfrontrightside.jpg",
                },
            ],
        },
    };

    const active = data[model];

    return (
        <section className="w-full py-16 px-6 lg:px-20">

            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-2">
                    {active.title}
                </h2>
                <p className="text-sm opacity-80 max-w-2xl mx-auto">
                    {active.subtitle}
                </p>
            </div>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {active.features.map((item: any, i: any) => (
                    <div
                        key={i}
                        className="group relative rounded-2xl overflow-hidden cursor-pointer h-[260px]"
                    >
                        {/* Image */}
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-all duration-500 ease-out
                         group-hover:scale-110 group-hover:blur-sm"
                        />

                        {/* Dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 
                            group-hover:opacity-100 transition-all duration-500" />

                        {/* Hover content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center 
                            text-center opacity-0 group-hover:opacity-100 
                            translate-y-4 group-hover:translate-y-0
                            transition-all duration-500 px-4">
                            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                            <p className="text-white text-sm opacity-90 mt-2">{item.desc}</p>
                        </div>

                        {/* Title shown when NOT hovering */}
                        <p className="absolute bottom-3 left-3 text-white text-sm font-medium 
                          opacity-90 group-hover:opacity-0 transition-opacity duration-300">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
