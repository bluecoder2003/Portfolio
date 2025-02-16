import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting-stars";
import BlobCursor from "../custom/BlobCursor";


const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const smileyRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;

    if (title && subtitle && buttons) {
      // Initial animations
      gsap.fromTo(
        title,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        buttons,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
      );
    }
  }, []);

  const handleSmileyClick = () => {
    if (smileyRef.current) {
      gsap.to(smileyRef.current, {
        rotation: 360,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    }
  };

  const smileyAnimation = {
    animate: {
      x: [0, 10, 0, -10, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="relative flex w-full h-screen items-center justify-center overflow-hidden">
      <StarsBackground className="z-20" />
      <ShootingStars className="z-10"/>
      <BackgroundGradientAnimation className="relative z-30 flex w-full h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full md:w-8/12 h-full">
          <div className="max-w-screen-lg w-full text-center mb-12 flex items-center justify-center flex-col">
            <div ref={titleRef} className="text-bglight text-5xl md:text-5xl lg:text-5xl xl:text-8xl mb-4 text-center">
              I create{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(to right, #8338EC, #B923FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Georgia",
                }}
              >
                beautiful
              </span>{" "}
              experiences
              <motion.img
                ref={smileyRef}
                src="/assets/smile.svg"
                alt="Smile"
                className="hidden md:inline-block ml-2 h-22 w-22  animate-rotate-left-right"
                onClick={handleSmileyClick}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                {...smileyAnimation}
              />
            </div>
            <div ref={subtitleRef} className="text-[#746D80] text-lg md:text-2xl lg:text-2xl w-full md:w-10/12 px-10 md:px-0 mb-8 text-center">
              Hi, I'm Neelakshi, passionate about UI/UX design and front-end development.
            </div>
            <div ref={buttonsRef} className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
              <a
                href="/contact"
                className="px-4 py-2 rounded-xl text-xl border border-neutral-600 text-bgdark font-medium bg-bglight hover:bg-gray-100 transition duration-200"
              >
                Let's Connect
              </a>
              <a
                href="/assets/Neelakshi_Das_Resume.pdf"
                download="Neelakshi_Das_Resume.pdf"
                className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black md:px-4 py-5 text-xl text-white backdrop-blur-3xl">
                  My Resume
                  <img src="/assets/arrow.svg" alt="Arrow" className="ml-2 h-5 w-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
      <BlobCursor />
    </div>
  );
};

export default HeroSection;
