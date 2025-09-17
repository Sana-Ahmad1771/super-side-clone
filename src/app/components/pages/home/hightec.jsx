"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HighTec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  });

  // Scale transformation
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.8, 0.9, 1, 0.9, 0.8]
  );

  // Width transformation
  const width = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["85%", "92%", "100%", "92%", "85%"]
  );

  // Responsive height transformation
  const height = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    typeof window !== "undefined" && window.innerWidth < 768
      ? ["20vh", "30vh", "40vh", "30vh", "20vh"] // Mobile
      : ["65vh", "75vh", "85vh", "75vh", "65vh"] // Tablet & Desktop
  );

  // Opacity transformation
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 0.95, 0.95, 0.8]
  );

  return (
    <>
      <section ref={containerRef} className="bg-body lg:py-30 pt-20 md:py-16">
        <div className="flex flex-col justify-center gap-5 items-center text-body-alt container mx-auto px-4 sm:px-6 lg:px-8 lg:space-y-20 space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 container mx-auto">
            <p className="uppercase">OUR WORK</p>
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[60px] leading-16">
              From high tech to high <br /> fashion{" "}
              <span className="italic text-[28px] md:text-[36px] lg:text-[44px] xl:text-[64px]">
                 and beyond
              </span>
            </h2>
          </div>

          {/* Video Preview with scroll effect */}
          <div className="w-full mt-6 lg:mt-0 flex justify-center">
            <motion.div
              style={{ scale, width, height, opacity }}
              className="relative cursor-pointer group flex items-center justify-center max-h-[85vh]"
              onClick={openVideo}
            >
              <video
                className="w-full h-full object-cover rounded-xl shadow-lg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src={"/video-full.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button */}
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
            </motion.div>
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
                src="/video-full.mp4"
                controls
                autoPlay
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HighTec;
