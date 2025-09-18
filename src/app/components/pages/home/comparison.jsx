"use client";

import { Check, X, UsersRound, UserPlus, BriefcaseBusiness, Brush } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    {
      title: "Superside",
      desc: "Work with the top 1% of global creative talent, recruited from the best brands and agencies.",
      bg: "bg-buttonbg",
      checks: [true, true, true, true, true],
      icon: UsersRound,
      checkColor: "text-black",
      textColor: "text-black",
      hideIcon: true,
    },
    {
      title: "In-house team",
      desc: "In-house teams don't always have the skill mix or bandwidth to handle every request that the business needs.",
      checks: [false, false, true, false, false],
      icon: UsersRound,
      checkColor: "text-white",
      textColor: "text-white",
      hideIcon: false,
    },
    {
      title: "Creative agencies",
      desc: "Working with full scale creative agencies can be slow, costly, and inflexible.",
      checks: [false, false, true, false, false],
      icon: Brush,
      checkColor: "text-white",
      textColor: "text-white",
      hideIcon: false,
    },
    {
      title: "Freelancers",
      desc: "Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality.",
      checks: [true, true, false, false, true],
      icon: UserPlus,
      checkColor: "text-white",
      textColor: "text-white",
      hideIcon: false,
    },
    {
      title: "Self-service tools",
      desc: "These solutions make incremental improvements to capacity, and work mostly for simpler, repetitive tasks.",
      checks: [false, false, true, true, false],
      icon: BriefcaseBusiness,
      checkColor: "text-white",
      textColor: "text-white",
      hideIcon: false,
    },
  ];

  const columns = ["Speed", "Flexibility", "Quality", "Scalability", "Cost-effectiveness"];

  return (
    <section className="bg-background text-body py-16 px-4">
      <div className="lg:container mx-auto md:px-5">
        {/* Header */}
        <div className="text-center mb-12 text-body">
          <p className="uppercase text-sm">easy & hassle-free</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal">
            Every type of creative work you'll <br /> ever need,{" "}
            <span className="italic text-[28px] sm:text-[34px] md:text-[40px] font-normal">
              and more
            </span>
          </h2>                                 
        </div>

        {/* Table/slider (works on all screens) */}
        <div className="relative overflow-x-auto rounded-lg">
          <div
            className="
              min-w-[600px] 
              grid 
              grid-cols-[minmax(180px,1.5fr)_repeat(5,minmax(80px,1fr))]
              md:grid-cols-[minmax(220px,1.9fr)_repeat(5,minmax(100px,1fr))]
              lg:grid-cols-[minmax(250px,2fr)_repeat(5,minmax(120px,1fr))]
            "
          >
            {/* Header row */}
            <div className="p-4 bg-background left-0 z-20 rounded-tl-lg"></div>
            {columns.map((col, i) => (
              <div key={i} className="py-4 lg:text-2xl sm:text-lg text-center font-normal bg-background">
                {col}
              </div>
            ))}

            {/* Rows */}
            {rows.map((row, idx) => (
              <div
                key={idx}
                className={`
                  ${idx !== rows.length - 1 ? "border-b border-buttonbg/30" : ""}
                  col-span-6 grid 
                  grid-cols-[minmax(180px,1.5fr)_repeat(5,minmax(80px,1fr))]
                  md:grid-cols-[minmax(220px,1.9fr)_repeat(5,minmax(100px,1fr))]
                  lg:grid-cols-[minmax(250px,2fr)_repeat(5,minmax(120px,1fr))]
                  ${idx === 0 ? row.bg : ""} ${idx === 0 ? "rounded-full" : ""}`}
              >
                {/* Left sticky column */}
                <div
                  className={`flex items-center lg:gap-8 gap-4 lg:py-10 py-5 lg:px-5 sticky left-0 z-10 ${
                    idx === 0 ? row.bg : "bg-background"
                  } ${idx === 0 ? "rounded-l-full" : ""}`}
                >
                  <div
                    className={`hidden md:flex lg:w-22 lg:h-22 md:w-12 md:h-12 sm:h-12 sm:w-12 items-center justify-center rounded-lg ${
                      row.hideIcon ? "bg-transparent" : "bg-gray-500/30"
                    } shrink-0`}
                  >
                    {!row.hideIcon && <row.icon className="lg:w-9 lg:h-9" />}
                  </div>
                  <div className="min-w-0">
                    <h4 className={`font-semibold lg:text-2xl sm:text-lg ${row.textColor}`}>
                      {row.title}
                    </h4>
                    <p
                      className={`hidden md:block ${
                        row.textColor === "text-black" ? "text-black/70" : "text-gray-400"
                      } lg:text-[16px] sm:text-sm mt-1 lg:max-w-[230px]`}
                    >
                      {row.desc}
                    </p>
                  </div>
                </div>

                {/* Check/X cells */}
                {row.checks.map((val, i) => (
                  <div
                    key={i}
                    className={`p-4 text-center flex items-center justify-center ${
                      idx === 0 ? row.bg : ""
                    } ${i === row.checks.length - 1 && idx === 0 ? "rounded-r-full" : ""}`}
                  >
                    {val ? (
                      <Check className={`lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 ${row.checkColor}`} />
                    ) : (
                      <X className={`lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 ${row.checkColor}`} />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}