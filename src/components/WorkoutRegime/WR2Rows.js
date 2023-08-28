import React from "react";

const WR2Rows = () => {
  return (
    <div className="ml-16 h-[16rem] pb-8 w-[90%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
      <div className="bg-[#191B20] h-[6rem] overflow-hidden pt-[3.3%] pb-[2%] pl-[5.4rem] rounded-t-3xl">
        <div className=" pb-4 text-[#B2B2B2] text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">
          Overall Workout Regime
        </div>
      </div>
      
        <div className="w-[99%] flex-col">
        <div className="ml-[1%] mt-[1.5rem] pb-[1.5rem] flex whitespace-nowrap border-b-[0.5px] border-b-zinc-600/20 ">
            <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[6%] text-xl mt-[0.11%]">
              Primary Factors
            </div>
            <div className="shadow-sm text-[#FFF] font-sans ml-[1rem] text-2xl pt-[-0.3%] ">
              :
            </div>
            <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold text-center w-[10rem] pt-[0.35%] pl-[3rem]  tracking-widest">
              faulty Zone
            </div>
          </div>

          <div className="ml-[1%] mt-[1.5rem] pb-[1.5rem] flex whitespace-nowrap ">
            <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[6%] text-xl mt-[0.11%]">
              Primary Factors
            </div>
            <div className="shadow-sm text-[#FFF] font-sans ml-[1rem] text-2xl pt-[-0.3%] ">
              :
            </div>
            <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold text-center w-[10rem] pt-[0.35%] pl-[3rem]  tracking-widest">
              faulty Zone
            </div>
          </div>
          
        </div>
     
    </div>
  );
};

export default WR2Rows;
