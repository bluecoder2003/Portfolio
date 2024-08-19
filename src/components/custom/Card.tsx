import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  text: string;
  imageSrc: string; // Add imageSrc prop
}

const Card: React.FC<CardProps> = ({ text, imageSrc }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
        transition: 'transform 0.3s ease-out, background-image 0.3s ease-out',
        backgroundImage: isHovering ? "url('/assets/grid2.svg')" : "url('/assets/grid1.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: isHovering ? '0 4px 20px rgba(52, 13, 101, 0.5)' : 'none',
        position: 'relative',
        overflow: 'hidden', // Ensure no part of the image is shown outside the container
      }}
      className="flex flex-col items-start justify-start text-3xl rounded-xl w-[34rem] px-10 py-10 h-[20rem] text-bglight transition-all duration-300 border border-bgdark hover:border-[#340D65]"
    >
      <div className="flex flex-col items-start justify-between w-full">
        <span>{text}</span>
        <img
          src="/assets/arrow.svg"
          alt="Arrow"
          className={`mt-40 h-8 w-8 transition-all duration-300 ${isHovering ? 'bg-bgdark' : ''}`}
        />
        <motion.img
          src={imageSrc} // Use the imageSrc prop
          alt="Figma Screenshot"
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '85%',
            height: '85%',
            objectFit: 'cover',
            clipPath: 'inset(25% 0 0 25%)', // Show only 3/4 of the image
            borderRadius: '15px', // Add rounded corners
          }}
          animate={{
            rotate: isHovering ? -3 : 0, // Tilt the image by 5 degrees on hover
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default Card;