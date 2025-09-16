import React from "react";

const SuccessInNumbers = () => {
  return (
    <section className="text-body py-20 px-6">
      <div className="text-center space-y-4 container mx-auto">
        <p className="uppercase tracking-wide text-sm">Success in numbers</p>
        <h2 className="text-3xl md:text-4xl font-normal">
          The best return on{" "}
          <span className="italic font-serif">your investment</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 container mx-auto">
        {/* 1 */}
        <div className="flex justify-between items-start border-b border-gray-700 pt-6">
          <p className="text-lg max-w-xs">
            Startup, enterprises and mid-market companies trust Superside to
            deliver pixel-perfect creative, at scale.
          </p>
          <p className="text-6xl font-serif">500+</p>
        </div>

        {/* 2 */}
        <div className="flex justify-between items-start border-b border-gray-700 pt-6">
          <p className="text-lg max-w-xs">
            Projects delivered to this day and counting.
          </p>
          <p className="text-6xl font-serif">70k+</p>
        </div>

        {/* 3 */}
        <div className="flex justify-between sm:flex-col-reverse items-start border-b border-gray-700 pt-6">
          <p className="text-lg max-w-xs">
            Brands see a three-year ROI of 94% on their Superside subscription.
          </p>
          <p className="text-6xl font-serif">94%</p>
        </div>

        {/* 4 */}
        <div className="flex justify-between items-start border-b border-gray-700 pt-6">
          <p className="text-lg max-w-xs">
            Brands see a 6-month payback period on their Superside subscription.
          </p>
          <p className="text-6xl font-serif">6 months</p>
        </div>
      </div>
    </section>
  );
};

export default SuccessInNumbers;
