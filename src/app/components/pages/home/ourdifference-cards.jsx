import React from "react";
import { PenTool, List, Star } from "lucide-react";

// Reusable card component
const FeatureCard = ({ icon: Icon, label, title, desc }) => (
  <div className="flex flex-col text-left gap-4 sm:gap-5 p-4 sm:p-5 md:p-6 text-body-alt rounded-lg h-full w-full max-w-[380px] md:max-w-[420px] mx-auto">
    <div className="p-3 sm:p-4 md:p-5 w-fit flex items-center justify-center rounded-md bg-body-alt/20">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
    </div>
    <div className="space-y-2 sm:space-y-3">
      <p className="uppercase text-sm sm:text-base md:text-[16px] tracking-wider">
        {label}
      </p>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const OurDifference = () => {
  const cards = [
    {
      icon: PenTool,
      label: "Scalable",
      title: "Boost your in-house creative",
      desc: "We handle the heavy lifting so you can focus on strategic, high impact work without adding overhead to the team.",
    },
    {
      icon: List,
      label: "Flexible",
      title: "Say yes to more projects",
      desc: "Whether you need more bandwidth or different skills, Superside has whatever resources you need to get the job done.",
    },
    {
      icon: Star,
      label: "Responsive",
      title: "Don't sacrifice quality for speed",
      desc: "Our global team of creatives delivers agency-level work in a fraction of the time.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-body">
      <div className="container mx-auto px-4 sm:px-6 text-center text-body-alt">
        {/* Small Heading */}
        <p className="uppercase text-xs sm:text-sm tracking-wider mb-2">
          Our Difference
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl mt-2 font-normal leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-4">
          Superside is the{" "}
          <span className="italic font-normal">perfect fit</span> for fast
          moving <br className="hidden sm:block" /> brands
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mx-auto text-body-alt max-w-full">
          {cards.map((card, index) => (
            <div key={index} className="flex justify-center">
              <FeatureCard
                icon={card.icon}
                label={card.label}
                title={card.title}
                desc={card.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDifference;
