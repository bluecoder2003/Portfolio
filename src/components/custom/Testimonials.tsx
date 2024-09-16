"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"; // Adjust the import path as needed

const testimonials = [
  {
    quote: "I have had the pleasure of working with Neelakshi, and she consistently proves to be one of the most diligent professionals in front-end design coding and UI/UX. She has an excellent sense of design, knowing how to strike the perfect balance between minimalistic and elaborate styles. Neelakshi also excels at coordination, demonstrating creativity while following instructions with precision. Her work sets a new standard, and I am confident she will continue to raise the bar in the future.",
    name: "Vishal Ahuja",
    title: "CEO, VNG Medical",
  },
  {
    quote: "I have been working with Neelakshi for the last 1.5 years, I can vouch for her work as she is the perfect combination of a designer and developer. She is doing pitch-perfect in her role as the Founding Fronted Engineer at Flint. She has been reporting the work before the given time. She is efficient and dedicated to her work. She has the zeal to learn new design patterns, tools, and concepts every day. You just need to put an idea to her, she will be presenting you with the best UI/UX and micro-animation for your web application or mobile application.",
    name: "Bishakh Neogi",
    title: "Developer, CosX",
  },
  {
    quote: "Neelakshi excels as both a designer and frontend developer intern. Her rare blend of skills, quick learning ability, and strong work ethic made her invaluable to our team. She rapidly adapted to new technologies, contributing significantly to our projects. Neelakshi's attention to detail, positive attitude, and versatility mark her as an outstanding professional in the making. ",
    name: "Shresth Arora",
    title: "Founder, Vexio",
  },
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
