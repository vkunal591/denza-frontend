"use client";
import Image from "next/image";
import DenzaOwnership from "./components/DenzaOwnership";
import DenzaWarrantySection from "./components/DenzaWarrantySection";

export default function page() {
    return (
        <div className="relative">
            <Image
                src={"/assets/images/cardfrontside.webp"}
                alt="Denza Car"
                width={900}
                height={600}
                className="object-cover w-full h-full absolute "
                priority
            />
            <DenzaOwnership />
            <DenzaWarrantySection img="/assets/images/carfrontrightside.jpg" />
            <DenzaWarrantySection img="/assets/images/cardfrontside.webp" />
            <DenzaWarrantySection img="/assets/images/carsideright.jpg" />
        </div>
    );
}
