import React from "react";
import { ReactSVG } from "react-svg";
import { ReactComponent as Brain } from "../../SummarySvg/brain.svg";
import dot from "../../assets/dot.svg";
import graydot from "../../assets/graydot.svg";
import lightgraydot from "../../assets/lightgray.svg";
function Item() {
  return (
    <>
      <div className="hidden md:block h-[16rem] w-[90%] bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
        <div className="font-sans text-[#F4F4F4] text-2xl pt-12 pl-8">
          Summary
        </div>
        <div className="flex">
          <div className="w-[9rem] h-[8rem] bg-[#191C20] mt-[1rem] ml-8 flex justify-center rounded-xl">
            <Brain className="w-[7rem] h-[7rem] text-center mx-auto my-auto" />
          </div>
          <div className="flex-col w-full">
            <div className="flex mt-[1.7rem] ml-8">
              <ReactSVG src={graydot} className="h-[1rem] mt-[1.1rem]" />
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mr-[1.5rem] mt-[0.9rem] whitespace-nowrap">
                Moderate: 20%
              </span>
              <ReactSVG src={lightgraydot} className="h-[1rem] mt-[1.1rem]" />
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mr-[1.5rem]  mt-[0.9rem] whitespace-nowrap">
                Faulty: 12%
              </span>
              <ReactSVG src={dot} className="h-[1rem] mt-[1.1rem]" />
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mr-[1.5rem] mt-[0.9rem] whitespace-nowrap">
                Optimal: 68%
              </span>
            </div>
            <div className=" w-[95%] h-[0.6rem] flex mt-[1.8rem] ml-8">
              <div className="w-[68%] bg-[#08B7F6] rounded-l-xl" />
              <div className="w-[12%] bg-[#2D3137]" />
              <div className="w-[20%] bg-[#444B53] rounded-r-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className=" md:hidden h-[15rem] w-[90%] bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
        <div className="flex-col">
          <div className="flex">
            <div className="w-[9rem] h-[8rem] bg-[#191C20] mt-[1.5rem] ml-6 flex justify-center rounded-xl">
              <Brain className="w-[7rem] h-[7rem] text-center mx-auto my-auto" />
            </div>
            <div>
            <div className="flex-col mt-[1.5rem] ml-8">
            <div className="flex">
              <ReactSVG src={graydot} className="h-[1rem] mt-[1.1rem]" />
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mr-[1.5rem] mt-[0.9rem] whitespace-nowrap">
                Moderate: 20%
              </span>
              </div>
              <div className="flex">
              <ReactSVG src={lightgraydot} className="h-[1rem] mt-[1.1rem]" />
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mr-[1.5rem]  mt-[0.9rem] whitespace-nowrap">
                Faulty: 12%
              </span>
              </div>
              <div className="flex">
              <ReactSVG src={dot} className="h-[1rem] mt-[1.1rem]" />
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mr-[1.5rem] mt-[0.9rem] whitespace-nowrap">
                Optimal: 68%
              </span>
              </div>
            </div>
            </div>
          </div>

          <div>
          <div className=" w-[87%] h-[0.6rem] flex mt-[2.3rem] ml-6">
              <div className="w-[68%] bg-[#08B7F6] rounded-l-xl" />
              <div className="w-[12%] bg-[#2D3137]" />
              <div className="w-[20%] bg-[#444B53] rounded-r-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
