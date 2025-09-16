"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/../../public/assets/nav-logo-superside.png";
import { IoCloseSharp } from "react-icons/io5";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./megamenu";
import MegaMenuWhyUs from "./megamenuwhyus";
import MegaMenuResources from "./megamenuResources";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="sticky top-0 z-50 w-full font-inter font-normal text-base shadow-md bg-background">
      {/* Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:container mx-auto h-16 sm:h-20">
        {/* Logo */}
        <div className="flex-shrink-0 z-10">
          <a href="/">
            <Image
              src={Logo}
              alt="safecare-logo"
              width={120}
              height={40}
              className="w-24 sm:w-28 md:w-32 h-auto"
              priority
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex justify-center items-center space-x-4 xl:space-x-6 2xl:space-x-8 list-none">
            <li className="relative">
              <Link href="/" className="hover:text-[#D8FF85] text-sm xl:text-base">
                <MegaMenu />
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#D8FF85] text-sm xl:text-base">
                Our work
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#D8FF85] text-sm xl:text-base">
                <MegaMenuWhyUs />
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#D8FF85] text-sm xl:text-base">
                <MegaMenuResources />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#D8FF85] text-sm xl:text-base">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#D8FF85] text-sm xl:text-base">
                Enterprise
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side Buttons (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="px-4 py-2 xl:px-5 xl:py-3 bg-buttonbg text-button-text rounded-full cursor-pointer font-medium hover:opacity-90 transition text-sm">
            Book a demo
          </button>
          <button className="px-4 py-2 xl:px-5 xl:py-3 bg-buttonbg text-button-text rounded-full cursor-pointer font-medium hover:opacity-90 transition text-sm ml-2">
            Sign in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative z-50">
          <button onClick={toggleMenu} className="p-2">
            {!isMenuOpen ? (
              <AlignRight size={24} className="sm:size-7" color={"#D8FF85"} />
            ) : (
              <IoCloseSharp size={24} className="sm:size-7" color={"#D8FF85"} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={closeMenu}
              />
              
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-background z-50 flex flex-col lg:hidden"
              >
                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full overflow-y-auto">
                  <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <a href="/" onClick={closeMenu}>
                      <Image
                        src={Logo}
                        width={100}
                        height={36}
                        priority
                        alt="logo"
                        className="w-24 sm:w-28"
                      />
                    </a>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex-1 p-4">
                    <ul className="flex flex-col space-y-4 list-none">
                      <li>
                        <Link 
                          href="/" 
                          onClick={closeMenu} 
                          className="block py-3 hover:text-[#D8FF85] text-lg"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/about" 
                          onClick={closeMenu} 
                          className="block py-3 hover:text-[#D8FF85] text-lg"
                        >
                          Our work
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/products" 
                          onClick={closeMenu} 
                          className="block py-3 hover:text-[#D8FF85] text-lg"
                        >
                          Why us
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/gallery" 
                          onClick={closeMenu} 
                          className="block py-3 hover:text-[#D8FF85] text-lg"
                        >
                          Resources
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/contact" 
                          onClick={closeMenu} 
                          className="block py-3 hover:text-[#D8FF85] text-lg"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/contact" 
                          onClick={closeMenu} 
                          className="block py-3 hover:text-[#D8FF85] text-lg"
                        >
                          Enterprise
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Mobile Menu Buttons */}
                  <div className="p-4 border-t border-gray-200 space-y-3">
                    <button 
                      className="w-full px-4 py-3 bg-buttonbg text-button-text rounded-full cursor-pointer font-medium hover:opacity-90 transition"
                      onClick={closeMenu}
                    >
                      Book a demo
                    </button>
                    <button 
                      className="w-full px-4 py-3 bg-buttonbg text-button-text rounded-full cursor-pointer font-medium hover:opacity-90 transition"
                      onClick={closeMenu}
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Copy Alert */}
      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#1E3D69] text-white px-4 py-2 rounded shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Header;