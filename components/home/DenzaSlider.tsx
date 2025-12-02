'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function DenzaFullSlider() {
    return (
        <section className="w-full ">
            <Splide
                options={{
                    type: 'fade',
                    rewind: true,
                    autoplay: true,
                    interval: 6000,
                    speed: 4000,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    arrows: false,
                    pagination: true,
                    height: '100vh',
                }}
            >

                {/* Slide 1 */}
                <SplideSlide>
                    <div
                        className="h-screen bg-cover bg-center flex flex-col justify-center items-start p-4 lg:p-16 text-white"
                        style={{ backgroundImage: "url('/assets/images/cardfrontside.webp')" }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-4">
                            The Wait is Over<br />Denza B5 has arrived!
                        </h3>
                        <p className="text-lg md:text-xl mb-6">
                            The all-new Denza B5 makes its debut in Bahrain-<br />where technology and elegance move as one
                        </p>
                        {/* Buttons */}
                        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6">

                            <button
                                className="
                w-full md:w-auto
                border border-white
                bg-black/40
                backdrop-blur-sm
                px-6 py-3 rounded-xl text-white
                transition duration-300 ease-in-out
                hover:bg-white hover:text-black
                active:scale-95
              "
                            >
                                Configure
                            </button>

                            <button
                                className="
                w-full md:w-auto
                bg-white text-black 
                px-6 py-3 rounded-xl
                transition duration-300 ease-in-out
                hover:bg-gray-200
                active:scale-95
              "
                            >
                                Test Drive
                            </button>

                        </div>
                    </div>
                </SplideSlide>

                {/* Slide 2 */}
                <SplideSlide>
                    <div
                        className="h-screen bg-cover bg-center flex flex-col justify-center items-start p-4 lg:p-16 text-white"
                        style={{ backgroundImage: "url('/assets/images/carsideright.jpg')" }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-4">
                            Luxury in Motion!
                        </h3>
                        <p className="text-lg md:text-xl mb-6">
                            From innovation to inspiration, the Denza B5<br />transforms every drive into a statement
                        </p>
                        {/* Buttons */}
                        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6">

                            <button
                                className="
                w-full md:w-auto
                border border-white
                bg-black/40
                backdrop-blur-sm
                px-6 py-3 rounded-xl text-white
                transition duration-300 ease-in-out
                hover:bg-white hover:text-black
                active:scale-95
              "
                            >
                                Configure
                            </button>

                            <button
                                className="
                w-full md:w-auto
                bg-white text-black 
                px-6 py-3 rounded-xl
                transition duration-300 ease-in-out
                hover:bg-gray-200
                active:scale-95
              "
                            >
                                Test Drive
                            </button>

                        </div>
                    </div>
                </SplideSlide>

                {/* Slide 3 */}
                <SplideSlide>
                    <div
                        className="h-screen bg-cover bg-center flex flex-col justify-center items-start p-4 lg:p-16 text-white"
                        style={{ backgroundImage: "url('/assets/images/carside.jpg')" }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-4">
                            The Denza B8 Arrives in Bahrain
                        </h3>
                        <p className="text-lg md:text-xl mb-6">
                            Bold performance, advanced technology, and timeless design come<br />together in this new era of mobility
                        </p>
                        {/* Buttons */}
                        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6">

                            <button
                                className="
                w-full md:w-auto
                border border-white
                bg-black/40
                backdrop-blur-sm
                px-6 py-3 rounded-xl text-white
                transition duration-300 ease-in-out
                hover:bg-white hover:text-black
                active:scale-95
              "
                            >
                                Configure
                            </button>

                            <button
                                className="
                w-full md:w-auto
                bg-white text-black 
                px-6 py-3 rounded-xl
                transition duration-300 ease-in-out
                hover:bg-gray-200
                active:scale-95
              "
                            >
                                Test Drive
                            </button>

                        </div>
                    </div>
                </SplideSlide>



            </Splide>
        </section>
    );
}
