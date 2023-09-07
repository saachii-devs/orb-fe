import React from 'react'
import {ReactComponent as Brain} from "../../SummarySvg/brain.svg"
function icon() {
  return (
    <div className='md:w-[19.6rem] flex-col  w-[10rem] h-[8rem] md:h-[18rem] bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl'>
       <Brain className='md:mt-10 md:ml-14 w-[6rem] h-[4.5rem] md:w-[13rem] md:h-[11rem] ml-6 mt-4' />
       <div className="text-[#B2B2B2] md:text-2xl text-xl ml-10  font-normal tracking-widest leading-relaxed uppercase font-sans md:ml-[7.25rem] md:mt-[1rem]  ">BRAIN </div>

    </div>
  )
}

export default icon