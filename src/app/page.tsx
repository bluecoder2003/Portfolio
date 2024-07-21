import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { EvervaultCard } from "@/components/ui/evervault-card";
import TailwindConnectButton from "@/components/ui/tailwindcss-buttons";
import Image from "next/image";
import ReusableCardComponent from "@/components/custom/ReusableCardComponent";

const cardData = [
  {
    title:"Ledflow",
    description:"blockchain"
  },
  {
    title:"Korba",
    description:"Lorem"
  },
  {
    title:"Alathl",
    description:"ipsum"
  },
]
export default function Home() {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-hidden px-5">
      {/* Background Gradient Animation Section */}
      <BackgroundGradientAnimation className="flex w-full rounded-b-[20px]">
        <div className="flex flex-col items-center justify-center w-8/12 h-screen pl-10 rounded-b-[20px]">
          <div className="max-w-screen-lg w-full text-left mb-12">
            <div className="text-bglight text-4xl md:text-5xl lg:text-7xl mb-4">
              I create{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(to right, #8338EC, #B923FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Georgia",
                }}
              >
                beautiful
              </span>{" "}
              experiences
            </div>
            <div className="text-bglight text-xl md:text-xl lg:text-xl w-10/12">
              I work with people all over the world to create tailor-made
              Webflow experiences
            </div>
            <div className="absolute bottom-0 right-0 mb-40 mr-20 rotate-infinite">
              <img
                src="/assets/Image.svg"
                alt="Decorative"
                className="w-20 h-20"
              />
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Cards Section */}
      <div className="flex w-full py-10 overflow-hidden">
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center gap-10">
            <EvervaultCard className="w-11/12 h-72 p-6 gap-8 space-y-4 bg-bgdark rounded-[20px]">
              {/* Add your card content here */}
            </EvervaultCard>

            <EvervaultCard className="w-11/12 h-72 p-6 space-y-4 bg-bgdark rounded-[20px]">
              {/* Add your card content here */}
            </EvervaultCard>
          </div>
        </div>
      </div>

      {cardData.map((item,index)=>(<ReusableCardComponent key={index} title={item.title} description={item.description}/>))}
      
      
      
    </div>
  );
}
