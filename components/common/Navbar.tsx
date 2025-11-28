"use client";
import Image from "next/image";
import { useState } from "react";
import { FiUser, FiMapPin, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 z-50 bg-transparent text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Left - Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/assets/logo/logo.png" // change to your logo
                        width={500}
                        height={500}
                        alt="logo"
                        className="h-14 w-14"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 text-sm font-medium">
                    <li className="cursor-pointer hover:text-gray-300">Denza Z9GT</li>
                    <li className="cursor-pointer hover:text-gray-300">Leopard 5</li>
                    <li className="cursor-pointer hover:text-gray-300">About Denza</li>
                </ul>

                {/* Right Section */}
                <div className="hidden md:flex items-center gap-5">
                    <button className="border border-white rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                        Test Drive
                    </button>

                    <FiUser size={20} className="cursor-pointer" />
                    <FiMapPin size={20} className="cursor-pointer" />
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setOpen(true)}>
                    <FiMenu size={26} />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-lg text-white p-6 transform transition ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button className="text-white mb-6" onClick={() => setOpen(false)}>
                    <FiX size={26} />
                </button>

                {/* Menu Items */}
                <ul className="flex flex-col gap-6 text-lg">
                    <li onClick={() => setOpen(false)}>Denza Z9GT</li>
                    <li onClick={() => setOpen(false)}>Leopard 5</li>
                    <li onClick={() => setOpen(false)}>About Denza</li>
                </ul>

                <div className="mt-10 flex flex-col gap-6">
                    <button className="border border-white rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                        Test Drive
                    </button>

                    <div className="flex gap-6">
                        <FiUser size={22} className="cursor-pointer" />
                        <FiMapPin size={22} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
