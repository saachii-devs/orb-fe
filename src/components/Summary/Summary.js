import React from 'react'
import { ReactSVG } from 'react-svg';
import dot from "../../assets/dot.svg"
import graydot from "../../assets/graydot.svg"
import lightgraydot from "../../assets/lightgray.svg"
import DoughnutChart from '../Doughnut';

const Summary= (props) => {
  return (
    <>
      <div className='w-[20rem] h-[15rem] mt-8 md:mt-0 md:w-[23.5rem] md:h-[19rem] bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl'>
        
      <div className="w-[5rem] h-[2rem] whitespace-nowrap text-xl ml-4 mt-4 md:w-[20rem] md:h-[1.8rem] text-[#B2B2B2] md:text-lg font-normal tracking-widest leading-relaxed uppercase font-sans md:mx-[2.5rem] md:mt-[2rem] ">
      {/* {props.heading} */} Cellular Health
      </div>
      <div className='text-[3rem] arca text-white absolute right-[62%] bottom-[26%] md:right-[61%] md:bottom-[31%] font-quick font-bold'>
        38
        <span className='text-[1rem]'>%</span>
      </div>
      <div className='flex'>
      <div className='flex-grow w-12 h-12 md:w-[5rem] md:h-[5rem] mt-[1.1rem] ml-2 md:ml-[1.1rem]'>
      <DoughnutChart/>
      </div>
      <div className='flex-grow w-[10%] h-full my-auto mt-10 ml-4 md:mt-14 md:ml-6'>
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