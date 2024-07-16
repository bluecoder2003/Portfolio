import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation"; // Corrected import statement

export default function Home() {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden px-5 ">
      {/* <div className="flex w-full"> */}
      <BackgroundGradientAnimation className="flex w-full rounded-b-[20px]">
        <div className="flex flex-col items-center justify-center w-8/12 min-h-screen pl-10 rounded-b-[20px]">
          <div className="max-w-screen-lg w-full text-left mb-12">
            <div className="text-bglight text-4xl md:text-5xl lg:text-7xl mb-4">
              I create <span className="italic" style={{ background: 'linear-gradient(to right, #8338EC, #B923FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'Georgia' }}>beautiful</span> experiences
            </div>
            <div className="text-bglight text-xl md:text-xl lg:text-xl w-10/12">
              I work with people all over the world to create tailor-made Webflow experiences
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
      {/* </div> */}

      <div className="w-full flex flex-col items-center px-6 md:px-10 lg:px-20 bg-black py-20">
        <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-bglight p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-bold text-white">Designing</h3>
            <p className="text-white">
              Crafting visually appealing and user-friendly designs tailored to your needs.
            </p>
          </div>
          <div className="bg-bglight p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-bold text-white">Development</h3>
            <p className="text-white">
              Building robust and scalable solutions to bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
      </div>
  );
}
