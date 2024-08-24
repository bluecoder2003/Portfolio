"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CardDev() {
  return (
    <Card>
      <CardSkeletonContainer>
        <IconCarousel />
      </CardSkeletonContainer>
      <CardTitle>Development Tools I use</CardTitle>
      <CardDescription>
        Tools that have helped me build products
      </CardDescription>
    </Card>
  );
}

const icons = [
  { src: "/assets/mysql.svg", alt: "Figma" },
  { src: "/assets/nextjs.svg", alt: "Photoshop" },
  { src: "/assets/reactjs.svg", alt: "Illustrator" },
  { src: "/assets/shadcnui.svg", alt: "Canva" },
  { src: "/assets/tailwindcss.svg", alt: "Canva" },
];

export const IconList = () => (
    <div>
      {icons.map((icon, index) => (
        <img key={index} src={icon.src} alt={icon.alt} className="icon-size" />
      ))}
    </div>
  );

const IconCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === icons.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change icon every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={icons[currentIndex].src}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="h-12 w-12 flex items-center justify-center"
        >
          <img
            src={icons[currentIndex].src}
            alt={icons[currentIndex].alt}
            className="h-10 w-10"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-black shadow-[2px_4px_16px_0px_rgba(0, 123, 255, 0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-bglight dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-[#746D80] dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-bgdark dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};
