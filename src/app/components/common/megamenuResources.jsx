"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaintBrush } from "react-icons/fa";

const MegaMenuResources = ({ setIsMegaMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
        setIsMegaMenuOpen(true); // 🔥 blur background
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsMegaMenuOpen(false); // 🔥 remove blur
      }}
    >
      {/* Trigger Button */}
      <button className="px-4 py-2 text-body hover:text-[#D8FF85] cursor-pointer flex items-center">
        Resources <span className="ml-1">▾</span>
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 w-full bg-[#F7F9F2] shadow-lg z-40"
            style={{ top: "80px" }}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-between gap-8">
                {/* Column 1 - Services */}
                <div className="w-1/3 flex flex-col">
                  <h3 className="text-body-alt py-1 font-medium inline-block mb-4">
                    Creative design services →
                  </h3>
                  <ul className="flex flex-col justify-between h-auto text-body-alt">
                    {[
                      {
                        title: "Ad creative",
                        desc: "Eye-catching designs that perform",
                      },
                      {
                        title: "Social media creative",
                        desc: "Engaging assets for all platforms",
                      },
                      {
                        title: "Presentation design",
                        desc: "Professional and engaging presentations",
                      },
                      {
                        title: "Brand identity",
                        desc: "Complete brand identity packages",
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors"
                      >
                        <FaPaintBrush className="text-gray-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 - Blogs / Resources */}
                <div className="w-2/3 flex gap-8">
                  {/* Left side column */}
                  <div className="flex-1 flex flex-col text-body-alt">
                    <h3 className="font-medium mb-4">Blogs →</h3>
                    <div className="flex flex-col gap-6">
                      {/* Card 1 */}
                      <div className="p-4 flex flex-col bg-white/40 rounded-lg hover:bg-white/60 transition">
                        <div className="w-full h-40 overflow-hidden mb-3">
                          <img
                            src="/assets/studystable-navbar.png"
                            alt="Stable study environment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Our technology</p>
                          <p className="text-sm text-gray-500 mt-1">
                            The tech powering creative edge
                          </p>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="p-4 flex flex-col bg-white/40 rounded-lg hover:bg-white/60 transition">
                        <div className="w-full h-40 overflow-hidden mb-3">
                          <img
                            src="/assets/studystable-navbar.png"
                            alt="Case studies"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Case studies</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Success stories from our clients
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side column */}
                  <div className="flex-1 flex flex-col text-body-alt">
                    <h3 className=" font-medium mb-4">Customer stories →</h3>
                    <div className="flex flex-col gap-6">
                      {/* Card 3 */}
                      <div className="p-4 flex flex-col bg-white/40 rounded-lg hover:bg-white/60 transition">
                        <div className="w-full h-40 overflow-hidden mb-3">
                          <img
                            src="/assets/studystable-navbar.png"
                            alt="Blog insights"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Blog & insights</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Latest trends and industry insights
                          </p>
                        </div>
                      </div>

                      {/* Card 4 */}
                      <div className="p-4 flex flex-col bg-white/40 rounded-lg hover:bg-white/60 transition">
                        <div className="w-full h-40 overflow-hidden mb-3">
                          <img
                            src="/assets/studystable-navbar.png"
                            alt="Resources library"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Resources library</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Templates, guides and tools
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenuResources;
