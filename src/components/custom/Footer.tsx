import React from "react";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";

const Footer: React.FC = () => {
  return (
    <footer className="text-bglight py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-[#746D80] mb-8" />
        <div className="flex flex-col sm:flex-row justify-between w-full mt-8 text-[#746D80] text-sm">
          <div className="flex flex-col sm:flex-row justify-between gap-6 order-1 sm:order-1">
            <div className="flex items-center">
              <a href="https://www.linkedin.com/in/neelakshi-das-%E2%9C%B5-b0ba68244/"
              className=" hover:text-bglight transition-colors">LINKEDIN</a>
              <img src="/assets/arrow.svg" alt="Arrow" className="ml-2 h-2 w-2" />
            </div>
            <div className="flex items-center">
              <a href="https://github.com/bluecoder2003"
              className=" hover:text-bglight transition-colors">GITHUB</a>
              <img src="/assets/arrow.svg" alt="Arrow" className="ml-2 h-2 w-2" />
            </div>
            <div className="flex items-center">
              <a href="https://dribbble.com/bluecoder2003"
              className=" hover:text-bglight transition-colors">DRIBBBLE</a>
              <img src="/assets/arrow.svg" alt="Arrow" className="ml-2 h-2 w-2" />
            </div>
          </div>
          <p className="mb-4 mt-4 sm:mb-0 sm:mt-0 order-2 sm:order-2">© 2024 Neelakshi Das</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;