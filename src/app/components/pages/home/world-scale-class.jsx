"use client";

import Image from "next/image";

export default function WorldScaleClass() {
  return (
    <>
      {/* First Section */}
      <section className="bg-[#E7F0E6]">
        <div className="flex flex-col xl:flex-row items-center gap-6 md:gap-8 lg:gap-10 ">
          {/* Left Content - First on mobile, then image, then content on larger screens */}
          <div className="flex flex-col justify-between min-h-[50vh] xl:h-[100vh] text-left lg:pl-12 xl:pl-8 2xl:pl-[100px] px-3 py-12 md:py-16 lg:py-20 text-body-alt w-full max-w-full xl:max-w-[730px] order-1 xl:order-1">
            <div>
              <div className="border-b border-body-alt pb-2">
                <p className="uppercase tracking-wide text-xs sm:text-sm">
                  Work with the best
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-normal leading-tight pt-6">
                <span className="italic font-normal xl:text-[64px]">World-class talent</span>{" "}
                with <br className="hidden sm:block" />
                no borders
              </h2>
            </div>
            <div className="space-y-4 md:space-y-5 mt-6 md:mt-0">
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] xl:text-[28px]">
                Work with the top 1% of global creative talent – elite
                designers, project managers, animators, copywriters, AI
                technologists and more, recruited from the best brands and
                agencies.
              </p>

              <p className="text-sm md:text-base lg:text-lg">
                Plus, a dedicated project manager to ensure your briefs stay on
                track from start to finish.
              </p>

              <button className="bg-background text-body px-5 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition mt-4">
                Book a demo
              </button>
            </div>
          </div>

          {/* Right Image - Second on mobile, hidden between 1024-1440 */}
          <div className="relative w-full xl:flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[100vh] order-2 xl:order-2">
            <Image
              src="/assets/women-holding-laptop.png"
              alt="World-class talent"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 0vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-background">
        <div className="flex flex-col xl:flex-row items-center gap-6 md:gap-8 lg:gap-10 ">
          {/* Left Image - First on mobile, hidden between 1024-1440 */}
          <div className="relative w-full xl:flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:pr-12 lg:h-[600px] xl:h-[100vh] order-2 xl:order-1">
            <Image
              src="/assets/yoga.png"
              alt="Scale your creative team"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 0vw, 50vw"
            />
          </div>

          {/* Right Content - Second on mobile, then image, then content on larger screens */}
          <div className="flex flex-col justify-between min-h-[50vh] xl:h-[100vh] text-left  lg:pr-12 xl:pr-8 2xl:pr-[30px] px-3 py-12 md:py-16 lg:py-20 text-heading w-full max-w-full xl:max-w-[730px] order-1 xl:order-2">
            <div>
              <div className="border-b border-heading pb-2">
                <p className="uppercase tracking-wide text-xs sm:text-sm">
                  onboarding
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-normal leading-tight pt-6">
                <span className="italic font-normal xl:text-[64px]">
                  Scale your creative team
                </span>{" "}
                <br className="hidden sm:block" />
                with Superside in as <br className="hidden sm:block" /> little as 1 week
              </h2>
            </div>
            <div className="space-y-4 md:space-y-5 mt-6 md:mt-0">
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] xl:text-[28px]">
                Our agile onboarding process quickly immerses us in your brand,
                goals, and guidelines, allowing us to deliver impactful creative
                almost immediately.
              </p>

              <p className="text-sm md:text-base lg:text-lg">
                The average time from contract start to submitting the first
                project with us is 7.6 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}