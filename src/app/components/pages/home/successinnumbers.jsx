import React from "react";

const SuccessInNumbers = () => {
  return (
    <section className="text-body py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <p className="uppercase tracking-wide text-xs sm:text-sm">
          Success in numbers
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal">
          The best return on{" "}
          <span className="italic font-serif">your investment</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-12 md:mt-16 container mx-auto">
        {/* 1 */}
        <div className="flex flex-col  sm:flex-row justify-between items-start gap-4 sm:gap-6 border-b border-gray-700 pb-6">
          <p className="text-base text-[color-mix(in_oklab,_#F7F9F2_50%,_transparent)]  text-opacity-50 sm:text-lg max-w-xs order-2 sm:order-1">
            Startup, enterprises and mid-market companies trust Superside to
            deliver pixel-perfect creative, at scale.
          </p>
          <p className="text-4xl italic sm:text-5xl md:text-6xl font-serif order-1 sm:order-2">
            500+
          </p>
        </div>

        {/* 2 */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6 border-b border-gray-700 pb-6">
          <p
            className="text-base text-opacity-50 text-[color-mix(in_oklab,_#F7F9F2_50%,_transparent)] sm:text-lg max-w-xs order-2 sm:order-1"
          >
            Projects delivered to this day and counting.
          </p>
          <p className="text-4xl italic sm:text-5xl md:text-6xl font-serif order-1 sm:order-2">
            70k+
          </p>
        </div>

        {/* 3 - With additional "Read more" text */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6 border-b border-gray-700 pb-6">
          <div className="flex flex-col justify-between h-full order-2 sm:order-1 w-full sm:max-w-xs">
            <p className="text-base text-[color-mix(in_oklab,_#F7F9F2_50%,_transparent)]  sm:text-lg mb-2 sm:mb-3">
              Brands see a three-year ROI of 94% on their Superside
              subscription.
            </p>
            <p className="text-sm cursor-pointer">
              Read more in the Forrester TEI report
            </p>
          </div>
          <div className="order-1 sm:order-2 flex-shrink-0">
            <p className="text-4xl italic sm:text-5xl md:text-6xl font-serif ">
              94%
            </p>
          </div>
        </div>

        {/* 4 - With additional "Read more" text */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6 border-b border-gray-700 pb-6">
          <div className="flex flex-col justify-between h-full order-2 sm:order-1 w-full sm:max-w-xs">
            <p className="text-base text-[color-mix(in_oklab,_#F7F9F2_50%,_transparent)]  sm:text-lg mb-2 sm:mb-3">
              Brands see a 6-month payback period on their Superside
              subscription.
            </p>
            <p className="text-sm cursor-pointer">
              Read more in the Forrester TEI report
            </p>
          </div>
          <div className="order-1 sm:order-2 flex-shrink-0 italic">
            <p className="text-4xl italic sm:text-5xl md:text-6xl font-serif">
              6 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessInNumbers;
