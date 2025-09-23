"use client";

import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

// ================= Slider Component =================
function ImageSlider({ images, scrollDirection, speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setDistance(containerRef.current.scrollWidth / 2); // half of duplicated list
    }
  }, [images]);

  useEffect(() => {
    // Control animation based on scroll direction
    if (scrollDirection === 'down') {
      controls.start({ 
        x: [0, -distance],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }
      });
    } else {
      controls.start({ 
        x: [-distance, 0],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }
      });
    }
  }, [scrollDirection, distance, controls, speed]);

  const imageList = [...images, ...images]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion.div
        ref={containerRef}
        className="flex items-center gap-3"
        style={{ willChange: "transform" }}
        animate={controls}
      >
        {imageList.map((image, idx) => (
          <div
            key={idx}
            className="
              flex-shrink-0 max-w-full 
              h-[304px] w-[200px] 
              lg:h-[588px] lg:w-[392px] 
              xl:w-[520px] xl:h-[780px] 
              flex items-center flex-[0_0_auto] justify-center
            "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full rounded-[10px] h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Main Section =================
const CreativeWork = () => {
  const images = [
    { alt: "tablet-2", src: "/assets/tablet-2.png" },
    { alt: "african", src: "/assets/african.png" },
    { alt: "book-welcome", src: "/assets/book-welcome.png" },
    { alt: "micromirror", src: "/assets/micromirror.png" },
    { alt: "tablet-2", src: "/assets/tablet-2.png" },
    { alt: "multi-lang-mob", src: "/assets/multi-lang-mob.png" },
    { alt: "tablet", src: "/assets/tablet.png" },
    { alt: "space", src: "/assets/space.png" },
    { alt: "female-green", src: "/assets/female-green.png" },
  ];

  const [scrollDirection, setScrollDirection] = useState('down');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if section is in view
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
        
        if (isVisible) {
          // Determine scroll direction
          if (currentScrollY > lastScrollY.current) {
            setScrollDirection('down'); // Scrolling down
          } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection('up'); // Scrolling up
          }
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="lg:pt-10 pt-12 bg-body overflow-hidden">
      <div className="pb-10 lg:space-y-20 space-y-12">
        <div className="container mx-auto text-body-alt px-3">
          <div className="space-y-4">
            <p className="uppercase">easy & hassle-free</p>
            <h2 className="w-fit lg:leading-16">
              Every type of creative work you'll <br className="hidden sm:block"/> ever need, {" "}
              <span className="instrument-serif-regular-italic text-[34px] sm:text-[39px] md:text-[49px] lg:text-[59px] xl:text-[64px]">
                and more
              </span>
            </h2>
          </div>
        </div>

        {/* images */}
        
        <div>
        {/* Slider with scroll direction awareness */}
        <ImageSlider 
          images={images} 
          scrollDirection={isInView ? scrollDirection : 'down'} 
          speed={30} 
        />
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;