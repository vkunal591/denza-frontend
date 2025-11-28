const TwoColumnCTASection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* LEFT SIDE — TEXT */}
                <div className="max-w-xl text-center md:text-left">
                    <p className="mt-4 text-gray-600 text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisi. Vivamus at libero nec justo convallis
                        pellentesque vitae at turpis. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Repellendus distinctio aliquam
                        magni mollitia ipsum nisi ipsam corrupti quod ullam cupiditate
                        iusto fugiat, porro ea perspiciatis nobis. Eligendi deserunt
                        culpa obcaecati!
                    </p>
                </div>

                {/* RIGHT SIDE — BUTTONS */}
                <div className="flex  items-center justify-center gap-4 w-full">

                    {/* BOOK A TEST DRIVE */}
                    <button
                        className="
                            w-full sm:w-auto
                            px-6 py-3 rounded-xl
                            border border-black
                            text-black bg-white
                            transition duration-300
                            hover:bg-black hover:text-white
                            active:scale-95
                        "
                    >
                        Book a Test Drive
                    </button>

                    {/* FIND A SHOWROOM */}
                    <button
                        className="
                            w-full sm:w-auto
                            px-6 py-3 rounded-xl
                            bg-black text-white
                            border border-black
                            transition duration-300
                            hover:bg-white hover:text-black
                            active:scale-95
                        "
                    >
                        Find a Showroom
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TwoColumnCTASection;
