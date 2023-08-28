import React from "react";
import { ReactComponent as Graph } from "../../../assets/bargraph.svg";

const WarningDisease = () => {
  return (
    <div className=" ml-16 h-[20rem] w-[90%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
      <div className="flex w-[95%] h-[80%] ml-[2.5%] mt-[2%] ">
        <div className="flex items-center w-[47%] ml-[1.5rem] mt-4 border-r-[0.5px] border-zinc-600/20 ">
          <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[1%] text-2xl whitespace-nowrap">
            Overall Risk
          </div>
          <Graph className="w-[67%] h-[45%] ml-[9%]" />
        </div>
        <div className="w-[47%] flex-col">
            <div className="ml-[6%] mt-[2.7%] flex whitespace-nowrap">
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[1%] text-xl">Primary Factors</div>
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[22%] text-2xl pt-[-0.3%] ">:</div>
                <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold text-center w-[10rem] pt-[0.4%] mr-[22%] tracking-widest">
              faulty Zone
            </div>
            </div>
            <div className="ml-[6%] mt-[3.5%] flex whitespace-nowrap">
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[1%] text-xl">Internal Triggers</div>
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[22%] text-2xl pt-[-0.3%] ">:</div>
                <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold text-center w-[10rem] pt-[0.4%] mr-[22%] tracking-widest">
                Moderately faulty Zone
            </div>
            </div>
            <div className="ml-[6%] mt-[3.5%] flex whitespace-nowrap">
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[1%] text-xl">Non-modifiable factors</div>
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[22%] text-2xl pt-[-0.3%] ">:</div>
                <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold text-center w-[10rem] pt-[0.4%] mr-[22%] tracking-widest">
                Optimal Zone
            </div>
            </div>
            <div className="ml-[6%] mt-[3.5%] flex whitespace-nowrap">
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[1%] text-xl">Physiological factors</div>
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[22%] text-2xl pt-[-0.3%] ">:</div>
                <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold text-center w-[10rem] pt-[0.4%] mr-[22%] tracking-widest">
                Normal Zone
            </div>
            </div>
            <div className="ml-[6%] mt-[3.5%] flex whitespace-nowrap">
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[1%] text-xl">External triggers</div>
                <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[22%] text-2xl pt-[-0.3%] ">:</div>
                <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold text-center w-[10rem] pt-[0.4%] mr-[22%] tracking-widest">
              faulty Zone
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WarningDisease;
