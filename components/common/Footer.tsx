"use client";

import Image from "next/image";
import {
  FaWeibo,
  FaWeixin,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* LOGO */}
          <div className="col-span-1 flex items-start">
            <Image
              src="/logo/denza.png"
              alt="Denza Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          {/* MODELS */}
          <div>
            <h4 className="text-xs font-bold mb-3 tracking-wide">MODELS</h4>
            <ul className="space-y-2 text-sm">
              <li>D9</li>
              <li>N7</li>
              <li>Z9GT</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-xs font-bold mb-3 tracking-wide">SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li>After-Sales Service</li>
              <li>Book a Test Drive</li>
              <li>Find Your Dealer</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-xs font-bold mb-3 tracking-wide">About DENZA</h4>
            <ul className="space-y-2 text-sm">
              <li>About DENZA</li>
              <li>Privacy and Data Protection</li>
            </ul>
          </div>

          {/* MORE */}
          <div>
            <h4 className="text-xs font-bold mb-3 tracking-wide">More</h4>
            <ul className="space-y-2 text-sm">
              <li>BYD Automobile</li>
              <li>BYD Company Limited</li>
            </ul>
          </div>

        </div>

        {/* MIDDLE SECTION */}
        <div className="border-t border-gray-200 mt-10 pt-6">

          <div className="flex flex-wrap justify-between items-center gap-4 text-xs text-gray-500">

            {/* LEFT LINKS */}
            <div className="flex flex-wrap items-center gap-6">
              <span>BYD Automobile</span>
              <span>BYD Automobile</span>
              <span>BYD Company Limited</span>
            </div>

            {/* RIGHT SOCIAL ICONS */}
            <div className="flex items-center gap-4 text-gray-500">
              <FaWeibo className="cursor-pointer hover:text-black transition" size={18} />
              <FaWeixin className="cursor-pointer hover:text-black transition" size={18} />
              <FaFacebookF className="cursor-pointer hover:text-black transition" size={16} />
              <FaInstagram className="cursor-pointer hover:text-black transition" size={18} />
              <FaYoutube className="cursor-pointer hover:text-black transition" size={20} />
              <FiGlobe className="cursor-pointer hover:text-black transition" size={20} />
            </div>
          </div>

          {/* BOTTOM LINKS */}
          <div className="flex flex-wrap justify-between items-center text-xs text-gray-400 mt-4 gap-4">

            {/* COPYRIGHT */}
            <p>COPYRIGHT ©2024 DENZA AUTOMOBILE</p>

            {/* POLICIES */}
            <div className="flex flex-wrap gap-6">
              <p className="hover:text-black cursor-pointer">Cookie Policy</p>
              <p className="hover:text-black cursor-pointer">Terms of use</p>
              <p className="hover:text-black cursor-pointer">Privacy and Data Protection</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
