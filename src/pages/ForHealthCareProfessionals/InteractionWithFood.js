import React from "react";
import Triggers from "../../components/HealthCareProfessionals/nteractionWithExtrenalComp/Triggers";

const InteractionWithFood = () => {
  return (
    <div>
     <div className="md:hidden flex justify-between ml-4 mt-6 w-full ">
        <div className="text-[#F4F4F4] font-semibold mb-2 font-poppins text-[1.3rem] ">
        Interaction With Food
        </div>
        <div className="text-[#B2B2B2] w-[7rem] mr-4 font-poppins text-xs ">
          Your Clevo Code
          <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="hidden md:flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
        <div className="text-[#F4F4F4] font-semibold font-poppins text-3xl ml-8  ">
        Interaction With Food
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="text-[#F4F4F4]/70 font-base font-poppins text-[1.4rem] ml-4 mt-6 md:text-2xl md:ml-16 md:mb-12 ">
        External Factors
      </div>
      <div className='flex flex-wrap w-[90%] ml-4 md:w-full md:ml-0'>
      <Triggers/>
      <Triggers/>
      <Triggers/>
      <Triggers/>


      </div>
      <div className="text-[#F4F4F4]/70 font-base font-poppins text-[1.4rem] ml-4 mt-6 md:text-2xl md:ml-16 md:mb-12 ">

        Internal Factors
      </div>
      <div className='flex flex-wrap w-[90%] ml-4 md:w-full md:ml-0'>
      <Triggers/>
      <Triggers/>
      <Triggers/>
      <Triggers/>


      </div>
    </div>
  );
};

export default InteractionWithFood;
