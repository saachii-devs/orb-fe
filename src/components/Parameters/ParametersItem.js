import React from 'react'
import {ReactComponent as Dot} from "../../assets/dot.svg"
const ParametersItem = () => {
  return (
    <div className="h-[9.5rem] w-[50%] md:h-[9.6rem] md:min-w-[23.5%] ml-2 md:ml-0 bg-[#1C1F24] shadow-s md:mt-[1.5rem] md:mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
              <div className="bg-[#191B20] h-[60%]  pt-[7%] pl-[2rem] rounded-t-3xl">
                <span className="text-[#B2B2B2]  text-center md:text-xl text-lg font-normal tracking-widest leading-relaxed uppercase font-sans ">nicotine addiction</span>
              </div>
              <div className="flex md:gap-[5rem] gap-6">
                <div className="flex ml-2">
                  <Dot  className="h-[1rem] md:mt-[1.4rem] mt-[1.25rem] ml-4" />
                  <span className="font-sans md:text-xl text-lg font-normal text-[#B2B2B2] md:mr-2 mt-[0.9rem]">
                    Optimal
                  </span>
                </div>
                <div className="text-[#08B7F6] font-sans text-xs  md:text-lg leading-3 mt-[1.5rem] md:ml-4 mr-6 md:mr-0 mb-4  md:mb-0">
                View Details
              </div>
              </div>
            </div>
  )
}

export default ParametersItem