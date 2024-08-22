import React, { useEffect } from "react";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';

const extProps = [
  {
    topText: "LET’S CONNECT",
    middleText: "Get in Touch",
    bottomText: "We would love to hear from you",
  },
];

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <footer className="text-white py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6" data-aos="fade-up">
          {extProps.map((props, index) => (
            <ReusableTextComponent
              key={index}
              topText={props.topText}
              middleText={props.middleText}
              bottomText={props.bottomText} // Add AOS attribute for animation
            />
          ))}
        </div>

        <form className="w-full max-w-xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C]"
              // data-aos="fade-up" // Add AOS attribute for animation
            />
            <input
              type="email"
              placeholder="Enter your mail"
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C]"
              // data-aos="fade-up" // Add AOS attribute for animation
            />
          </div>
          <textarea
            placeholder="Enter your message"
            className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C] h-24 mb-4"
            // data-aos="fade-up" // Add AOS attribute for animation
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#28133C] hover:bg-purple-900 transition-colors"
            // data-aos="fade-up" // Add AOS attribute for animation
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-3 md:space-x-4 mt-8">
          {/* Social Media Icons */}
          <a
            href="#"
            className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
            // data-aos="fade-up" // Add AOS attribute for animation
          >
            <img src="/assets/dribbble.svg" alt="Dribbble" className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
            // data-aos="fade-up" // Add AOS attribute for animation
          >
            <img src="/assets/github.svg" alt="Github" className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
            // data-aos="fade-up" // Add AOS attribute for animation
          >
            <img src="/assets/linkedin.svg" alt="Linkedin" className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
            // data-aos="fade-up" // Add AOS attribute for animation
          >
            <img src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8 text-[#746D80] text-sm">
        <p>© 2024 Neelakshi Das</p>
      </div>
    </footer>
  );
};

export default Footer;
