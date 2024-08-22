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
    title: "Branding Project",
    description:
      "Crafting a unique brand identity for a startup, including logo design, color schemes, and visual guidelines.",
    bgImage: "/assets/bg_pic.svg",
    recentText: "RECENT",
    tags: ["Branding", "Design"],
    imgSrc: "/assets/branding.svg",
    imgAlt: "Branding Project",
    titleColor:"bgdark" ,// Example color
    textColor:"bgdark", // Example color
    tagBorderColor:"bgdark" // Example color
  },
  {
    title: "UI/UX Redesign",
    description:
      "A complete overhaul of a mobile application’s UI/UX to enhance user experience and engagement.",
    bgImage: "/assets/bg_pic2.svg",
    recentText: "RECENT",
    tags: ["UI/UX", "Design"],
    imgSrc: "/assets/uiux.svg",
    imgAlt: "UI/UX Redesign Project",
    titleColor:"bglight" ,// Example color
    textColor:"bglight", // Example color
    tagBorderColor:"bglight" 
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
          />
        ))}

      <div className="flex flex-col md:flex-row gap-8 md:gap-20 py-16">
        <div className="py-8 md:py-16">
          <Link href="/development">
            <Card text="Work in Development" imageSrc="/assets/ss_vscode.svg" />
          </Link>
        </div>
        <div className="py-8 md:py-16">
          <Link href="/">
            <Card text="Go to Home" imageSrc="/assets/home.png" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default DesignPage;
