"use client";
import React, { useState } from "react";

const SuccessStory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openVideo = (src) => {
    setVideoSrc(src);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
    setVideoSrc("");
  };

  return (
    <section className="container mx-auto my-12 md:my-20 lg:my-32 xl:my-40 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {/* Card 1 */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden rounded-xl md:rounded-2xl group">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/successstory-1.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 text-white">
            <div className="mb-4 md:mb-6">
              <div className="inline-block border-2 border-sky-100/30 rounded-full px-3 py-1 mb-3 md:mb-4">
                <span className="text-sm md:text-base font-medium tracking-wide">
                  SUCCESS STORY
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2 md:mb-3 max-w-sm">
                "It makes me look good:" How Forter uses Superside to turn ideas
                into reality super efficiently.
              </h2>
            </div>
            <button
              onClick={() => openVideo("/successstory-1.mp4")}
              className="self-start flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 md:px-5 md:py-3 rounded-full transition-all duration-300 group-hover:bg-white/40"
            >
              <span className="text-sm md:text-base font-medium">
                Play video
              </span>
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden rounded-xl md:rounded-2xl group">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/successstory-2.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 text-white">
            <div className="mb-4 md:mb-6">
              <div className="inline-block border-2 border-sky-100/30 rounded-full px-3 py-1 mb-3 md:mb-4">
                <span className="text-sm md:text-base font-medium tracking-wide">
                  SUCCESS STORY
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2 md:mb-3 max-w-sm ">
                "Hassle-free:" Why Palo Alto Networks uses Superside for scale
                and creativity on social.
              </h4>
            </div>
            <button
              onClick={() => openVideo("/successstory-2.mp4")}
              className="self-start flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 md:px-5 md:py-3 rounded-full transition-all duration-300 group-hover:bg-white/40"
            >
              <span className="text-sm md:text-base font-medium">
                Play video
              </span>
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300"
            >
              ✕
            </button>
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStory;
