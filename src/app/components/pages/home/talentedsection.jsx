"use client";
import Image from "next/image";
import React from "react";
import talented1 from "../../../../../public/assets/bag-mn.png";

const TalentedSection = () => {
  const cards = [
    {
      id: 1,
      title: "Super Talented",
      subtitle: "Global Talent",
      image: talented1,
      description:
        "Access top-tier creative professionals from around the world, handpicked for their expertise and proven track record in delivering exceptional results.",
    },
    {
      id: 2,
      title: "Super Fast",
      subtitle: "AI-Powered Workflows",
      image: "/assets/girlholdingpictures.png",
      description:
        "Lightning-fast delivery powered by cutting-edge AI workflows that streamline the creative process while maintaining the highest quality standards.",
    },
    {
      id: 3,
      title: "Super Scalable",
      subtitle: "Flexible Solutions",
      image: "/assets/girlholdingpictures.png",
      description:
        "Scale your creative operations up or down based on your needs, with flexible solutions that grow with your business requirements.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Super <span className="text-primary">Talented</span> and Super{" "}
            <span className="text-primary">Fast</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect blend of human creativity and AI efficiency
            with our world-class creative team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-card overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer group"
            >
              <div className="flex flex-col h-auto overflow-hidden">
                {/* Image wrapper MUST be relative + fixed height for fill */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>

                  {/* Paragraph expands on hover */}
                  <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentedSection;
