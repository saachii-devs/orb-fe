import React from 'react'
import { ReactSVG } from 'react-svg'

function Factors() {
  return (
    <div className="h-[30rem] w-[38%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
              <div className="bg-[#191B20] h-[18%] overflow-hidden pt-[4.3%] pl-[2rem] rounded-t-3xl">
                <span className="text-[#B2B2B2]  text-center text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">nicotine addiction</span>
              </div>
              <div className='flex-col h-[100%] '>
                    <div className='bg-red-100 h-[33.33%]'>
                        <div></div>
                        
                    </div>
                    <div className='bg-red-200 h-[33.33%]'>2</div>
                    <div className='bg-red-300 h-[33.33%] rounded-b-3xl'>3</div>
              </div>
            </div>
  )
}

export default Factors