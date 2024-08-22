import { CardDemo } from '@/components/ui/designtools'
import { CardDev } from '@/components/ui/devtools'
import React from 'react'

const Page: React.FC = () => {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden justify-center items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center space-y-4 py-10 px-4 sm:px-6 lg:px-8">
        <img
          src="/assets/smile.svg"
          alt="Smile"
          className="inline-block h-22 w-22 animate-rotate-left-right"
        />
        <div className="text-lg md:text-xl font-semibold lg:text-xl text-center gradient-text">
          CURATED WORK
        </div>
        <div className="text-lg md:text-xl lg:text-5xl text-center text-bglight">
          Me in a nutshell
        </div>
        <div className="flex flex-col items-center text-lg md:text-xl lg:text-xl py-10 text-center text-[#746D80] px-4 sm:px-6 lg:px-40 ">
          Design has always been in my DNA. As a kid, you would find me dabbling my hands in paint and making random abstract art, and I grew to like how technology became a very integral part of expressing our creativity over the years. I stumbled upon UX/UI, which was a perfect combination of both. I look forward to my journey in this field after transitioning from a non-design background.
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
        <CardDemo />
        <CardDev />
      </div>

      {/* Experiences Section */}
      <div className="space-y-4 py-10 px-4 sm:px-6 lg:px-8">
  <div className="text-lg md:text-xl font-semibold lg:text-xl text-center gradient-text">
    MY EXPERIENCES
  </div>
  <div className="text-lg md:text-xl lg:text-5xl text-center text-bglight mb-8 md:mb-12 lg:mb-16">
    Where I’ve been Employed
  </div>
  <div className="flex flex-col gap-10">
    {[1, 2, 3].map((item, index) => (
      <div key={index} className="flex flex-col mt-10  md:flex-row gap-6">
        <div className="flex flex-col flex-1 items-center md:items-start">
          <div className="text-lg md:text-xl font-normal lg:text-xl text-bglight text-center md:text-left">
            Product Designer Intern,{" "}
            <span className="gradient-text">Vexio</span>
          </div>
          <div className="text-lg md:text-xl font-normal italic lg:text-xl text-bglight text-center md:text-left">
            Nov 2023 - May 2024 / Bangalore, India
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-lg md:text-xl lg:text-xl text-left text-bglight max-w-full md:max-w-md break-words px-4">
            Worked as a freelance designer for the EB website, including UX/UI Design and branding.
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default Page
