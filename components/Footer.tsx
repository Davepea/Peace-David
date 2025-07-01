"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  FaXTwitter,
  FaInstagram,
  FaMedium,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  const mymar2 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(".marque_parts", {
        repeat: -1,
        xPercent: -100,
        duration: 15,
        ease: "linear",
      }).totalProgress(0.5);

      gsap.set(".marquee_inner", { xPercent: -50 });
    },
    { scope: mymar2 }
  );

  return (
    <footer className="md:px-[100px] px-[20px] font-clashDisplay flex flex-col text-[#707070] justify-between max-w-[1500px] text-[14px] m-auto font-space-grotesk">
      

      <div className="grid md:grid-cols-5 md:px-2 md:text-start text-center">
        <div className="md:col-span-2">
          <small className=" md:text-[0.85vw] text-[10px] font-mono  font-[100] p-1 mb-[20px] bg-[#242424] text-[#b0b0b0]">contact</small>
        </div>
        <div className="md:col-span-3 font-satoshi">
          <li className="grid md:grid-cols-2 md:text-sm xs:text-xs border-b border-[#eeeeee0c] py-2 gap-3">
            <span>+234 (0) 810 299 6646</span>
            <Link href="https://www.instagram.com/__peacedavid">
              <div className="flex items-center md:justify-start justify-center gap-2">
                <FaInstagram />
                <span>Follow me on Instagram</span>
              </div>
            </Link>
          </li>

          <li className="grid md:grid-cols-2 md:text-sm xs:text-xs border-b border-[#eeeeee0c] py-2 gap-3">
            <span>dev.peacedave@gmail.com</span>
            <Link href="https://medium.com/@dev.peacedave">
              <div className="flex items-center md:justify-start  justify-center gap-2">
                <FaMedium />
                <span>Read on Medium</span>
              </div>
            </Link>
          </li>

          <li className="grid md:grid-cols-2 md:text-sm xs:text-xs border-b border-[#eeeeee0c] py-2 gap-3">
            <Link href="https://www.linkedin.com/in/web-developer-0b1121235/">
              <span>Check me up on LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/peaceboy0001">
              <div className="flex items-center md:justify-start  justify-center gap-2">
                <FaXTwitter />
                <span>Follow me on X</span>
              </div>
            </Link>
          </li>
        </div>
      </div>

      <div className="md:px-2 border-t border-[#eeeeee0c] py-4 mt-10">
        <small>&copy; PEACE ADEBAYO 2025</small>
      </div>
    </footer>
  );
};

export default Footer;
