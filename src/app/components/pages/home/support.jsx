"use client";
import React, { useState } from "react";

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <section className="bg-body lg:py-30 pt-20 md:py-16">
      <div className="flex flex-col lg:flex-row lg:container lg:mx-auto items-center justify-between gap-6 md:gap-8 lg:gap-12 md:px-8">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-button-text space-y-6 md:space-y-8 px-6">
          <p className="text-sm md:text-base uppercase tracking-widest text-primary border-b border-gray-500 pb-2 md:pb-3">
            A new era of creative work
          </p>

          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[45px] xl:text-[55px] leading-tight md:leading-normal lg:leading-tight max-w-full">
              The support your creative team{" "}
              <span className="italic font-serif">has been asking for</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-sans max-w-full leading-relaxed md:leading-relaxed">
              Superside is your dedicated, on-call creative team to expand your
              production capacity and extend your team's creative capabilities.
            </p>

            <p className="text-base md:text-lg font-sans max-w-full leading-relaxed md:leading-relaxed">
              See us as an extension of your team, freeing you to focus on your
              most impactful and creative work.
            </p>

            <div className="pt-2 md:pt-4">
              <button className="px-6 py-3 bg-background text-body text-sm md:text-base w-full sm:w-fit rounded-full font-medium hover:opacity-90 transition">
                Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* Right Video Content */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <div
            className="relative w-full lg:max-w-none cursor-pointer group"
            onClick={openVideo}
          >
            {/* Video Preview */}
            <video
              className="w-full h-auto max-h-[50vh] md:max-h-[60vh] lg:max-h-[400px] object-cover lg:rounded-xl md:rounded-2xl shadow-lg"
              muted
              loop
              autoPlay
              playsInline
            >
              <source src={"/video-3.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Green Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-14 md:w-20 md:h-16 lg:w-24 lg:h-18 flex items-center justify-center rounded-lg bg-background text-white shadow-lg hover:bg-green-900 transition duration-300">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="relative w-[90%] max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300"
            >
              ✕
            </button>

            {/* Video Player */}
            <video
              src="/video-3.mp4"
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

export default Support;
