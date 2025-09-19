"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// ================= Horizontal Slider =================
function HorizontalSlider({ images, direction = "left", speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setDistance(containerRef.current.scrollWidth / 2);
    }
  }, [images]);

  const imageList = [...images, ...images];

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
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 xl:w-72 xl:h-80">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg shadow-lg transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Vertical Parallax Column =================
function ParallaxColumn({ images, direction = "up", speed = 20, scrollDirection, columnIndex }) {
  const controls = useAnimation();
  const imageList = [...images, ...images];
  const prevScrollDirection = useRef('down');

  useEffect(() => {
    const animateColumn = async () => {
      if (prevScrollDirection.current !== scrollDirection) {
        // Smoothly reverse direction with a gentle ease
        if (scrollDirection === 'down') {
          await controls.start({
            y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
            transition: {
              duration: speed,
              ease: [0.25, 0.46, 0.45, 0.94], // Nice smooth easing
            }
          });
        } else {
          await controls.start({
            y: direction === "up" ? ["-50%", "0%"] : ["0%", "-50%"],
            transition: {
              duration: speed,
              ease: [0.25, 0.46, 0.45, 0.94],
            }
          });
        }
        
        // Then start the infinite animation
        controls.start({
          y: scrollDirection === 'down' 
            ? (direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"])
            : (direction === "up" ? ["-50%", "0%"] : ["0%", "-50%"]),
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          }
        });
      } else {
        // Continue with current animation
        controls.start({
          y: scrollDirection === 'down' 
            ? (direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"])
            : (direction === "up" ? ["-50%", "0%"] : ["0%", "-50%"]),
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          }
        });
      }
      
      prevScrollDirection.current = scrollDirection;
    };

    animateColumn();
  }, [scrollDirection, direction, speed, controls]);

  // Add slight delay to each column for a wave effect
  const columnDelay = columnIndex * 0.5;

  return (
    <motion.div 
      className="flex flex-col overflow-hidden relative w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: columnDelay, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col"
        animate={controls}
      >
        {imageList.map((img, idx) => (
          <motion.div
            key={idx}
            className="mb-4 flex-shrink-0 relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, (max-width: 1024px) 224px, 256px"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
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
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isInView, setIsInView] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Check if section is in view
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
        
        if (isVisible) {
          // Determine scroll direction with a slight delay for smoother transitions
          scrollTimeout.current = setTimeout(() => {
            if (currentScrollY > lastScrollY.current + 5) {
              setScrollDirection('down');
            } else if (currentScrollY < lastScrollY.current - 5) {
              setScrollDirection('up');
              setHasScrolled(true);
            }
          }, 50);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Determine animation direction based on scroll behavior
  const getColumnDirection = (columnIndex) => {
    // If user hasn't scrolled yet, use default directions
    if (!hasScrolled) {
      return columnIndex === 1 ? 'down' : 'up';
    }
    
    // After scrolling, reverse directions when scrolling up into the section
    if (scrollDirection === 'up' && isInView) {
      return columnIndex === 1 ? 'up' : 'down';
    }
    
    // Default behavior when scrolling down into section
    return columnIndex === 1 ? 'down' : 'up';
  };

  return (
      <section ref={sectionRef} className="2xl:pl-[190px] overflow-hidden bg-background">
        <div className="sm:px-6 py-10 lg:py-0">
          <div className="lg:flex justify-between items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-6 text-center lg:text-left w-full mx-auto lg:mx-0 px-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="lg:text-[64px] xl:max-w-[800px] md:text-[55px] text-[32px] break-words font-sans font-normal leading-tight text-heading">
                Your <span className="italic lg:text-[68px]">creative team's</span> creative
                team™
              </h1>
              <motion.p 
                className="md:text-base lg:text-lg xl:text-xl text-body font-sans xl:w-[590px] max-w-prose mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Scale your in-house creative team with top global talent powered
                by industry-leading AI workflows, delivering anything you can
                imagine fast and affordably.
              </motion.p>
              <motion.button 
                className="px-6 py-3 w-fit bg-buttonbg text-button-text cursor-pointer rounded-full font-sans font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a demo
              </motion.button>
            </motion.div>

            {/* Right Side Animations */}
            <div className="lg:w-[50%]">
              {/* Desktop: Vertical Parallax */}
              <div className="hidden lg:flex justify-end gap-6 h-[100vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative overflow-hidden">
                {/* Gradient overlays for a more polished look */}
                <div className="pointer-events-none absolute left-0 top-0 w-full h-20 md:h-24 lg:h-28 xl:h-32 z-20 bg-gradient-to-b from-background to-transparent" />
                <div className="pointer-events-none absolute left-0 bottom-0 w-full h-20 md:h-24 lg:h-28 xl:h-32 z-20 bg-gradient-to-t from-background to-transparent" />

                <ParallaxColumn 
                  images={images1} 
                  direction={getColumnDirection(0)} 
                  speed={25} 
                  fill
                  scrollDirection={scrollDirection}
                  columnIndex={0}
                />
                <ParallaxColumn 
                  images={images2} 
                  direction={getColumnDirection(1)} 
                  speed={30} 
                  fill
                  scrollDirection={scrollDirection}
                  columnIndex={1}
                />
                <ParallaxColumn 
                  images={images3} 
                  direction={getColumnDirection(2)} 
                  speed={20} 
                  fill
                  scrollDirection={scrollDirection}
                  columnIndex={2}
                />
              </div>

              {/* Mobile/Tablet: Horizontal Sliders */}
              <div className="relative flex flex-col lg:hidden gap-3 w-full mt-8 overflow-hidden">
                {/* Gradient overlays */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-12 sm:w-16 md:w-20 z-20 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute top-0 right-0 h-full w-12 sm:w-16 md:w-20 z-20 bg-gradient-to-l from-background to-transparent" />

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