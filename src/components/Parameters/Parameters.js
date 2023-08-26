import React from "react";
import { ReactSVG } from 'react-svg';
import graph from "../../assets/graph.svg";
import dot from "../../assets/dot.svg";
function Parameters() {
  return (
    <>
      <div className="h-[25rem] w-full flex-col bg-[#1C1F24] shadow-s  ml-0 border-[0.5px] border-solid border-zinc-600/20 blur-0 ">
        <div className="py-[1.8rem] px-[3rem]">
          <div className=" w-full h-[39%] flex justify-between">
            <div className="flex-col">
              <div className="text-[#F4F4F4] font-sans text-3xl leading-9 tracking-wide">
                Brain Activity
              </div>
              <div className="text-[#08B7F6] font-sans text-lg leading-3 mt-4">
                View Details
              </div>
            </div>
            <ReactSVG  src={graph}  className="w-[65%]" />
            <span className="uppercase text-[#00DEFF] font-sans text-xl font-bold text-centerw-[10rem] mt-[1.2rem] mr-[1.6rem]">
              faulty Zone
            </span>
          </div>
          <div className="w-full border-t-[0.5px] border-solid border-zinc-600/20 mt-8" />
          <div className=" w-full h-[61%] flex gap-12 overflow-y-show overflow-x-hidden">
            <div className="h-[9.6rem] min-w-[23.5%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
              <div className="bg-[#191B20] h-[60%] overflow-hidden pt-[7%] pl-[2rem] rounded-t-3xl">
                <span className="text-[#B2B2B2]  text-center text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">nicotine addiction</span>
              </div>
              <div className="flex gap-[5rem]">
                <div className="flex ml-2">
                  <ReactSVG  src={dot}  className="h-[1rem] mt-[1.4rem] ml-4" />
                  <span className="font-sans text-xl font-normal text-[#B2B2B2] mr-2 mt-[0.9rem]">
                    Optimal
                  </span>
                </div>
                <div className="text-[#08B7F6] font-sans text-lg leading-3 mt-[1.5rem] ml-4">
                View Details
              </div>
              </div>
            </div>
            <div className="h-[9.6rem] min-w-[23.5%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
              <div className="bg-[#191B20] h-[60%] overflow-hidden pt-[7%] pl-[2rem] rounded-t-3xl">
                <span className="text-[#B2B2B2]  text-center text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">nicotine addiction</span>
              </div>
              <div className="flex gap-[5rem]">
                <div className="flex ml-2">
                  <ReactSVG  src={dot}  className="h-[1rem] mt-[1.4rem] ml-4" />
                  <span className="font-sans text-xl font-normal text-[#B2B2B2] mr-2 mt-[0.9rem]">
                    Optimal
                  </span>
                </div>
                <div className="text-[#08B7F6] font-sans text-lg leading-3 mt-[1.5rem] ml-4">
                View Details
              </div>
              </div>
            </div>
            <div className="h-[9.6rem] min-w-[23.5%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
              <div className="bg-[#191B20] h-[60%] overflow-hidden pt-[7%] pl-[2rem] rounded-t-3xl">
                <span className="text-[#B2B2B2]  text-center text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">nicotine addiction</span>
              </div>
              <div className="flex gap-[5rem]">
                <div className="flex ml-2">
                  <ReactSVG  src={dot}  className="h-[1rem] mt-[1.4rem] ml-4" />
                  <span className="font-sans text-xl font-normal text-[#B2B2B2] mr-2 mt-[0.9rem]">
                    Optimal
                  </span>
                </div>
                <div className="text-[#08B7F6] font-sans text-lg leading-3 mt-[1.5rem] ml-4">
                View Details
              </div>
              </div>
            </div>
            <div className="h-[9.6rem] min-w-[23.5%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
              <div className="bg-[#191B20] h-[60%] overflow-hidden pt-[7%] pl-[2rem] rounded-t-3xl">
                <span className="text-[#B2B2B2]  text-center text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">nicotine addiction</span>
              </div>
              <div className="flex gap-[5rem]">
                <div className="flex ml-2">
                  <ReactSVG  src={dot}  className="h-[1rem] mt-[1.4rem] ml-4" />
                  <span className="font-sans text-xl font-normal text-[#B2B2B2] mr-2 mt-[0.9rem]">
                    Optimal
                  </span>
                </div>
                <div className="text-[#08B7F6] font-sans text-lg leading-3 mt-[1.5rem] ml-4">
                View Details
              </div>
              </div>
            </div>
             </div>
        </div>
      </div>
    </>
  );
}

export default Parameters;
