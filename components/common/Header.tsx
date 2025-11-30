"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaAlignJustify } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed flex justify-center z-50">
      <div className="w-[90%] bg-gradient-to- bg-[#ffffff9f] to-[#d6f1f6a4 rounded-b-3xl backdrop-blur-sm shadow-lg">

        {/* TOP NAV */}
        <div className="flex items-center justify-between px-4  py-2 relative">
          <button className="text-lg text-[#032A45] w-full flex items-center justify-start" onClick={() => setOpen(!open)}>
            {!open ? <FaAlignJustify /> : <IoMdClose />}
          </button>

          {/* CENTER LOGO */}
          <div className=" mx-auto w-full">
            <Link href="/"  onClick={() => setOpen(false)}>
              <Image
                src="https://denzaqatar.com/wp-content/uploads/2025/10/Denza-Logo-bright-blue-2.png"
                width={90}
                height={90}
                alt="Denza Logo"
                className="object-contain m-auto h-15 w-15"
              />
            </ Link>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center justify-end w-full gap-3">
            <Link
              href="#"
              className="hidden md:block bg-white/60 backdrop-blur-lg px-6 py-2 rounded-full text-[#032A45] text-sm"
            >
              Book A Test Drive
            </Link>


          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* LIQUID EXPANDING MENU WITH PURE BLUR BACKGROUND (NO COLOR) */}
        {/* ---------------------------------------------------------------- */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 1.1,
                ease: [0.25, 0.46, 0.45, 0.94], // smooth fluid easing
              }}
              className="
                overflow-hidden 
                backdrop-blur-xl 
                bg-transparent
                rounded-b-3xl
              "
            >
              {/* DESKTOP */}
              <div className="hidden md:grid grid-cols-2 gap-10 px-10 py-10">

                {/* LEFT TEXT */}
                <div>
                  <p className="text-sm tracking-widest text-[#032A45]">THE NEW</p>
                  <p className="text-4xl font-bold mt-1 text-[#032A45]">Denza B5 & B8</p>
                  <p className="text-gray-700 mt-2">High-performance hybrid SUV's now in Qatar</p>

                  <div className="flex flex-col gap-4 mt-6">
                    <Link href="/contact-us"  onClick={() => setOpen(!open)} className="text-[#032A45] font-medium">CONTACT US ›</ Link>
                    <Link href="/inquire-us"  onClick={() => setOpen(!open)} className="text-[#032A45] font-medium">INQUIRE TO BUY ›</ Link>
                    <Link href="/ownership"  onClick={() => setOpen(!open)} className="text-[#032A45] font-medium">DENZA OWNERSHIP ›</ Link>
                    <Link href="/downloads"  onClick={() => setOpen(!open)} className="text-[#032A45] font-medium">DOWNLOAD BROCHURE ›</ Link>
                  </div>
                </div>

                {/* RIGHT CARS */}
                <div className="grid grid-cols-2 gap-6">
                  {/* B5 */}
                  <div>
                    <Image
                      src="https://denzaqatar.com/wp-content/uploads/2025/09/1月23方程豹正侧70979-A003cs-天神版-1.jpg"
                      width={500}
                      height={300}
                      alt="DENZA B5"
                      className="rounded-xl"
                    />
                    <p className="font-semibold mt-3 text-[#032A45]">DENZA B5</p>
                    <Link href="/denza-b5"  onClick={() => setOpen(!open)} className="text-[#032A45] inline-flex items-center gap-1">
                      Explore DENZA B5 <IoIosArrowForward />
                    </Link>
                  </div>

                  {/* B8 */}
                  <div>
                    <Image
                      src="https://denzaqatar.com/wp-content/uploads/2025/09/1月23方程豹正侧70979-A003cs-天神版-1-1.jpg"
                      width={500}
                      height={300}
                      alt="DENZA B8"
                      className="rounded-xl"
                    />
                    <p className="font-semibold mt-3 text-[#032A45]">DENZA B8</p>
                    <Link href="/denza-b8"  onClick={() => setOpen(!open)} className="text-[#032A45] inline-flex items-center gap-1">
                      Explore DENZA B8 <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
              </div>

              {/* MOBILE */}
              <div className="md:hidden px-6 pb-10 pt-4">
                <p className="text-sm tracking-widest text-[#032A45]">THE NEW</p>
                <p className="text-3xl font-bold mt-1 text-[#032A45]">Denza B5 & B8</p>
                <p className="text-gray-600 mt-2">High-performance hybrid SUVs now in Qatar</p>

                <div className="flex flex-col gap-3 mt-6 text-[#032A45] font-medium">
                  <Link href="/contact-us"  onClick={() => setOpen(!open)} className="text-[#032A45] font-medium">CONTACT US ›</ Link>
                  <Link href="/inquire-us"  onClick={() => setOpen(!open)} className="text-[#032A45] font-medium">INQUIRE TO BUY ›</ Link>
                  <Link href="/ownership"  onClick={() => setOpen(!open)} className="text-[#032A45] font-medium">DENZA OWNERSHIP ›</ Link>
                  <Link href="/downloads"  onClick={() => setOpen(!open)} className="text-[#032A45] font-medium">DOWNLOAD BROCHURE ›</ Link>

                </div>

                <div className="mt-8 space-y-8">
                  {/* B5 */}
                  <div>
                    <Image
                      src="https://denzaqatar.com/wp-content/uploads/2025/09/1月23方程豹正侧70979-A003cs-天神版-1.jpg"
                      width={600}
                      height={350}
                      alt="DENZA B5"
                      className="rounded-xl"
                    />
                    <p className="font-semibold mt-3">DENZA B5</p>
                    <Link href="/denza-b5"  onClick={() => setOpen(!open)} className="inline-flex items-center gap-1 text-[#032A45] font-medium">
                      Explore DENZA B5 <IoIosArrowForward />
                    </Link>
                  </div>

                  {/* B8 */}
                  <div>
                    <Image
                      src="https://denzaqatar.com/wp-content/uploads/2025/09/1月23方程豹正侧70979-A003cs-天神版-1-1.jpg"
                      width={600}
                      height={350}
                      alt="DENZA B8"
                      className="rounded-xl"
                    />
                    <p className="font-semibold mt-3">DENZA B8</p>
                    <Link href="/denza-b8"  onClick={() => setOpen(!open)} className="inline-flex items-center gap-1 text-[#032A45] font-medium">
                      Explore DENZA B8 <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
