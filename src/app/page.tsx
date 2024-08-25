"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion"
import Link from 'next/link';
import HeroSection from "@/components/custom/HeroSection";
import ReusableCardComponent from "@/components/custom/ReusableCardComponent";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";
import Testimonials from "@/components/custom/Testimonials";
import Footer from "@/components/custom/Footer";
import Card from "@/components/custom/Card";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const cardData = [
  {
    title: "Ledflow",
    description:
      "This is a blockchain application which helps connect the source to the consumer in the supply chain cycle",
    bgImage: "/assets/bg_pic.svg",
    recentText: "RECENT",
    tags: ["App design", "UI UX"],
    imgSrc: "/assets/ledflow_proj.svg",
    imgAlt: "Korba Project",
    titleColor: "bgdark", // Example color
    textColor: "bgdark", // Example color
    tagBorderColor: "bgdark", // Example color
    buttonLink:"https://www.figma.com/design/69St1JGAW8tbCKv4sQ0da9/Eureka?node-id=0-1&t=jVXL8XxbYDdfe9GE-1"
  },
  {
    title: "Tuf",
    description:
      "TUF features a flashcard learning tool, an admin panel for managing flashcards, and is built with a tech stack that ensures scalability and maintainability.",
    bgImage: "/assets/bg_pic2.svg",
    recentText: "RECENT",
    tags: ["Flashcards", "Dev"],
    imgSrc: "/assets/tuf.svg",
    imgAlt: "Korba Project",
    titleColor: "bglight", // Example color
    textColor: "bglight", // Example color
    tagBorderColor: "bglight",
    buttonLink:"https://tuf-two.vercel.app/"
  },
];

const extProps = [
  {
    topText: "CURATED WORK",
    middleText: "Featured Projects",
    bottomText: "Achieving goals through a personalized service approach.",
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

  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animations in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden justify-center items-center custom-cursor">
      <HeroSection />

      <div className="w-full px-4 md:px-0 flex flex-col justify-center items-center">
        <div id="work-section" data-aos="fade-up">
          <ReusableTextComponent
            topText={extProps[0].topText}
            middleText={extProps[0].middleText}
            bottomText={extProps[0].bottomText}
          />
        </div>

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
            buttonLink={item.buttonLink}
            data-aos="fade-up" // Animation for card components
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-20 mt-8 md:mt-0">
        <div className="py-4 md:py-16" data-aos="fade-right">
          <Link href="/design">
            <Card text="Work in Designing" imageSrc="/assets/ss_figma.svg" />
          </Link>
        </div>
        <div className="py-4 md:py-16" data-aos="fade-left">
          <Link href="/development">
            <Card text="Work in Development" imageSrc="/assets/ss_vscode.svg" />
          </Link>
        </div>
      </div>

      <div data-aos="fade-up"><ReusableTextComponent
        topText={extProps[1].topText}
        middleText={extProps[1].middleText}
        bottomText={extProps[1].bottomText}
        data-aos="fade-up"
      /></div>

      <Testimonials />

      <div data-aos="fade-up">
      <ReusableTextComponent
        topText={extProps[2].topText}
        middleText={extProps[2].middleText}
        bottomText={extProps[2].bottomText}
      />
      </div>
      <div className="flex flex-col md:flex-row-reverse items-start justify-start space-y-8 md:space-y-0 md:space-x-20 py-10 px-4 md:px-8">
      <img 
  src="/assets/my_pic.svg" 
  alt="My Picture" 
  className="w-full h-96 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto md:mr-20" 
  data-aos="zoom-in" 
/>
        <div className="flex flex-col items-center md:items-start justify-start space-y-4 ">
        <div className="text-base md:text-base lg:text-lg text-start w-5/6 text-[#746D80]" style={{ textAlign: "justify" }} data-aos="fade-up">
      I’m a <motion.span className="font-normal text-bglight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>designer</motion.span> and <motion.span className="font-normal text-bglight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>front-end developer</motion.span> with a passion for creating intuitive and engaging digital experiences. I’ve had the privilege of  <motion.span className="font-normal text-bglight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>winning the Girls Track in two hackathons</motion.span>  and gaining valuable experience through <motion.span className="font-normal text-bglight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>three internships</motion.span>. These opportunities have allowed me to grow both professionally and personally, and I’m always eager to take on new challenges and learn from each experience.
    </div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" data-aos="fade-up">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <a href="/about" className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-2 py-2 text-m text-bglight backdrop-blur-3xl">
              Know More
              <img src="/assets/arrow.svg" alt="Arrow" className="ml-2 h-5 w-5" />
            </a>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;
