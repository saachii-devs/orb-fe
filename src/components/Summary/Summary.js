import React from 'react'
import { ReactSVG } from 'react-svg';
import dot from "../../assets/dot.svg"
import graydot from "../../assets/graydot.svg"
import lightgraydot from "../../assets/lightgray.svg"
import circle from "../../assets/circlegraph.svg"

const Summary= (props) => {
  return (
    <>
      <div className='w-[23.5rem] h-[19rem] bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl'>
        
      <div className="w-[20rem] h-[1.8rem] text-[#B2B2B2] text-lg font-normal tracking-widest leading-relaxed uppercase font-sans mx-[2.5rem] mt-[2rem] ">
      {/* {props.heading} */} Cellular Health
      </div>
      <div className='text-[3rem] text-white absolute right-[63%] bottom-[31%] font-quick font-bold'>
        38
        <span className='text-[1rem]'>%</span>
      </div>
      <div className='flex'>
      <div className='flex-grow w-[40%] h-full mt-2'>
      <ReactSVG src={circle} className="w-full h-full z-1" />
      </div>
      <div className='flex-grow w-[10%] h-full my-auto mr-12'>
      <div className='flex'>
        <ReactSVG src={dot} al className="h-[1rem] mt-[1rem]"/>
        <span className="font-roboto text-sm font-normal text-[#B2B2B2] mr-[3px] ml-2 mt-[0.9rem] whitespace-nowrap"> Optimal:</span>
        <span className="font-roboto text-sm font-normal text-[#B2B2B2] mr-2 mt-[0.9rem] whitespace-nowrap">38%</span>
        </div> 

        <div className='flex'>
        <ReactSVG src={graydot} className="h-[1rem] mt-[1rem]"/>
        <span className="font-roboto text-sm font-normal text-[#B2B2B2] mx-2 mt-[0.9rem] whitespace-nowrap">Moderate: 20%</span>
              
        </div>
        <div className='flex'>
        <ReactSVG src={lightgraydot} className="h-[1rem] mt-[1rem]"/>
        <span className="font-roboto text-sm font-normal text-[#B2B2B2] mx-2  mt-[0.9rem] whitespace-nowrap">Faulty: 42%</span>
        </div>
        
      </div>

      </div>

      </div>
    </>
  )
}

export default Summary;