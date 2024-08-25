"use client";
import React from "react";
import Link from 'next/link';
import ReusableCardComponent from "@/components/custom/ReusableCardComponent";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";
import Testimonials from "@/components/custom/Testimonials";
import Footer from "@/components/custom/Footer";
import Card from "@/components/custom/Card";

const designCardData = [
  {
    title: "Gamify",
    description:
      "It's a user-friendly digital platform that combines learning, collaboration, and recruitment for UI/UX designers.",
    bgImage: "/assets/bg_pic.svg",
    recentText: "HACKATHON",
    tags: ["Branding", "Design"],
    imgSrc: "/assets/gamify.svg",
    imgAlt: "Branding Project",
    titleColor:"bgdark" ,// Example color
    textColor:"bgdark", // Example color
    tagBorderColor:"bgdark" ,
    buttonLink:"https://www.figma.com/design/xtt9T0XReJuGZ3CoFIRuIk/2peep_um-hackathon2k23?node-id=226-17077&t=G3OH6X6bjqrDHetw-1"
  },
  {
    title: "SCCSE Website",
    description:
      "Community website of SCCSE that showcases events, members and the legacy of sccse AOT.",
    bgImage: "/assets/bg_pic2.svg",
    recentText: "GROUP PROJECT",
    tags: ["UI/UX", "Design"],
    imgSrc: "/assets/sccse.svg",
    imgAlt: "UI/UX Redesign Project",
    titleColor:"bglight" ,// Example color
    textColor:"bglight", // Example color
    tagBorderColor:"bglight",
    buttonLink:"https://www.figma.com/design/PPcA7xdKNAg8rPwvW50WRL/SCCSE-Website?node-id=0-1&t=SNiM5IgFLS7kDvKT-1"
  },
  {
    title: "Uxopia",
    description:
      "Hackathon problem statement that challenged us to create a website under 1 hour for UI UX designers where they can be hired.",
    bgImage: "/assets/bg_pic.svg",
    recentText: "GROUP PROJECT",
    tags: ["Branding", "Design"],
    imgSrc: "/assets/uxopia.svg",
    imgAlt: "Branding Project",
    titleColor:"bgdark" ,// Example color
    textColor:"bgdark", // Example color
    tagBorderColor:"bgdark",
    buttonLink:"https://www.figma.com/design/mLMUhQxSOdn2Fq6Pi94nbp/Uxopia?node-id=0-1&t=H6w7IAoNyq9S5xZa-1" 
  },
];

const designExtProps = [
  {
    topText: "DESIGN PORTFOLIO",
    middleText: "My Creative Work",
    bottomText: "Showcasing my journey in design and creativity",
  },
];

const DesignPage: React.FC = () => {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden justify-center items-center custom-cursor px-4 md:px-8">
      <div className="pt-20">
        <ReusableTextComponent
          topText={designExtProps[0].topText}
          middleText={designExtProps[0].middleText}
          bottomText={designExtProps[0].bottomText}
        />
      </div>

        {designCardData.map((item, index) => (
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
            data-aos="fade-up" 
          />
        ))}

      <div className="flex flex-col md:flex-row gap-2 md:gap-20 mt-8 md:mt-0">
        <div className="py-4 md:py-16" data-aos="fade-right">
          <Link href="/development">
            <Card text="Work in Development" imageSrc="/assets/ss_vscode.svg" />
          </Link>
        </div>
        <div className="py-4 md:py-16" data-aos="fade-right">
          <Link href="/">
            <Card text="Go to Home" imageSrc="/assets/hero.png" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default DesignPage;
