import React, { useState } from 'react';

const Button = () => {
 
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`md:w-[12.5rem] p-4 md:p-0 w-[11rem] h-[3rem] md:h-[3.7rem] bg-[#14171D] md:ml-8 flex items-center rounded-lg hover:border-2 hover:border-[#08B7F6] ${
         isClicked
          ? 'border-2 border-[#08B7F6] font-semibold text-[#08B7F6]'
          : ''
      }`}
      
      onClick={handleClick}
    >
      <span
        className={`text-[#858585] mx-auto font-sans text-base md:text-xl uppercase hover:text-[#08B7F6] hover:font-semibold ${isClicked ? 'text-[#08B7F6] font-semibold' : ''}`}
        onClick={handleClick}
      >
        Optimal
      </span>
    </div>
  );
};

export default Button;
