import React from "react";
import dot from "../../assets/dot.svg"
import body from "../../assets/body.svg"
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
      <div class="font-sans h-[9.937rem] w-[42.06rem] bg-#1C1F24 shadow-s mt-[20rem] ml-12 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
       <div className="h-[8rem] w-[40rem] grid grid-rows-3 grid-cols-1 mx-[1.2rem] my-[1.2rem]">
          <div class="flex justify-between ">

              <span className="text-[#B2B2B2] text-lg font-normal tracking-widest leading-relaxed uppercase">BRAIN :</span>
              <span className="flex justify-end w-[8rem]">
              <img src={dot} alt="dot"className="h-[1rem] mt-[.6rem]"></img>

              <span className="text-[#FFF] mt-[.3rem]"> Optimal: 68%</span>
              </span>   
        
          </div>
          <div class="">
            
          </div>
          <div class="b">bye</div>
        </div>
      </div>
     
    </>
  );
}

export default SummaryParameters;
