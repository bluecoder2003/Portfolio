"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"; // Adjust the import path as needed

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    title: "CEO, ExampleCorp",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Smith",
    title: "CTO, Techify",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "Alex Johnson",
    title: "Founder, StartupX",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <InfiniteMovingCards 
          items={testimonials} 
          direction="left" 
          speed="normal" 
          pauseOnHover={true} 
          className="my-custom-class"
        />
      </div>
    </section>
  );
};

export default Testimonials;
