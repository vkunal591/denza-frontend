import Image from "next/image";

export default function DenzaAestheticAppearance({ model = "B5" }) {
    const data: any = {
        B5: {
            title: "Power Aesthetic Appearance",
            desc:
                "The Denza B5, with its exterior aesthetics, combines industrial technology with wild muscle, creating a new trend in electric off road driving.",
            image: "/assets/images/cardfrontside.webp",
        },

        B8: {
            title: "Signature Aesthetic Appearance",
            desc:
                "The Denza B8 elevates premium SUV design with a bold stance, refined surfaces, and intelligent industrial aesthetics.",
            image: "/assets/images/carfrontrightside.jpg",
        },
    };

    const active = data[model];

    return (
        <section className="relative w-full h-screen">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Optional gradient (recommended for readability) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-transparent" />
            </div>

            {/* Text Section */}
            <div className="relative z-10 text-center px-6 pt-24">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-3 text-black">
                    {active.title}
                </h2>
                <p className="max-w-3xl mx-auto text-sm opacity-80 leading-relaxed text-black">
                    {active.desc}
                </p>
            </div>
        </section>
    );
}
