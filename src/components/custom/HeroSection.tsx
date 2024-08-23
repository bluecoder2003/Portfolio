import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting-stars";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex w-full h-screen items-center justify-center">
      {/* Stars background */}
      <StarsBackground className="z-20" />
      <ShootingStars className="z-10"/>
      {/* Hero Content */}
      <BackgroundGradientAnimation className="relative z-30 flex w-full h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full md:w-8/12 h-full">
          <div className="max-w-screen-lg w-full text-center mb-12 flex items-center justify-center flex-col">
            <div className="text-bglight text-5xl md:text-5xl lg:text-5xl xl:text-8xl mb-4">
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
              <img
                src="/assets/smile.svg"
                alt="Smile"
                className="hidden md:inline-block ml-2 h-22 w-22 animate-rotate-left-right"
              />
            </div>
            <div className="text-[#746D80] text-lg md:text-2xl lg:text-2xl w-full md:w-10/12 px-10 md:px-0 mb-8">
              Hi, I'm Neelakshi, passionate about UI/UX design and front-end development.
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
              <button className="px-4 py-2 rounded-xl text-xl border border-neutral-600 text-bgdark font-medium bg-bglight hover:bg-gray-100 transition duration-200">
                Let's Connect
              </button>
              <a
  href="/assets/Neelakshi_Das_resume.pdf"
  download="Neelakshi_Das_resume.pdf"
  className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black md:px-4 py-5 text-xl text-white backdrop-blur-3xl">
    My Resume
    <img src="/assets/arrow.svg" alt="Arrow" className="ml-2 h-5 w-5" />
  </span>
</a>
            </div>
            {/* <div className="absolute bottom-0 right-0 mb-10 md:mb-20 mr-10 md:mr-20 rotate-infinite">
              <img
                src="/assets/Image.svg"
                alt="Decorative"
                className="w-30 h-30 md:w-22 md:h-22"
              />
            </div> */}
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default HeroSection;
