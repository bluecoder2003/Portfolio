"use client";
import React from "react";
import Link from 'next/link';
import ReusableCardComponent from "@/components/custom/ReusableCardComponent";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";
import Card from "@/components/custom/Card";

const developmentCardData = [
  {
    title: "Flint",
    description:
      "Flint empowers you to streamline tasks, collaborate effortlessly, and optimize your workflows, all in one intuitive platform.",
    bgImage: "/assets/bg_pic2.svg",
    recentText: "PROJECT",
    tags: ["React Flow", "Kanban"],
    imgSrc: "/assets/flintsocial.svg",
    imgAlt: "API Integration Project",
    titleColor: "bglight", // Example color
    textColor: "bglight", // Example color
    tagBorderColor: "bglight",
    buttonLink:"https://www.flint.social/"
  },
  {
    title: "AOT Website",
    description:
      "College website that showcases the events, achievements, placement records etc.",
    bgImage: "/assets/bg_pic.svg",
    recentText: "PROJECT",
    tags: ["Development", "Web App"],
    imgSrc: "/assets/aotwebsite.svg",
    imgAlt: "Web App Development Project",
    titleColor: "bgdark", // Example color
    textColor: "bgdark", // Example color
    tagBorderColor: "bgdark", // Example color
    buttonLink:"https://github.com/lowcg/downhill"
  },
  {
    title: "KnowledgeNook",
    description:
      "Hackathon project that helped up build a website for college students to access study materials easily and track progress.",
    bgImage: "/assets/bg_pic2.svg",
    recentText: "HACKATHON PROJECT",
    tags: ["API", "Dev"],
    imgSrc: "/assets/knowledgenook.svg",
    imgAlt: "API Integration Project",
    titleColor: "bglight", // Example color
    textColor: "bglight", // Example color
    tagBorderColor: "bglight",
    buttonLink:"https://github.com/LoadingMinds/KnowledgeNookHack4bengal"
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
    <div className="flex w-full flex-col min-h-screen overflow-hidden justify-center items-center custom-cursor px-4 md:px-8">
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
          buttonLink={item.buttonLink}
          data-aos="fade-up"
        />
      ))}

      <div className="flex flex-col md:flex-row gap-2 md:gap-20 mt-8 md:mt-0"> {/* Add top margin to the container */}
        <div className="py-4 md:py-16" data-aos="fade-right">
          <Link href="/design">
            <Card text="Work in Designing" imageSrc="/assets/ss_figma.svg" />
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

export default DevelopmentPage;