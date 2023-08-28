import React from "react";
import Triggers from "../../components/HealthCareProfessionals/nteractionWithExtrenalComp/Triggers";

const InteractionWithFood = () => {
  return (
    <div>
      <div className="flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
        <div className="text-[#F4F4F4] font-semibold font-poppins text-3xl ml-8  ">
        Interaction With Food
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="text-[#F4F4F4]/70 font-base font-poppins text-2xl ml-16 mb-12 ">
        External Factors
      </div>
      <div className='flex flex-wrap'>
      <Triggers/>
      <Triggers/>
      <Triggers/>
      <Triggers/>


      </div>
      <div className="text-[#F4F4F4]/70 font-base font-poppins text-2xl mt-[4.1rem] ml-16 mb-10 ">
        Internal Factors
      </div>
      <div className='flex flex-wrap'>
      <Triggers/>
      <Triggers/>
      <Triggers/>
      <Triggers/>


      </div>
    </div>
  );
};

export default InteractionWithFood;
