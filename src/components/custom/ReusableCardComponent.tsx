import React from 'react';
import TailwindConnectButton from '../ui/tailwindcss-buttons';
import Image from 'next/image';

type cardtype = {
  title: string;
  description: string;
  bgImage: string;
  recentText: string; // Add recentText prop
  tags: string[];
  imgSrc: string;
  imgAlt: string;
  titleColor?: string; 
  textColor?: string; 
  tagBorderColor?: string;
};

const ReusableCardComponent = ({
  title,
  description,
  bgImage,
  recentText,
  tags,
  imgSrc,
  imgAlt,
  titleColor , 
  textColor , 
  tagBorderColor , 
}: cardtype) => {
  return (
    <div
      className="flex w-11/12 md:w-3/4 flex-col md:flex-row h-auto md:h-[600px] justify-center items-center rounded-[20px] mt-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-12 bg-opacity-75 rounded-[20px] p-6">
        <div className="flex flex-col w-full md:w-1/2 pr-0 md:pr-6">
          <div className="mb-6 md:mb-16">
            <span className={`text-lg text-${textColor}`}>{recentText}</span>
            <h1 className={`text-3xl md:text-5xl font-bold text-${titleColor}`}>{title}</h1>
            <div className="flex space-x-2 mt-2">
              {tags.map((tag, index) => (
                <span key={index} className={`px-4 py-1 rounded-full font-medium text-${textColor} border border-${tagBorderColor}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className={`mt-4  text-${textColor} max-w-sm`}>{description}</p>
            <TailwindConnectButton></TailwindConnectButton>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 pl-0 md:pl-6 mt-6 md:mt-0">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ReusableCardComponent;
