"use client"
import { CardDemo } from '@/components/ui/designtools'
import { motion } from "framer-motion"
import { CardDev } from '@/components/ui/devtools'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";

const Page: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animations in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden justify-center items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center space-y-4 py-10 px-4 sm:px-6 lg:px-8 mt-10">
        <img
          src="/assets/smile.svg"
          alt="Smile"
          className="inline-block h-22 w-22 animate-rotate-left-right"
        />
        <div className="text-lg md:text-xl font-semibold lg:text-xl text-center gradient-text">
          CURATED WORK
        </div>
        <div className="text-3xl md:text-3xl lg:text-5xl text-center text-bglight">
          Me in a nutshell
        </div>
        <div className="flex flex-col items-center text-lg md:text-xl lg:text-xl py-8 text-center text-[#746D80] px-4 sm:px-6 lg:px-40 ">
        I’m a designer and front-end developer with a passion for creating intuitive and engaging digital experiences. I’ve had the privilege of winning the Girls Track in two hackathons and gaining valuable experience through three internships. These opportunities have allowed me to grow both professionally and personally, and I’m always eager to take on new challenges and learn from each experience.
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
        <CardDemo />
        <CardDev />
      </div>

      {/* Experiences Section */}
      <div className="flex flex-col items-center justify-center space-y-4 py-10 px-4 sm:px-6 lg:px-8 mt-8">
  <div className="text-lg md:text-xl font-semibold lg:text-xl text-center gradient-text">
    MY EXPERIENCES
  </div>
  <div className="text-3xl md:text-3xl lg:text-5xl text-center text-bglight mb-10">
    Where I’ve been Employed
  </div>
  <div className="flex flex-col py-10 px-4">
    <ol className="relative dark:border-gray-700">
      <li data-aos="fade-up" className="flex items-start mb-10 ml-6 relative">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] dark:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)_inset,0px_32px_24px_-16px_rgba(248,248,248,0.40)_inset] rounded-full -left-3 ring-2 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg className="w-2.5 h-2.5 text-bglight dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </span>
        <div className="ml-12 flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg md:text-xl lg:text-xl font-normal text-bglight dark:text-bglight">Vexio</h3>
            <span className="text-lg md:text-lg lg:text-lg gradient-text">Designer & Developer</span>
          </div>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July - Present, 2024</time>
          <p className="text-base font-normal text-[#746D80]">
          Designing interactive UI elements, enhancing user experience with intuitive and engaging interfaces.
</p>
        </div>
      </li>
      <li data-aos="fade-up" className="flex items-start mb-10 ml-6 relative">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] dark:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)_inset,0px_32px_24px_-16px_rgba(248,248,248,0.40)_inset] rounded-full -left-3 ring-2 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg className="w-2.5 h-2.5 text-bglight dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </span>
        <div className="ml-12 flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg md:text-xl lg:text-xl font-normal text-bglight dark:text-bglight">NLTI</h3>
            <span className="text-lg md:text-lg lg:text-lg gradient-text">Designer</span>
          </div>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February - May, 2024</time>
          <p className="text-base font-normal text-[#746D80]">
          Created elegant UI solutions and optimized designs to improve usability and user engagement.
</p>
        </div>
      </li>
      <li data-aos="fade-up" className="flex items-start mb-10 ml-6 relative">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] dark:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)_inset,0px_32px_24px_-16px_rgba(248,248,248,0.40)_inset] rounded-full -left-3 ring-2 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg className="w-2.5 h-2.5 text-bglight dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </span>
        <div className="ml-12 flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg md:text-xl lg:text-xl font-normal text-bglight dark:text-bglight">VNG</h3>
            <span className="text-lg md:text-lg lg:text-lg gradient-text">Designer & Developer</span>
          </div>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2023 - Present</time>
          <p className="text-base font-normal text-[#746D80]">
          Crafted user-centric designs and interactive features to enhance overall user experience.
</p>
        </div>
      </li>
    </ol>
  </div>
</div>
</div>
  )
}

export default Page
