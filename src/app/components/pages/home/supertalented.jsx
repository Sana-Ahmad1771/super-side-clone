"use client";
import React from "react";
import { motion } from "framer-motion";

const HoverCard = ({
  image,
  heading,
  text,
  bgColor,
  headingColor,
  paragraphColor,
}) => (
  <motion.div
    className={`rounded-2xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${bgColor}`}
    whileHover="hover"
    initial="rest"
    animate="rest"
  >
    <motion.div className="overflow-hidden">
      <motion.img
        src={image}
        alt={heading}
        className="w-full h-[500px] object-cover"
        draggable="false"
        variants={{ rest: { y: 0 }, hover: { y: -60 } }}
      />

      {/* Heading & Paragraph */}
      <motion.div
        className="px-4  flex flex-col justify-center  pt-6 h- "
        variants={{ rest: { y: 0 }, hover: { y: -60 } }}
      >
        <h5 className={`text-2xl font-bold ${headingColor}`}>{heading}</h5>
        <motion.p
          className={`overflow-hidden h-20 ${paragraphColor}`}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          {text}
        </motion.p>
      </motion.div>
    </motion.div>
  </motion.div>
);

const CardSection = () => (
  <section className="py-40 px-6 ">
    <div className="text-center space-y-4 container mx-auto pb-20">
      <p className="uppercase">made to flex</p>
      <h2 className="text-[24px] md:text-[26px] lg:text-[29px] xl:text-[30px]">
        Supertalented. Superfast. Super responsive. Work with a
        <br />
        global team that’s purposefully made to keep up with you.
      </h2>
    </div>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10 h-auto">
      <HoverCard
        image="/assets/girlholdingpictures.png"
        heading="Top global creative talent"
        text="We're not restricted by borders. Top-tier talent, powered by AI means consistently high-quality work for your brand."
        bgColor="bg-card1-bg"
        headingColor="text-heading"
        paragraphColor="text-heading"
      />

      <HoverCard
        image="/assets/laptop-3.png"
        heading="Ultra-fast turnaround times"
        text="With dedicated project managers, collaborative online tools and the expert use of AI, projects can be completed in as little as 12 hours."
        bgColor="bg-body"
        headingColor="text-button-text"
        paragraphColor="text-button-text"
      />
      <HoverCard
        image="https://images.unsplash.com/photo-1517292987719-0369a794ec0f"
        heading="Flexible subscription model"
        text="Access a broad range of services, pivot as needed and work more efficiently with AI-enhanced creative, so that you never waste a dollar."
        bgColor="bg-buttonbg"
        headingColor="text-button-text"
        paragraphColor="text-button-text"
      />
    </div>
  </section>
);

export default CardSection;
