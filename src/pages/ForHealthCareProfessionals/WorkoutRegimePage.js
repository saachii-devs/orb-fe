import React from "react";
import WorkoutRegime from "../../components/WorkoutRegime/WorkoutRegime";
import WR2Rows from "../../components/WorkoutRegime/WR2Rows";
import WRSquare from "../../components/WorkoutRegime/WRSquare";
import DoubleColumn from "../../components/WorkoutRegime/DoubleColumn";

const WorkoutRegimePage = () => {
  return (
    <div>
      <div className="md:hidden flex justify-between ml-4 mt-6 w-full ">
        <div className="text-[#F4F4F4] font-semibold mb-2 font-poppins text-xl ml-2 ">
          Workout Regime
        </div>
        <div className="text-[#B2B2B2] w-[7rem] mr-6 font-poppins text-xs ">
          Your Clevo Code
          <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="hidden md:flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
        <div className="text-[#F4F4F4] font-semibold font-poppins text-3xl ml-8  ">
          Workout Regime
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="w-[95%] md:w-full ml-[1.7rem] md:ml-0">
        <WorkoutRegime />
      </div>
      <div className="text-[#F4F4F4] font-semibold font-poppins text-xl ml-6 my-8 md:text-3xl md:ml-16 md:my-16  ">
        Endurance Training
      </div>
      <div className="w-[95%] md:w-full ml-[1.7rem] md:ml-0">
      <WR2Rows />
      </div>
      

      <div className="hidden md:flex ">
        <WRSquare />
        <WRSquare />
      </div>

      <div className="md:hidden flex-col ml-[1.7rem] md:ml-0 ">
        <WRSquare />
        <WRSquare />
      </div> 

      <div className="text-[#F4F4F4] font-semibold font-poppins text-xl ml-6 my-8 md:text-3xl md:ml-16 md:my-16  ">

        Strength Training
      </div>
      <div className="ml-4 md:ml-0">
      <DoubleColumn />
      </div>
      
      <div className="hidden md:flex ">
        <WRSquare />
        <WRSquare />
      </div>

      <div className="md:hidden flex-col ml-[1.7rem] md:ml-0 ">
        <WRSquare />
        <WRSquare />
      </div>
    </div>
  );
};

export default WorkoutRegimePage;
