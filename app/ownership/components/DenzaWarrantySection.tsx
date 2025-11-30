"use client";
import Image from "next/image";

export default function DenzaWarrantySection({ img }: { img: string }) {
    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between text-white">
            {/* CAR IMAGE */}
            <Image
                src={img || "/assets/images/cardfrontside.webp"}
                alt="Denza Car"
                width={900}
                height={600}
                className="object-cover w-full h-full absolute "
                priority
            />
            <div className=" w-full h-full z-10 p-4 lg:p-16 ">
                {/* LEFT TEXT SECTION */}
                <div className="w-full lg:w-[45%] z-10 mt-10 lg:mt-0">
                    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        Redefining the
                        <br />
                        Privilege of Ownership
                    </h1>
                </div>



                {/* RIGHT FLOATING CARD */}
                <div className="absolute right-6 lg:right-16 top-[55%] -translate-y-1/2 w-[90%] lg:w-[420px] bg-[#0c1f47] text-white px-8 py-10 rounded-3xl shadow-2xl">

                    {/* Title */}
                    <h3 className="text-sm font-medium opacity-90 mb-2">
                        Warranty
                    </h3>

                    {/* Heading */}
                    <h2 className="text-xl font-semibold leading-snug mb-4">
                        Comprehensive protection for every journey
                    </h2>

                    {/* Description */}
                    <p className="text-sm opacity-90 leading-relaxed mb-8">
                        Drive with confidence knowing your Denza B5 is backed by a comprehensive
                        warranty designed to protect your journey. Our coverage ensures peace of
                        mind with expert care, genuine parts, and dedicated support whenever you
                        need it—because true luxury means worry-free ownership.
                    </p>

                    {/* Button */}
                    <button className="w-full bg-white/90 hover:bg-white text-black font-medium py-3 px-4 rounded-full transition">
                        Explore Warranty
                    </button>
                </div>

            </div>
        </section>
    );
}
