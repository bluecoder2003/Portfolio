import React from "react";
import HeroSection from "@/components/custom/HeroSection";
import ReusableCardComponent from "@/components/custom/ReusableCardComponent";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";

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
    topText: "MY SERVICES",
    middleText: "Diverse Services To Meet Needs",
    bottomText: "Meeting goals through personalized service approach",
  },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden px-5 justify-center items-center">
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
    </div>
  );
}
