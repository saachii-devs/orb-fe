import React from "react";
import Icon from "../../components/IconElement/icon"
const BiomoleculeFunctioning = () => {
  return (
    <>
      <div className="h-full w-[91%] md:ml-[4rem] md:mt-[2.5rem]">
      <div className="md:hidden flex justify-between ml-4 mt-6 w-full ">
        <div className= "text-[#F4F4F4] font-semibold mb-2 font-poppins text-2xl ">
          Biomolecule Functioning
        </div>
        <div className="text-[#B2B2B2] w-[7rem] ml-6 font-poppins text-xs ">
            Your Clevo Code
            <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
          </div>
      </div>
        <div className="flex justify-between">
      
          <div className="text-[#F4F4F4] font-bold font-poppins text-3xl hidden md:block ">
          Biomolecules Functioning
          </div>
          <div className="text-[#B2B2B2] font-poppins text-base  hidden md:block">
            Your Clevo Code:
            <span className="text-[#FFF] ml-2 hidden md:block"> 1010 3431 1200</span>
          </div>
        </div>
        <div className="w-full gap-6 md:mr-[-2.5rem] ml-6 md:ml-[0] mt-[2.5rem] flex md:flex-wrap flex-wrap md:gap-[2.3rem]">
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
        </div>
      </div>
    </>
  );
};

export default BiomoleculeFunctioning;
