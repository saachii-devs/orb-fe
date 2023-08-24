import React from 'react'
import dot from "../../assets/dot.svg"
import body from "../../assets/body.svg"
import graydot from "../../assets/graydot.svg"
import lightgraydot from "../../assets/lightgray.svg"
import circle from "../../assets/circlegraph.svg"

function Summary() {
  return (
    <>
      <div className='w-[25.5rem] h-[20rem] bg-[#1C1F24] shadow-s mt-[5rem] ml-12 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl'>
        
      <div className="w-[20rem] h-[1.8rem] text-[#B2B2B2] text-lg font-normal tracking-widest leading-relaxed uppercase font-sans mx-[2.5rem] mt-[2rem] ">
      Cellular Health
      </div>
      <div className='text-[3rem] text-white absolute right-[58%] bottom-[32%] font-roboto font-bold'>
        68%
      </div>
      <div className='flex'>
      <div className='flex-grow w-[60%] h-full '>
      <img src={circle} alt="" className="w-full h-full z-1" />
      </div>
      <div className='flex-grow w-[40%] h-full my-auto'>
      <div className='flex'>
        <img src={dot} alt="dot" className="h-[1rem] mt-[1rem]"/>
        <span className="font-roboto text-base font-normal text-[#B2B2B2] mx-2 mt-[0.9rem]"> Optimal:</span>
        <span className="font-roboto text-base font-normal text-[#B2B2B2] mx-2 mt-[0.9rem]">68%</span>
        </div> 

        <div className='flex'>
        <img src={graydot} alt="" className="h-[1rem] mt-[1rem]"/>
        <span className="font-roboto text-base font-normal text-[#B2B2B2] mx-2 mt-[0.9rem]">Moderate: 20%</span>
              
        </div>
        <div className='flex'>
        <img src={lightgraydot} alt="" className="h-[1rem] mt-[1rem]"/>
        <span className="font-roboto text-base font-normal text-[#B2B2B2] mx-2  mt-[0.9rem]">Faulty: 12%</span>
        </div>
        
      </div>

      </div>

      </div>
    </>
  )
}

export default Summary;