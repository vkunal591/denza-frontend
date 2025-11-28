"use client";

import { useRef, useState } from "react";
import { FiVolume2, FiVolumeX, FiPause, FiPlay } from "react-icons/fi";

const HeroVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">

      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted={muted}
        playsInline
      >
        <source src="/videos/denza-bg.mp4" type="video/mp4" /> 
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT CENTER */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <p className="text-sm mb-2 opacity-80">New</p>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
          DENZA <span className="font-light text-3xl align-super">Z9GT</span>
        </h1>

        <p className="text-gray-300 mt-4 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="
            px-8 py-3 rounded-full border border-white text-white 
            hover:bg-white hover:text-black 
            transition duration-300 ease-in-out active:scale-95
          ">
            Test drive
          </button>

          <button className="
            px-8 py-3 rounded-full bg-white text-black 
            hover:bg-gray-200 
            transition duration-300 ease-in-out active:scale-95
          ">
            Configurator
          </button>
        </div>
      </div>

      {/* VIDEO CONTROLS (BOTTOM RIGHT) */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4 text-white">

        {/* VOLUME BUTTON */}
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md 
                     hover:bg-black/60 transition duration-300"
        >
          {muted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
        </button>

        {/* PLAY / PAUSE BUTTON */}
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md 
                     hover:bg-black/60 transition duration-300"
        >
          {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
        </button>
      </div>

    </section>
  );
};

export default HeroVideoSection;
