'use client';

import React, { useEffect, useState } from "react";
import ReusableTextComponent from "@/components/custom/ReusableTextComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const extProps = [
  {
    topText: "LET'S TALK",
    middleText: "Get in Touch",
    bottomText: "Let's make something magical",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email, // sender's email
      message: formData.message,
      to_email: formData.email, // Replace with the actual recipient's email
      cc_email: formData.email, // Send a copy to the sender's email
    };

    try {
      const result = await emailjs.send(
        'service_qp7cwzp', // Replace with your EmailJS Service ID
        'template_ipln82c', // Replace with your EmailJS Template ID
        emailParams,        // Use emailParams instead of formData
        'vZqWbAVeqxMqxcdwY' // Replace with your EmailJS Public Key
      );

      if (result.text === 'OK') {
        setFormStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setFormStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('Error sending email.');
    }
  };

  return (
    <div className="bg-black text-bglight py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6" data-aos="fade-up">
          {extProps.map((props, index) => (
            <ReusableTextComponent
              key={index}
              topText={props.topText}
              middleText={props.middleText}
              bottomText={props.bottomText}
            />
          ))}
        </div>

        <form className="w-full max-w-xl mx-auto px-4 md:px-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C]"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            className="w-full px-4 py-3 rounded-lg bg-black border-2 border-[#332F3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#28133C] h-24 mb-4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#28133C] hover:bg-purple-900 transition-colors"
          >
            Send Message
          </button>
        </form>
        {formStatus && <p className="text-center mt-4">{formStatus}</p>}

        <div className="flex justify-center space-x-3 md:space-x-4 mt-8">
          <a
            href="https://dribbble.com/bluecoder2003"
            className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
          >
            <img src="/assets/dribbble.svg" alt="Dribbble" className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/bluecoder2003"
            className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
          >
            <img src="/assets/github.svg" alt="Github" className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/neelakshi-das-b0ba68244/"
            className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
          >
            <img src="/assets/linkedin.svg" alt="Linkedin" className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/_crimson_2003/?hl=en"
            className="p-2 bg-[#081225] border border-[#262626] rounded-full hover:border-purple-400 transition-colors"
          >
            <img src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
