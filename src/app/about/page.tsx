import { BentoGridSecondDemo } from '@/components/custom/grid'
import React from 'react'

const page = () => {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-4 py-10">
        <img
          src="/assets/smile.svg"
          alt="Smile"
          className="inline-block ml-2 h-22 w-22 animate-rotate-left-right"
        />
        <div className="text-lg md:text-xl font-semibold lg:text-xl text-center gradient-text">
          CURATED WORK
        </div>
        <div className="text-lg md:text-xl lg:text-5xl text-center text-bglight">
          Me in a nutshell
        </div>
        <div className="flex justify-center items-center text-wrap text-lg md:text-xl lg:text-xl py-10 m-80 text-center text-[#746D80]" style={{ textAlign: "justify" }}>
          Design has always been in my DNA. As a kid, you would find me dabbling my hands in paint and making random abstract art, and I grew to like how technology became a very integral part of expressing our creativity over the years. I stumbled upon UX/UI, which was a perfect combination of both. I look forward to my journey in this field after transitioning from a non-design background.
        </div>
        {/* <div className="w-full overflow-hidden py-4">
          <div className="marquee text-center text-lg md:text-xl lg:text-xl text-[#746D80]">
            <span className="mx-4">Creating Stunning UI/UX Designs</span>
            <span className="mx-4">Crafting User-Centered Experiences</span>
            <span className="mx-4">Designing with Passion and Precision</span>
            <span className="mx-4">Turning Ideas into Reality</span>
            <span className="mx-4">Your Vision, My Creativity</span>
          </div>
        </div> */}
      </div>
      <BentoGridSecondDemo />
    </div>
  )
}

export default page
