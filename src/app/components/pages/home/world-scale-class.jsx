"use client";

import Image from "next/image";

export default function WorldScaleClass() {
  return (
    <>
      {/* First Section */}
      <section className="bg-[#E7F0E6]">
        <div className="flex flex-col xl:flex-row items-center gap-6 md:gap-8 lg:gap-10">
          {/* Left Content */}
          <div className="flex flex-col justify-between min-h-[50vh] xl:h-[100vh] text-left px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-8 2xl:pl-[100px] py-12 md:py-16 lg:py-20 text-body-alt w-full max-w-full xl:max-w-[730px] order-1 xl:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-body-alt pb-2 sm:pb-3">
                <p className="uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  Work with the best
                </p>
              </div>
              <h2 className="">
                <span className="instrument-serif-regular-italic text-[34px] sm:text-[39px] md:text-[49px] lg:text-[59px] xl:text-[64px]">World-class talent</span> with no borders
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mt-6 sm:mt-8 md:mt-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
                Work with the top 1% of global creative talent – elite
                designers, project managers, animators, copywriters, AI
                technologists and more, recruited from the best brands and
                agencies.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                Plus, a dedicated project manager to ensure your briefs stay on
                track from start to finish.
              </p>

              <button className="bg-background text-body px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800 transition-colors duration-300 w-fit mt-4 sm:mt-6">
                Book a demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full xl:flex-1 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[100vh] order-2 xl:order-2">
            <Image
              src="/assets/women-holding-laptop.png"
              alt="World-class talent"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-background">
        <div className="flex flex-col xl:flex-row items-center gap-6 md:gap-8 lg:gap-10">
          {/* Left Image */}
          <div className="relative w-full xl:flex-1 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[100vh] order-2 xl:order-1">
            <Image
              src="/assets/yoga.png"
              alt="Scale your creative team"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 50vw"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between min-h-[50vh] xl:h-[100vh] text-left px-4 sm:px-6 md:px-8 lg:px-12 xl:pr-8 2xl:pr-[30px] py-12 md:py-16 lg:py-20 text-heading w-full max-w-full xl:max-w-[730px] order-1 xl:order-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-heading pb-2 sm:pb-3">
                <p className="uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  onboarding
                </p>
              </div>
              <h2 className="text-heading">
                <span className="instrument-serif-regular-italic text-[34px] sm:text-[39px] md:text-[49px] lg:text-[59px] xl:text-[64px]">Scale your creative team</span> with Superside in as little as 1 week
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mt-6 sm:mt-8 md:mt-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
                Our agile onboarding process quickly immerses us in your brand,
                goals, and guidelines, allowing us to deliver impactful creative
                almost immediately.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                The average time from contract start to submitting the first
                project with us is 7.6 days.
              </p>

              <button className="bg-buttonbg text-button-text px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:opacity-90 transition-opacity duration-300 w-fit mt-4 sm:mt-6">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}