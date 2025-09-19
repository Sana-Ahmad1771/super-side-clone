"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MegaMenuWhyUs = ({ setIsMegaMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
        setIsMegaMenuOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsMegaMenuOpen(false);
      }}
    >
      {/* Trigger Button */}
      <button className="px-4 py-2 text-body hover:text-[#D8FF85] cursor-pointer flex items-center font-medium">
        Why us <span className="ml-1">▾</span>
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 w-full bg-body shadow-lg z-40 border-t border-gray-200"
            style={{ top: "80px" }}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div className="flex flex-col text-body-alt">
                  <div className="w-full h-52 overflow-hidden mb-4">
                    <img 
                      src="/assets/madewithAI-navbar.png" 
                      alt="AI created content" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <div>
                      <p className="font-mediumt">AI excellence</p>
                      <p className="text-sm text-gray-500">
                        Your shortcut to AI's creative advantage
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col text-body-alt">
                  <div className="w-full h-52 overflow-hidden mb-4">
                    <img 
                      src="/assets/studystable-navbar.png" 
                      alt="Stable study environment" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <div>
                      <p className="font-normal ">Our technology</p>
                      <p className="text-sm text-gray-500">
                        The tec powering creative edge
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col text-body-alt">
                  <div className="w-full h-52 overflow-hidden mb-4">
                    <img 
                      src="/assets/grouppeople-navbar.png" 
                      alt="Collaborative team" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <div>
                      <p className="font-normal">Our Creative Talent</p>
                      <p className="text-sm text-gray-600">
                        Meet your dedicated team
                      </p>
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

export default MegaMenuWhyUs;
