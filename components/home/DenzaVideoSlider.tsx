'use client';

import { useState, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function CenteredVideoSlider() {
  const slides = [
    {
      id: 1,
      videoSrc: 'https://denzaqatar.com/wp-content/uploads/2025/09/Denza-B5-edited-compressed.mp4',
      poster: 'https://denzaqatar.com/wp-content/uploads/2025/09/slider-2.jpg',
      title: 'DENZA B5',
      subtitle: 'Technology Drives Elegance',
    },
    {
      id: 2,
      videoSrc: 'https://denzaqatar.com/wp-content/uploads/2025/09/WhatsApp-Video-2025-09-24-at-12.27.26-PM.mp4',
      poster: 'https://denzaqatar.com/wp-content/uploads/2025/09/slider-1.jpg',
      title: 'DENZA B8',
      subtitle: 'The SUV Made for Family Moments',
    },
  ];

  // We'll track which videos are playing to toggle overlay visibility
  const [playingVideos, setPlayingVideos] = useState<any>({});

  const togglePlay = (id: any, videoRef: any) => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlayingVideos((prev: any) => ({ ...prev, [id]: true }));
    } else {
      videoRef.current.pause();
      setPlayingVideos((prev: any  ) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto p-4">
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          perMove: 1,
          gap: '1rem',
          autoplay: false,
          pauseOnHover: false,
          pauseOnFocus: false,
          arrows: false,
          pagination: true,
          speed: 400,
          interval: 3000,
          height: 'auto',
        }}
        className="space-y-6"
      >
        {slides.map((slide) => {
          const videoRef = useRef(null);
          const isPlaying = playingVideos[slide.id];

          return (
            <SplideSlide key={slide.id}>
              <div className="flex flex-col items-center">
                <div className="relative w-[90vw] max-w-[90vw] aspect-video rounded-lg overflow-hidden shadow-lg">
                  <video
                    ref={videoRef}
                    src={slide.videoSrc}
                    poster={slide.poster}
                    className="w-full h-full object-cover"
                    preload="auto"
                    playsInline
                    onClick={() => togglePlay(slide.id, videoRef)}
                  >
                    <p>Your browser does not support the video tag.</p>
                  </video>

                  {/* Overlay with blurred circle and play icon */}
                  {!isPlaying && (
                    <div
                      className="absolute inset-0 flex justify-center items-center cursor-pointer"
                      onClick={() => togglePlay(slide.id, videoRef)}
                      aria-label="Play video"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') togglePlay(slide.id, videoRef);
                      }}
                    >
                      <div className="bg-white/30 backdrop-blur-md rounded-full w-16 h-16 flex justify-center items-center shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          stroke="none"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex w-full items-center justify-between px-2 max-w-[90vw]">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-wide">{slide.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{slide.subtitle}</p>
                  </div>
                  {/* Pagination will render automatically by Splide */}
                  <ul className="splide__pagination splide__pagination--ltr flex space-x-2" />
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
