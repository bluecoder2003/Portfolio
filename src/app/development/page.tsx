"use client";
import React from "react";
import Link from 'next/link';
import ReusableCardComponent from "@/components/custom/ReusableCardComponent";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";
import Card from "@/components/custom/Card";

const developmentCardData = [
  {
    title: "Web App Development",
    description:
      "Developing a scalable web application using React, Node.js, and MongoDB, ensuring optimal performance and user experience.",
    bgImage: "/assets/bg_pic.svg",
    recentText: "RECENT",
    tags: ["Development", "Web App"],
    imgSrc: "/assets/webapp.svg",
    imgAlt: "Web App Development Project",
    titleColor: "bgdark", // Example color
    textColor: "bgdark", // Example color
    tagBorderColor: "bgdark" // Example color
  },
  {
    title: "API Integration",
    description:
      "Integrating third-party APIs to enhance functionality and connectivity in a client's existing application.",
    bgImage: "/assets/bg_pic2.svg",
    recentText: "RECENT",
    tags: ["API", "Integration"],
    imgSrc: "/assets/api.svg",
    imgAlt: "API Integration Project",
    titleColor: "bglight", // Example color
    textColor: "bglight", // Example color
    tagBorderColor: "bglight"
  },
];

const developmentExtProps = [
  {
    topText: "DEVELOPMENT PORTFOLIO",
    middleText: "My Development Projects",
    bottomText: "Highlighting my work in software development and engineering",
  },
];

const DevelopmentPage: React.FC = () => {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden justify-center items-center custom-cursor">
      <div className="pt-20">
        <ReusableTextComponent
          topText={developmentExtProps[0].topText}
          middleText={developmentExtProps[0].middleText}
          bottomText={developmentExtProps[0].bottomText}
        />
      </div>

      {developmentCardData.map((item, index) => (
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
          <Link href="/design">
            <Card text="Work in Designing" imageSrc="/assets/ss_figma.svg" />
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

export default DevelopmentPage;
