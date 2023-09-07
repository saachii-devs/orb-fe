import React from "react";

const WR2Rows = () => {
  return (
    <div className="md:ml-16 md:h-[22rem] md:pb-8 w-[90%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
      <div className="bg-[#191B20] h-[4rem] md:h-[33%] overflow-hidden pt-4 md:pt-[3.3%] md:pb-[2%] pl-[2rem] rounded-t-3xl">
        <span className="md:ml-[4.3%]  text-[#B2B2B2] text-center md:text-xl font-normal tracking-wider md:tracking-widest leading-relaxed uppercase font-sans ">
          Overall Workout Regime
        </span>
      </div>
      
        <div className="w-[99%] flex-col">
        <div className="ml-[1%] mt-[1.5rem] pb-[1.5rem] flex md:whitespace-nowrap border-b-[0.5px] border-b-zinc-600/20 whitespace-normal">
            <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[6%] text-xl mt-[0.11%]">
              Primary Factors
            </div>
            <div className="shadow-sm text-[#FFF] font-sans ml-8 md:ml-[1rem] text-2xl pt-[-0.3%] ">
              :
            </div>
            <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold md:text-center w-[10rem] pt-[0.35%] pl-[3rem]  tracking-widest">
              faulty Zone
            </div>
          </div>

          <div className="ml-[1%] mt-[1.5rem] pb-[1.5rem] flex md:whitespace-nowrap border-b-[0.5px] border-b-zinc-600/20 whitespace-normal">
            <div className="shadow-sm w-[20%] text-[#FFF] font-sans ml-[6%] text-xl mt-[0.11%]">
              Primary Factors
            </div>
            <div className="shadow-sm text-[#FFF] font-sans ml-8 md:ml-[1rem] text-2xl pt-[-0.3%] ">
              :
            </div>
            <div className="uppercase text-[#00DEFF] font-sans text-lg font-bold md:text-center w-[10rem] pt-[0.35%] pl-[3rem]  tracking-widest">
              faulty Zone
            </div>
          </div>

          
        </div>
     
    </div>
  );
};

export default WR2Rows;
