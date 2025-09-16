"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function ParallaxColumn({ images, baseVelocity = 50 }) {
  // Duplicate images for seamless loop
  const imageList = [...images, ...images];
  const controls = useAnimation();

  // Calculate total height of one set
  const totalHeight = images.reduce(
    (sum, img) => sum + (img.height || 200) + 12,
    0
  );

  useEffect(() => {
    controls.start({
      y: [-0, -totalHeight],
      transition: {
        duration: 20, // Adjust speed (smaller = faster)
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, totalHeight]);

  return (
    <div className="overflow-hidden h-[100vh] flex flex-col space-y-3">
      <motion.div animate={controls} className="flex flex-col space-y-3">
        {imageList.map((img, idx) => (
          <Image
            key={idx}
            src={img.src}
            alt={img.alt}
            className="w-full object-cover rounded-lg shadow-lg"
            height={img.height || 200}
            width={400}
          />
        ))}
      </motion.div>
    </div>
  );
}
