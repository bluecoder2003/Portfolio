import { ArrowUpRight } from "lucide-react";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Navbar() {
  return (
    <div className="mt-5 mx-5 rounded-t-[20px] bg-bgdark text-bglight flex justify-between items-center h-20 px-10 text-[14px]">
      <ul className="flex gap-6">
        <div className="flex justify-center items-center">
          <li className="inline-block">LINKEDIN</li>
          <ArrowUpRight />
        </div>
        <div className="flex justify-center items-center">
          <li className="inline-block">GITHUB</li>
          <ArrowUpRight />
        </div>
        <div className="flex justify-center items-center">
          <li className="inline-block">DRIBBLE</li>
          <ArrowUpRight />
        </div>
      </ul>
      <ul className="flex w-full justify-end items-center gap-[20px]">
        <li className="inline-block ">HOME</li>
        <li className="inline-block">ABOUT</li>
        <li className="inline-block">PROJECTS</li>

        <button className="px-[14px] py-[10px] rounded-full flex items-center justify-center gap-2 ">
          < HoverBorderGradient><span>LET&apos;S TALK</span></HoverBorderGradient>
        </button>
      </ul>
    </div>
  );
}