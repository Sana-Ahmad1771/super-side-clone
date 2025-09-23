"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

// Testimonial data (7 items)
const testimonials = [
  {
    id: 1,
    name: "Justin Rands",
    role: "Director of Brand at Oyster",
    company: "Oyster",
    text: "I am beyond happy with the work. Your designers routinely save the day!",
    stats: [
      { label: "Production time saved", value: "57%" },
      { label: "Cost savings", value: "$10,775" },
      { label: "Videos delivered", value: "20" },
    ],
    image: "/assets/redit.png",
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Head of Marketing at Acme",
    company: "Acme",
    text: "Superside has been an amazing partner. They help us scale design effortlessly.",
    stats: [
      { label: "Campaigns launched", value: "35+" },
      { label: "Cost savings", value: "$8,400" },
      { label: "Assets delivered", value: "120" },
    ],
    image: "/assets/piano.png",
  },
  {
    id: 3,
    name: "Mark Brown",
    role: "Creative Director at Nova",
    company: "Nova",
    text: "The collaboration has transformed the way we handle creative projects.",
    stats: [
      { label: "Faster turnaround", value: "65%" },
      { label: "Cost savings", value: "$12,000" },
      { label: "Projects completed", value: "50+" },
    ],
    image: "/assets/rice.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "VP of Growth at Pixel Inc.",
    company: "Pixel Inc.",
    text: "They make scaling design so smooth and stress-free!",
    stats: [
      { label: "Growth increase", value: "42%" },
      { label: "Design hours saved", value: "500+" },
      { label: "Projects delivered", value: "75" },
    ],
    image: "/assets/piano.png",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Marketing Lead at Bright Labs",
    company: "Bright Labs",
    text: "Super professional and highly creative team. Love working with them!",
    stats: [
      { label: "Engagement boost", value: "30%" },
      { label: "Campaigns scaled", value: "18" },
      { label: "Assets designed", value: "200+" },
    ],
    image: "/assets/yoga.png",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    role: "Head of Design at Zentro",
    company: "Zentro",
    text: "They’ve become an integral part of our design process.",
    stats: [
      { label: "Time saved", value: "60%" },
      { label: "Design cost reduced", value: "$9,800" },
      { label: "Projects completed", value: "40" },
    ],
    image: "/assets/space.png",
  },
  {
    id: 7,
    name: "Liam Johnson",
    role: "Founder at Alpha",
    company: "Alpha",
    text: "The partnership feels seamless – like they are part of our own team.",
    stats: [
      { label: "Efficiency boost", value: "70%" },
      { label: "Cost savings", value: "$15,000" },
      { label: "Campaigns delivered", value: "60+" },
    ],
    image: "/assets/piano.png",
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-[#EAF2E0] w-full flex items-center justify-center py-16 px-8">
      <div className="max-w-6xl w-full grid grid-cols-[200px_1fr_60px] gap-10 items-center">
        {/* Avatars (Left column) */}
        <div className="flex flex-col items-center space-y-6">
          {testimonials.map((item, idx) => {
            const distance = Math.abs(activeIndex - idx);
            return (
              <motion.div
                key={item.id}
                animate={{
                  scale: idx === activeIndex ? 1.1 : 0.9,
                  opacity: idx === activeIndex ? 1 : 0.3,
                  filter: idx === activeIndex ? "blur(0px)" : "blur(3px)",
                }}
                transition={{ duration: 0.4 }}
                className="w-24 h-24 rounded-full overflow-hidden bg-red-500"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Content (Middle column) */}
        <div className="text-body-alt flex flex-col space-y-6">
          <motion.div
            key={testimonials[activeIndex].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold">
              {testimonials[activeIndex].company}
            </h3>
            <p className="mt-4 text-2xl md:text-3xl font-serif leading-snug">
              “{testimonials[activeIndex].text}”
            </p>
            <p className="mt-4 text-sm text-gray-700">
              {testimonials[activeIndex].name},{" "}
              {testimonials[activeIndex].role}
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {testimonials[activeIndex].stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Controls (Right column) */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border flex items-center justify-center text-body-alt transition"
          >
            <ChevronUp size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border flex items-center justify-center text-body-alt transition"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
