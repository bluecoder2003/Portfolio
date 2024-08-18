import React from "react";
import HeroSection from "@/components/custom/HeroSection";
import ReusableCardComponent from "@/components/custom/ReusableCardComponent";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";
import Testimonials from "@/components/custom/Testimonials";
import Footer from "@/components/custom/Footer";

const cardData = [
  {
    title: "Ledflow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    bgImage: "/assets/bg_pic.svg",
    recentText: "RECENT",
    tags: ["Web design", "Development"],
    imgSrc: "/assets/demo.svg",
    imgAlt: "Korba Project",
  },
  {
    title: "Korba",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    bgImage: "/assets/bg_pic2.svg",
    recentText: "RECENT",
    tags: ["Web design", "Development"],
    imgSrc: "/assets/demo.svg",
    imgAlt: "Korba Project",
  },
];

const extProps = [
  {
    topText: "CURATED WORK",
    middleText: "Featured Projects",
    bottomText: "Meeting goals through personalized service approach",
  },
  {
    topText: "TESTIMONIALS",
    middleText: "Word On The Street About Me",
    bottomText: "Few words from people who collaborated with me",
  },
  {
    topText: "LET’S CONNECT",
    middleText: "Get In Touch",
    bottomText: "Meeting goals through personalized service approach",
  },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden px-5 justify-center items-center custom-cursor">
      <HeroSection />

      {/* Render the first text component */}
      <ReusableTextComponent
        topText={extProps[0].topText}
        middleText={extProps[0].middleText}
        bottomText={extProps[0].bottomText}
      />

      {/* Render the cards */}
      {cardData.map((item, index) => (
        <ReusableCardComponent
          key={index}
          title={item.title}
          description={item.description}
          bgImage={item.bgImage}
          recentText={item.recentText}
          tags={item.tags}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
        />
      ))}

      {/* Render the second text component */}
      <ReusableTextComponent
        topText={extProps[1].topText}
        middleText={extProps[1].middleText}
        bottomText={extProps[1].bottomText}
      />


      <Testimonials/>

      <div className="flex flex-row-reverse items-start justify-start space-x-20 mr-20 py-10" style={{ textAlign: 'justify' }}>
  <img src="/assets/my_pic.png" alt="My Picture" className="w-full h-96" />
  <div className="flex flex-col items-start justify-start space-y-4">
    <div className="text-lg md:text-xl font-semibold lg:text-xl text-start gradient-text">ABOUT ME</div>
    <div className="text-lg md:text-xl lg:text-5xl text-start text-bglight">Know who I am</div>
    <div className="text-lg md:text-xl lg:text-xl text-start text-[#746D80]">My journey in a few words</div>
    <div className="text-base md:text-base lg:text-lg text-start w-5/6 text-[#746D80]"style={{ textAlign: 'justify' }}>
      Design has always been in my DNA. As a kid you would find me dabbling my hands in paint and making random abstract art, and I grew to like how technology became a very integral part of expressing our creativity over the years. I stumbled upon UX/UI which was a perfect combination of both. I look forward to my journey in this field after transitioning from a non-design background.
    </div>
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-2 py-2 text-m text-bglight backdrop-blur-3xl">
        Know More
        <img src="/assets/arrow.svg" alt="Arrow" className="ml-2 h-5 w-5" />
      </span>
    </button>
  </div>
</div>

<Footer/>

    </div>
  );
}
