import React from "react";

const Support = () => {
  return (
    <section className="bg-body lg:py-30">
      <div className="flex flex-col lg:flex-row container mx-auto items-center justify-between gap-8 py-12 px-6">
        {/* Left Text Content */}
        <div className="w-full text-button-text space-y-8">
          <p className="text-lg uppercase tracking-widest text-primary border-b border-gray-500 pb-3">
            A new era of creative work
          </p>
          <div className="flex flex-col gap-6 max-w-full ">
            <h2 className="font-heading text-[24px] leading-14 max-w-[700px] md:text-[35px] lg:text-[45px] xl:text-[55px]">
              The support your creative team{" "}
              <span className="italic font-serif">has been asking for</span>
            </h2>

            <p className="lg:text-[30px] text-[18px] font-sans max-w-[530px] leading-6 lg:leading-8 w-full">
              Superside is your dedicated, on-call creative team to expand your
              production capacity and extend your team’s creative capabilities.
            </p>

            <p className="text-[18px] font-sans w-full leading-6 lg:leading-8 ">
              See us as an extension of your team, freeing you to focus on your
              most impactful and creative work.
            </p>

            <button className="px-6 py-3 bg-background text-body w-fit rounded-full cursor-p font-medium hover:opacity-90 transition">
              Book a demo
            </button>
          </div>
        </div>

        {/* Right Video Content */}
        <div className="w-full md:w-1/2 lg:w-[45%] mt-6 md:mt-0 flex items-start">
          <video
            className="max-w-[700px] h-[400px] max-h-[100vh] object-cover rounded-2xl shadow-lg"
            controls
            autoPlay
            loop
            muted
            aria-label="video of creative support"
          >
            <source src={"/video-3.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Support;
