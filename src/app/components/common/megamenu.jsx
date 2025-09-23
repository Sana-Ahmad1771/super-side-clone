"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaintBrush, FaVideo, FaRobot, FaBullhorn } from "react-icons/fa";

const MegaMenu = ({ setIsMegaMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
        setIsMegaMenuOpen(true);   // 👈 enable blur in Header
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsMegaMenuOpen(false);  // 👈 disable blur in Header
      }}
    >
      {/* Trigger Button */}
      <button className="px-4 py-2 text-body hover:text-[#D8FF85] cursor-pointer flex items-center">
        Services <span className="ml-1">▾</span>
      </button>

      {/* Dropdown Panel - Full width */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Column 1 */}
                <div>
                  <h6 className="bg-[#D8FF85] px-3 py-1 rounded-md text-[#1E3D69] font-medium inline-block mb-4">
                    Creative design services
                  </h6>
                  <ul className="space-y-4 text-body-alt">
                    <li className="flex items-start gap-3">
                      <FaPaintBrush className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">Ad creative</p>
                        <p className="text-sm text-gray-600">
                          Eye-catching designs that perform
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaPaintBrush className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">Social media creative</p>
                        <p className="text-sm text-gray-600">
                          Engaging assets for all platforms
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaPaintBrush className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">Presentation design</p>
                        <p className="text-sm text-gray-600">
                          Professional and engaging presentations
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h6 className="bg-[#3A7D44] text-white px-3 py-1 rounded-md font-medium inline-block mb-4">
                    Specialized production services
                  </h6>
                  <ul className="space-y-4 text-body-alt">
                    <li className="flex items-start gap-3">
                      <FaVideo className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">Video production</p>
                        <p className="text-sm text-gray-600">
                          Effortless video production at scale
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaVideo className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">Motion graphics</p>
                        <p className="text-sm text-gray-600">
                          Dynamic animations for your brand
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h6 className="bg-[#1E3D69] text-white px-3 py-1 rounded-md font-medium inline-block mb-4">
                    AI services
                  </h6>
                  <ul className="space-y-4 text-body-alt">
                    <li className="flex items-start gap-3">
                      <FaRobot className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">AI enhanced creative</p>
                        <p className="text-sm text-gray-600">
                          Human brilliance powered by AI
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaRobot className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">AI content generation</p>
                        <p className="text-sm text-gray-600">
                          Automated content creation
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div>
                  <h6 className="bg-[#D6B370] px-3 py-1 rounded-md font-medium inline-block mb-4">
                    Marketing services
                  </h6>
                  <ul className="space-y-4 text-body-alt">
                    <li className="flex items-start gap-3">
                      <FaBullhorn className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">Marketing strategy</p>
                        <p className="text-sm text-gray-600">
                          Grow your brand with expert consultants
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaBullhorn className="text-gray-500 mt-1" />
                      <div>
                        <p className="font-medium">Campaign management</p>
                        <p className="text-sm text-gray-600">
                          End-to-end campaign execution
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;
