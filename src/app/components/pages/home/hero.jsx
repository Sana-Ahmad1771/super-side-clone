"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// ================= Horizontal Slider =================
function HorizontalSlider({ images, direction = "left", speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setDistance(containerRef.current.scrollWidth / 2); // half width of duplicated row
    }
  }, [images]);

  const imageList = [...images, ...images]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        className="flex items-center"
        style={{ willChange: "transform" }}
        animate={{ x: direction === "left" ? [0, -distance] : [-distance, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {imageList.map((img, idx) => (
          <div key={idx} className="mx-1 sm:mx-2 flex-shrink-0">
            <div className="relative w-24 h-20 sm:w-36 sm:h-28 md:w-48 md:h-36 lg:w-56 lg:h-44 xl:w-60 xl:h-48">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Vertical Parallax Column =================
function ParallaxColumn({ images, direction = "up", speed = 20 }) {
  const imageList = [...images, ...images]; // duplicate for loop

  return (
    <div className="flex flex-col overflow-hidden relative w-28 sm:w-40 md:w-52 lg:w-56 xl:w-60">
      <motion.div
        className="flex flex-col"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {imageList.map((img, idx) => (
          <div
            key={idx}
            className="mb-3 flex-shrink-0 relative h-28 sm:h-40 md:h-52 lg:h-60 xl:h-72 w-full"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Images =================
const images1 = [
  { src: "/assets/piano.png", alt: "Creative" },
  { src: "/assets/rice.png", alt: "Marketing" },
  { src: "/assets/yoga.png", alt: "Brand" },
  { src: "/assets/bag-mn.png", alt: "Bag" },
  { src: "/assets/education.png", alt: "Education" },
];

const images2 = [
  { src: "/assets/rice.png", alt: "Development" },
  { src: "/assets/yoga.png", alt: "Yoga" },
  { src: "/assets/bag-mn.png", alt: "Bag" },
  { src: "/assets/education.png", alt: "Education" },
  { src: "/assets/piano.png", alt: "Brainstorming" },
  { src: "/assets/rice.png", alt: "Production" },
];

const images3 = [
  { src: "/assets/piano.png", alt: "Design" },
  { src: "/assets/rice.png", alt: "Studio" },
  { src: "/assets/yoga.png", alt: "Yoga" },
  { src: "/assets/bag-mn.png", alt: "Bag" },
  { src: "/assets/education.png", alt: "Education" },
  { src: "/assets/piano.png", alt: "Collaboration" },
];

// ================= Hero Section =================
const Hero = () => {
  return (
      <section className="pl-[190px] overflow-hidden bg-background">
        <div className=" sm:px-6 py-10 lg:py-0 ">
          <div className="lg:flex justify-between items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left w-full mx-auto lg:mx-0 px-5">
              <h1 className=" lg:text-[64px] xl:w-[800px] md:text-[55px] text-[32px] break-words font-sans font-normal leading-tight text-heading">
                Your <span className="italic lg:text-[68px]">creative team’s</span> creative
                team™
              </h1>
              <p className="md:text-base lg:text-lg xl:text-xl text-body font-sans xl:w-[590px] max-w-prose mx-auto lg:mx-0">
                Scale your in-house creative team with top global talent powered
                by industry-leading AI workflows, delivering anything you can
                imagine fast and affordably.
              </p>
              <button className="px-6 py-3 w-fit bg-buttonbg text-button-text cursor-pointer rounded-full font-sans font-medium hover:opacity-90 transition">
                Book a demo
              </button>
            </div>

            {/* Right Side Animations */}
            <div className="lg:w-[50%]">
              {/* Desktop: Vertical Parallax */}
              <div className="hidden lg:flex justify-end gap-4 h-[100vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative overflow-hidden">
                {/* Top fade */}
                <div className="pointer-events-none absolute left-0 top-0 w-full h-12 md:h-16 lg:h-20 xl:h-24 z-20 bg-gradient-to-b from-background via-background/70 to-transparent" />
                {/* Bottom fade */}
                <div className="pointer-events-none absolute left-0 bottom-0 w-full h-12 md:h-16 lg:h-20 xl:h-24 z-20 bg-gradient-to-t from-background via-background/70 to-transparent" />

                <ParallaxColumn images={images1} direction="up" speed={25} />
                <ParallaxColumn images={images2} direction="down" speed={30} />
                <ParallaxColumn images={images3} direction="up" speed={20} />
              </div>

              {/* Mobile/Tablet: Horizontal Sliders */}
              <div className="relative flex flex-col lg:hidden gap-4 w-full mt-8 overflow-hidden">
                {/* Left fade */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-12 md:w-16 z-20 bg-gradient-to-r from-background via-background/70 to-transparent" />
                {/* Right fade */}
                <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 z-20 bg-gradient-to-l from-background via-background/70 to-transparent" />

                <HorizontalSlider images={images1} direction="left" speed={25} />
                <HorizontalSlider images={images3} direction="right" speed={30} />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
