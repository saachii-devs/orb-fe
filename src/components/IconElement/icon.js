import React from 'react'
import {ReactComponent as Brain} from "../../SummarySvg/brain.svg"
function icon() {
  return (
    <div className='w-[19.6rem] h-[18rem] bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl'>
       <Brain className='mt-10 ml-14'/>
       <div className="text-[#B2B2B2] text-2xl font-normal tracking-widest leading-relaxed uppercase font-sans ml-[7.25rem] mt-[1rem] ">BRAIN </div>

    </div>
  )
}

export default icon