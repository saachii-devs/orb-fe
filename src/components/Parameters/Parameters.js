import React from "react";
import {ReactComponent as Graph} from "../../assets/graph.svg"
import ParametersItem from "./ParametersItem"; 

function Parameters() {
  return (
    <>
    <div className="md:hidden h-[26rem] w-full mt-10 bg-[#1C1F24] shadow-s  border-[0.5px] border-solid border-zinc-600/20 blur-0 flex-col">
      <div className="flex">
      <div className="flex-col mt-4 ml-4">
              <div className="text-[#F4F4F4] font-sans text-2xl leading-9 tracking-wide">
                Brain Activity
              </div>
              <div className="text-[#08B7F6] font-sans text-base leading-3 mt-2">
                View Details
              </div>
            </div>
            <div className="uppercase text-[#00DEFF] font-sans text-xl font-bold text-centerw-[10rem] mt-[1.2rem] ml-[2.8rem]">
              faulty Zone
            </div>
           
      </div>
      <div >
      <Graph  className="w-[95%] mt-8 ml-2 mb-2" />
      </div>
      <div className="w-full border-t-[0.5px] border-solid border-zinc-600/20 mb-4" />
          <div className=" w-full h-[61%] flex gap-12 overflow-y-show overflow-x-hidden">
            <ParametersItem/>
            <ParametersItem/>
            <ParametersItem/>
            <ParametersItem/>
             </div>

    </div>


      <div className="hidden md:block h-[25rem] w-full mt-12 flex-col bg-[#1C1F24] shadow-s  ml-0 border-[0.5px] border-solid border-zinc-600/20 blur-0 ">
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
            <Graph  className="w-[65%]" />
            <span className="uppercase text-[#00DEFF] font-sans text-xl font-bold text-centerw-[10rem] mt-[1.2rem] mr-[1.6rem]">
              faulty Zone
            </span>
          </div>
          <div className="w-full border-t-[0.5px] border-solid border-zinc-600/20 mt-8" />
          <div className=" w-full h-[61%] flex gap-12 overflow-y-show overflow-x-hidden">
            <ParametersItem/>
            <ParametersItem/>
            <ParametersItem/>
            <ParametersItem/>
             </div>
        </div>
      </div>
    </>
  );
}

export default Parameters;
