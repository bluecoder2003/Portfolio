import React from 'react';

type TextProps = {
  topText: string;
  middleText: string;
  bottomText: string;
};

const ReusableTextComponent: React.FC<TextProps> = ({ topText, middleText, bottomText }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-10">
      <div className="text-lg md:text-xl font-semibold lg:text-xl text-center gradient-text">{topText}</div>
      <div className="text-lg md:text-xl lg:text-5xl text-center text-bglight">{middleText}</div>
      <div className="text-lg md:text-xl lg:text-xl text-center text-[#746D80]">{bottomText}</div>
    </div>
  );
};

export default ReusableTextComponent;