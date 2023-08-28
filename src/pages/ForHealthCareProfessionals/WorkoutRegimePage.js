import React from "react";
import WorkoutRegime from "../../components/WorkoutRegime/WorkoutRegime";
import WR2Rows from "../../components/WorkoutRegime/WR2Rows";
import WRSquare from "../../components/WorkoutRegime/WRSquare";
import DoubleColumn from "../../components/WorkoutRegime/DoubleColumn";

const WorkoutRegimePage = () => {
  return (
    <div>
      <div className="flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
        <div className="text-[#F4F4F4] font-semibold font-poppins text-3xl ml-8  ">
        Workout Regime 
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <WorkoutRegime/>
      <div className="text-[#F4F4F4] font-base font-poppins text-2xl ml-16 mt-12  ">
      Endurance Training
        </div>
        <WR2Rows/>
        
        <div className="flex ">
        <WRSquare/>
        <WRSquare/>
       
        </div>
        <div className="text-[#F4F4F4] font-base font-poppins text-2xl ml-16 mt-12  ">
      Strength Training
        </div>
        <DoubleColumn/>
        <div className="flex ">
        <WRSquare/>
        <WRSquare/>
       
        </div>
    </div>
  );
};

export default WorkoutRegimePage;
