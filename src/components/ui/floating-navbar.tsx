"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient";
import { RxCross2 } from "react-icons/rx";
import { TbMenu } from "react-icons/tb";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <div>
      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "hidden md:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-[#746D80] dark:border-white/[0.2] rounded-full bg-black/[0.7] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 backdrop-blur-md",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-4 text-bglight dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-m">{navItem.name}</span>
            </Link>
          ))}
          <HoverBorderGradient>
            <a href="/contact">Let's Connect</a>
          </HoverBorderGradient>
        </motion.div>
      </AnimatePresence>

    {/* Mobile Navigation */}
<div className="md:hidden fixed top-0 left-0 w-full z-[5000] rounded-full">
  <div
    className={cn(
      "flex items-center justify-between px-8 py-4 mt-4 bg-black/[0.9] rounded-full mx-4",
      isMobileMenuOpen ? "rounded-full" : ""
    )}
  >
    <div className="text-white text-xl">
  <img src = "/assets/neel_logo.svg" alt="Description of image" className="w-8 h-8" />
</div>
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="text-bglight text-3xl"
    >
      {isMobileMenuOpen ? <RxCross2 /> : <TbMenu />}
    </button>
  </div>
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-start space-y-4 py-4 px-8 bg-black/[0.9] mx-4 my-4 rounded-xl"
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`mobile-link-${idx}`}
            href={navItem.link}
            className="text-bglight text-xl w-full text-left py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {navItem.icon}
            {navItem.name}
          </Link>
        ))}
        <Link
          href="/contact"
          className="text-bglight text-xl w-full text-left py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Let's Connect
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</div>


    </div>
  );
};
