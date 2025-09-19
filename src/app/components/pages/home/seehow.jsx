import React from "react";

const SeeHow = () => {
  const cards = [
    {
      id: 1,
      img: "/assets/laptop-3.png",
      title: "Oyster",
      desc: "Illustration Design, eBook & Digital Reports",
    },
    {
      id: 2,
      img: "/assets/book.png",
      title: "Pernod Ricard",
      desc: "ebook & Digital Reports, Video Production",
    },
    {
      id: 3,
      img: "/assets/mb.png",
      title: "Picsart",
      desc: "Ads Creative, Social Media Creative",
    },
       {
      id: 4,
      img: "/assets/piano-2.png",
      title: "Roland",
      desc: "Ads Creative, Social Media Creative",
    },
    {
      id: 5,
      img: "/assets/redit.png",
      title: "Reddit",
      desc: "Motion Design, Social Media Creative",
    },
    {
      id: 6,
      img: "/assets/backingthemost.png",
      title: "Antler",
      desc: "Brand Idetity, Motion Design, Social Media Creative",
    },
  ];

  return (
    <section className="lg:py-16 md:py-12 pt-10 bg-body">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        {/* Heading */}
        <div className="space-y-4 text-button-text">
          <p className="uppercase">OUR WORK</p>
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[60px] font-normal leading-tight">
            See how{" "}
            <span className="italic text-[28px] md:text-[36px] lg:text-[44px] xl:text-[64px]">
              top brands
            </span>{" "}
            use Superside
          </h2>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Large first card */}
          <div className="flex-[2] flex flex-col overflow-hidden group">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
              <img
                src={cards[0].img}
                alt={cards[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col gap-2 text-left text-body-alt flex-1">
              <h3 className="text-xl font-semibold">{cards[0].title}</h3>
              <p>{cards[0].desc}</p>
            </div>
          </div>

          {/* Two smaller cards side by side */}
          {[cards[1], cards[2]].map((card) => (
            <div
              key={card.id}
              className="flex-1 flex flex-col overflow-hidden group"
            >
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 text-left text-body-alt flex-1">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Two smaller cards side by side */}
          {[cards[3], cards[4]].map((card) => (
            <div
              key={card.id + "-row2"}
              className="flex-1 flex flex-col overflow-hidden group"
            >
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 text-left text-body-alt flex-1">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}

          {/* Large last card */}
          <div className="flex-[2] flex flex-col overflow-hidden group">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
              <img
                src={cards[5].img}
                alt={cards[5].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col gap-2 text-left text-body-alt flex-1">
              <h3 className="text-xl font-semibold">{cards[5].title}</h3>
              <p>{cards[5].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeHow;
