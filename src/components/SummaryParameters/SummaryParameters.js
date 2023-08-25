import React from "react";
import dot from "../../assets/dot.svg"
import { ReactSVG } from 'react-svg';
import graydot from "../../assets/graydot.svg"
import lightgraydot from "../../assets/lightgray.svg"
function SummaryParameters() {
  //const parameters = [
  //   "Brain",
  //   "Mental Health",
  //   "Fat",
  //   "Skin",
  //   "Hair",
  //   "Cellular Aging",
  //   "Heart",
  //   "Gut",
  //   "Thyroid",
  //   "Lungs",
  //   "Muscle",
  //   "Detox",
  //   "Sleep",
  //   "Cell Nutrition",
  //   "Joints",
  //   "Blood Sugar",
  //   "Inflammation",
  //   "Mens' health",
  // ];
  //const parameter = parameters.map(() => <span></span>);
  return (
    <>
      <div className="h-[9.5rem] w-[39rem] mt-10 ml-10 bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
       <div className="h-[7rem] w-[37rem] grid grid-rows-3 grid-cols-1 mx-[1.2rem] my-[1.2rem]">

          <div class="flex justify-between ">
          <span className="text-[#B2B2B2] text-lg font-normal tracking-widest leading-relaxed uppercase font-sans ">BRAIN :</span>
              <span className="flex justify-end w-[8rem] mr-3">
              <ReactSVG src={dot} al className="h-[1rem] mt-[.5rem]"/>

              <span className="text-[#fffdfd] mt-[.1rem] font-light text-[1.25rem] font-roboto tracking-wider ml-1"> Optimal:</span>c
              <span className="text-[#fffdfd] mt-[.1rem] font-light text-[1.25rem] ml-2 font-roboto tracking-wide">68%</span>
              </span>   
          </div>

          <div className=" w-[36.5rem] h-[0.875rem] flex my-auto">
          
          <div className="w-[68%] bg-[#08B7F6] rounded-l-xl"/>
          <div className="w-[12%] bg-[#2D3137]"/>
          <div className="w-[20%] bg-[#444B53] rounded-r-xl"/> 

          </div>
          <div className="flex justify-end mr-2">
           
              <ReactSVG src={graydot} className="h-[1rem] mt-[1rem]"/>
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mx-2 mt-[0.9rem]">Moderate: 20%</span>
              <ReactSVG src={lightgraydot} className="h-[1rem] mt-[1rem]"/>
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mx-2  mt-[0.9rem]">Faulty: 12%</span>
            
          </div>
        </div>
      </div>
     
    </>
  );
}

export default SummaryParameters;
