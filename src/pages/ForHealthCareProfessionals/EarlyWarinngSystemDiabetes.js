import React from "react";
import WarningDisease from "../../components/HealthCareProfessionals/nteractionWithExtrenalComp/WarningDisease";
import Parameters from "../../components/Parameters/Parameters";

const EarlyWarinngSystemDiabetes = () => {
  return (
    <div>
       <div className="md:hidden flex justify-between ml-4 mt-6 w-full ">
        <div className="text-[#F4F4F4] font-semibold mb-2 font-poppins text-2xl ">
        Diabetes
        </div>
        <div className="text-[#B2B2B2] w-[7rem] mr-4 font-poppins text-xs ">
          Your Clevo Code
          <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="hidden md:flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
        <div className="text-[#F4F4F4] font-semibold font-poppins text-3xl ml-8  ">
          Diabetes
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="ml-4 md:ml-0 mt-4 md:mt-0">
      <WarningDisease/>
      </div>
     
      <div className="text-[#F4F4F4] font-semibold font-poppins text-2xl md:text-3xl ml-4 md:ml-16 mt-12 mb-12 ">
        Internal Factors
      </div>
      <Parameters />
      <Parameters />
      <Parameters />
      <div className="text-[#F4F4F4] font-semibold font-poppins text-2xl md:text-3xl ml-4 md:ml-16 mt-12 mb-12 ">
        External Factors
      </div>
      <Parameters />
      <Parameters />
    </div>
  );
};

export default EarlyWarinngSystemDiabetes;
