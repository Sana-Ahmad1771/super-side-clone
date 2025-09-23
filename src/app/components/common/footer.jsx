"use client";

import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="">
      <section
        className=" bg-[#0c1d1d] text-body bg-cover bg-center pt-40"
        style={{ backgroundImage: "url('/assets/footer-superside-img.png')" }}
      >
        {/* Content */}
        <div className=" container mx-auto px-6 lg:px-12 py-10 ">
          {/* Heading + CTA */}
          <div className="text-center mb-16">
            <h2 className="text-body lg:leading-16">
              Your <span className="instrument-serif-regular-italic text-[34px] sm:text-[39px] md:text-[49px] lg:text-[59px] xl:text-[64px]">creative team’s</span> <br className="hidden sm:block"/>
              creative team™
            </h2>
            <button className="mt-6 bg-[#ccff66] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#b3ff33] transition">
              Book a demo
            </button>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-500 pt-10">
            {/* Services */}
            <div>
              <h6 className="text-body mb-4">Services</h6>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="font-medium">Creative design services ↗</li>
                <li>Ad creative</li>
                <li>Social media creative</li>
                <li>Presentation design</li>
                <li>Illustration design</li>
                <li>Branding services</li>
                <li>Email creation</li>
                <li>Web design</li>
                <li>eBooks & report design</li>
                <li>Concept creation</li>
                <li>Print design</li>
                <li>Packaging & merchandise design</li>
              </ul>
            </div>

            {/* Specialized production */}
            <div>
              <h6 className="text-body mb-4">
                Specialized production services ↗
              </h6>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Video production</li>
                <li>Motion design</li>
                <li>Immersive design</li>
              </ul>

              <h6 className="text-body mt-6 mb-4">AI services</h6>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>AI-powered creative</li>
                <li>AI consulting</li>
              </ul>

              <h6 className="text-body mt-6 mb-4">Marketing services ↗</h6>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Marketing strategy</li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h6 className="text-body mb-4">Navigation</h6>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="font-medium">Main</li>
                <li>Our work</li>
                <li>Our people</li>
                <li>About us</li>
                <li>Pricing</li>
                <li>Trust center</li>
                <li>Careers</li>
                <li>Superside vs. Alternatives</li>
                <li>Forrester TEI Report</li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h6 className="text-body mb-4">Learn</h6>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Blog</li>
                <li>Events & Summits</li>
                <li>Guides & Reports</li>
                <li>Customer Stories</li>
                <li>Video Library</li>
                <li>Playbooks</li>
                <li>What’s new</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-500 pt-6 text-sm text-gray-400">
            <p>© 2025 Superside. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of use
              </a>
              <a href="#" className="hover:text-white">
                Status page
              </a>
              <a href="#" className="hover:text-white">
                DMCA
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#">
                <Linkedin size={18} />
              </a>
              <a href="#">
                <Facebook size={18} />
              </a>
              <a href="#">
                <Instagram size={18} />
              </a>
              <a href="#">
                <Youtube size={18} />
              </a>
              <a href="#">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
