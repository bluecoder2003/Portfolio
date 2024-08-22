"use client";
import React from "react";
import Link from 'next/link';
import HeroSection from "@/components/custom/HeroSection";
import ReusableCardComponent from "@/components/custom/ReusableCardComponent";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";
import Testimonials from "@/components/custom/Testimonials";
import Footer from "@/components/custom/Footer";
import Card from "@/components/custom/Card";

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
    titleColor:"bgdark" ,// Example color
    textColor:"bgdark", // Example color
    tagBorderColor:"bgdark" // Example color
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
    titleColor:"bglight" ,// Example color
    textColor:"bglight", // Example color
    tagBorderColor:"bglight" 
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
    topText: "ABOUT ME",
    middleText: "Know who I am",
    bottomText: "My journey in a few words",
  },
  {
    topText: "LET’S CONNECT",
    middleText: "Get In Touch",
    bottomText: "Meeting goals through personalized service approach",
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden justify-center items-center custom-cursor">
      <HeroSection />

      <div id="work-section">
      <ReusableTextComponent
        topText={extProps[0].topText}
        middleText={extProps[0].middleText}
        bottomText={extProps[0].bottomText}
      />
      </div>

      
{/* <div id="work-section"> */}
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
            titleColor={item.titleColor}
            textColor={item.textColor}
            tagBorderColor={item.tagBorderColor}
          />
        ))}
      {/* </div> */}

      <div className="flex flex-col md:flex-row gap-2 md:gap-20">
        <div className="py-4 mt-4 md:py-16">
          <Link href="/design">
            <Card text="Work in Designing" imageSrc="/assets/ss_figma.svg" />
          </Link>
        </div>
        <div className="py-4 md:py-16">
          <Link href="/development">
            <Card text="Work in Development" imageSrc="/assets/ss_vscode.svg" />
          </Link>
        </div>
      </div>

      <ReusableTextComponent
        topText={extProps[1].topText}
        middleText={extProps[1].middleText}
        bottomText={extProps[1].bottomText}
      />

      <Testimonials />


      <ReusableTextComponent
        topText={extProps[2].topText}
        middleText={extProps[2].middleText}
        bottomText={extProps[2].bottomText}
      />
      <div className="flex flex-col md:flex-row-reverse items-start justify-start space-y-8 md:space-y-0 md:space-x-20 py-10 px-4 md:px-8">
        <img src="/assets/my_pic.png" alt="My Picture" className="w-full h-96 mx-auto md:mr-20" />
        <div className="flex flex-col items-center md:items-start justify-start space-y-4 ">
          <div className="text-base md:text-base lg:text-lg text-start w-5/6 text-[#746D80]" style={{ textAlign: "justify" }}>
            Design has always been in my DNA. As a kid you would find me dabbling my hands in paint and making random abstract art, and I grew to like how technology became a very integral part of expressing our creativity over the years. I stumbled upon UX/UI which was a perfect combination of both. I look forward to my journey in this field after transitioning from a non-design background. Design has always been in my DNA. As a kid you would find me dabbling my hands in paint and making random abstract art, and I grew to like how technology became a very integral part of expressing our creativity over the years. I stumbled upon UX/UI which was a perfect combination of both. I look forward to my journey in this field after transitioning from a non-design background.
          </div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <a href="/about" className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-2 py-2 text-m text-bglight backdrop-blur-3xl">
              Know More
              <img src="/assets/arrow.svg" alt="Arrow" className="ml-2 h-5 w-5" />
            </a>
          </button>
        </div>
      </div>

      {/* <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <ReusableTextComponent
              topText={extProps[3].topText}
              middleText={extProps[3].middleText}
              bottomText={extProps[3].bottomText}
            />
          </div> */}

          {/* <form className="w-full max-w-xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C]"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C]"
              />
            </div>
            <textarea
              placeholder="Enter your message"
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C] h-24 mb-4"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#28133C] hover:bg-purple-900 transition-colors"
            >
              Send Message
            </button>
          </form> */}

          {/* <div className="flex justify-center space-x-3 md:space-x-4 mt-8">
            {/* Social Media Icons */}
            {/* <a
              href="#"
              className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
            >
              <img src="/assets/dribbble.svg" alt="Dribbble" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
            >
              <img src="/assets/github.svg" alt="Github" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
            >
              <img src="/assets/linkedin.svg" alt="Linkedin" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
            >
              <img src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
          </div> */}
        {/* </div>
      </div> */}

    </div>
  );
};

export default Home;
