import React from "react";
import { Pencil, Slack, FolderKanban } from "lucide-react";

const TechEnabled = () => {
  return (
    <section className="py-16 bg-[#f8f9f5]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between max-w-full mb-10 text-body-alt gap-6">
          <div className="max-w-[730px]">
            <p className="uppercase text-sm tracking-wider">Easy & Hassle-Free</p>
            <h2 className="lg:leading-16 mt-2">
              Tech enabled and made to{" "}
              <span className="instrument-serif-regular-italic text-[34px] sm:text-[39px] md:text-[49px] lg:text-[59px] xl:text-[64px]">work for you.</span>
            </h2>
          </div>
          <div className="flex lg:justify-end lg:items-end">
            <p className="mt-2 lg:mt-4 max-w-md">
              No matter your creative need, submitting and managing a project is
              effortless.
            </p>
          </div>
        </div>

        {/* Two Column Flex */}
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[902px]">
          {/* Left Column */}
          <div className="flex flex-col gap-4 flex-1 lg:h-[902px] w-full order-1">
            {/* Row with 2 small cards */}
            <div className="flex flex-col md:flex-row gap-4 lg:h-[451px]">
              {/* Card 1 */}
              <div className="flex-1 rounded-2xl relative bg-buttonbg p-6 text-body-alt flex flex-col justify-between h-[200px] md:h-[300px] lg:h-full">
                <div className="z-10 relative">
                  <Pencil className="w-6 h-6" />
                  <h6 className=" font-semibold mt-3">
                    From brief to review and sign off.
                  </h6>
                  <p className="text-sm mt-2">
                    Welcome to Superspace. Quickly submit a brief, review in
                    platform, keep track of usage and more in one easy place.
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>

              {/* Card 2 */}
              <div
                className="flex-1 rounded-2xl relative p-6 text-body-alt flex flex-col justify-between h-[200px] md:h-[300px] lg:h-full"
                style={{
                  backgroundImage:
                    "url(/assets/slack-approved-imag-superside.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="z-10 relative">
                  <Slack className="w-6 h-6" />
                  <h6 className="font-semibold mt-3">
                    Integrate with your favorite platforms.
                  </h6>
                  <p className="text-sm mt-2">
                    Already using platforms like Asana/Jira/Slack? They integrate too.
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>
            </div>

            {/* Card 3 (wide card) */}
            <div
              className="rounded-2xl relative p-6 text-body flex flex-col justify-between h-[200px] md:h-[300px] lg:h-[451px] order-4 lg:order-3"
              style={{
                backgroundImage: "url(/assets/mobile-bg-yellow-superside.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="z-10 relative">
                <FolderKanban className="w-6 h-6" />
                <h6 className="text-body font-semibold mt-3">
                  Learn from our customers' successful projects
                </h6>
                <p className="text-sm mt-2">
                  Reference work from the world's best brands on our platform.
                </p>
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Right Column (Card 4 tall card) */}
          <div className="w-full lg:w-[35%] flex order-3 lg:order-4">
            <div
              className="rounded-2xl relative p-6 text-body flex flex-col justify-between w-full h-[200px] md:h-[300px] lg:h-[902px]"
              style={{
                backgroundImage: "url(/assets/mobil-dold.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="z-10 relative">
                <FolderKanban className="w-6 h-6" />
                <h6 className="text-body font-semibold mt-3">
                  Organize and share all your brand assets
                </h6>
                <p className="text-sm mt-2">
                  Stop searching—store and organize everything on our platform.
                </p>
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechEnabled;
