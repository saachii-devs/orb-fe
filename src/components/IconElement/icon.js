import React from 'react'
import { ReactSVG } from 'react-svg';
import brain from "../../SummarySvg/brain.svg"
function icon() {
  return (
    <div className='w-[16rem] h-[16rem] bg-[#1C1F24] shadow-s mt-[5rem] ml-12 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl'>
       <ReactSVG src={brain} className='mt-6 ml-8'/>
       <div className="text-[#B2B2B2] text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ml-[6rem] mt-[1rem] ">BRAIN </div>

    </div>
  )
}

export default icon