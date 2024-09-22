"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"; // Adjust the import path as needed

const testimonials = [
  {
    quote: "I have had the pleasure of working with Neelakshi, and she consistently proves to be one of the most diligent professionals in front-end design coding and UI/UX. She has an excellent sense of design, knowing how to strike the perfect balance between minimalistic and elaborate styles. Neelakshi also excels at coordination, demonstrating creativity while following instructions with precision. Her work sets a new standard, and I am confident she will continue to raise the bar in the future.",
    name: "Vishal Ahuja",
    title: "CEO, VNG Medical",
    photo: "https://media.licdn.com/dms/image/v2/D5635AQE4N6-QZzv3JA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1725817645863?e=1727589600&v=beta&t=JtiHsjhhhIDxfJdepzyC02arJvUTcSCpMO_-SFQjfys",
    linkedinLink: "https://www.linkedin.com/in/vishalahuja92/",
  },
  {
    quote: "I have been working with Neelakshi for the last 1.5 years, I can vouch for her work as she is the perfect combination of a designer and developer. She is doing pitch-perfect in her role as the Founding Fronted Engineer at Flint. She has been reporting the work before the given time. She is efficient and dedicated to her work. She has the zeal to learn new design patterns, tools, and concepts every day. You just need to put an idea to her, she will be presenting you with the best UI/UX and micro-animation for your web application or mobile application.",
    name: "Bishakh Neogi",
    title: "Developer, CosX",
    photo: "https://media.licdn.com/dms/image/v2/C4D03AQENvoiZmYEBdA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1612328242319?e=1732752000&v=beta&t=DzGvkceM5DIwCkXyZTUESYZHk3oTMbcNm8439ZI9H6M",
    linkedinLink: "https://www.linkedin.com/in/bishakh-neogi-387815205/",
  },
  {
    quote: "Neelakshi excels as both a designer and frontend developer intern. Her rare blend of skills, quick learning ability, and strong work ethic made her invaluable to our team. She rapidly adapted to new technologies, contributing significantly to our projects. Neelakshi's attention to detail, positive attitude, and versatility mark her as an outstanding professional in the making. ",
    name: "Shresth Arora",
    title: "Founder, Vexio",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQGbZuAIAnnsqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1680866933088?e=1732752000&v=beta&t=SH9Gm4GC5v9_S5vkL2WTqH5DvXE0sj37E8H04IVjDQg",
    linkedinLink: "https://www.linkedin.com/in/shreshtharora/",
  },
  {
    quote: "I had the pleasure of working with Neelakshi Das, and I can confidently say that she is an outstanding Frontend Developer and UI/UX Designer. Neelakshi consistently brings creativity, precision, and a deep understanding of user-centric design to every project she undertakes. Her ability to transform complex concepts into intuitive, visually appealing interfaces is truly impressive.Her proficiency in frontend technologies and design tools is matched by her dedication to creating seamless user experiences.",
    name: "Irshit Mukherjee",
    title: "Developer, XCONICS",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQFK6dzBuFnkqA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705246532134?e=1732752000&v=beta&t=j8YxkmWuxalP6-kCBbwfAgoESJhX67OZTyS0w8NdR8w",
    linkedinLink: "https://www.linkedin.com/in/irshit-mukherjee-693a99219/",
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
        >
          {(item: any) => (
            <a
              href={item.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer block"
            >
              <div className="h-full w-full">
                <div className="flex items-center mb-4">
                  <img src={item.photo} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="text-white font-semibold">{item.name}</p>
                    <p className="text-bglight ">{item.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 font-normal mb-4 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">{item.quote}</p>
              </div>
            </a>
          )}
        </InfiniteMovingCards>
      </div>
    </section>
  );
};

export default Testimonials;
