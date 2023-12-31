import React from 'react'
import {ReactComponent as Graph} from "../../../assets/bargraph.svg"

function Factors() {
  return (
    <div className="md:ml-16 md:h-[33rem] md:w-[42.7%] bg-[#1C1F24] shadow-s md:mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 md:rounded-3xl rounded-2xl">
              <div className="bg-[#191B20] h-[18%] overflow-hidden pt-[4.3%] pl-[2rem] rounded-t-3xl">
                <span className="text-[#B2B2B2]  text-center text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">Smoking</span>
              </div>
              <div className='flex-col h-[100%] ml-4'>
                    <div className='h-[27%] flex items-center border-b-[0.5px] border-b-[#323D50] w-[90%] ml-4'>
                        <div className='shadow-sm w-[20%] text-[#FFF] font-sans ml-[2.3%] text-xs md:text-lg'>Inclination & Psychological Intertia</div>
                        <Graph className='w-[65%] ml-[13%]'/>
                       
                    </div>
                    
                    <div className='h-[27%] flex items-center border-b-[0.5px] border-b-[#323D50] w-[90%] ml-4'>
                        <div className='shadow-sm w-[20%] text-[#FFF] font-sans ml-[2.3%] text-xs md:text-lg'>Consumption or Exposure</div>
                        <Graph className='w-[65%] ml-[13%]'/>
                       
                    </div>
                   
                    <div className='h-[27%] flex items-center w-[90%] ml-4'>
                        <div className='shadow-sm w-[20%] text-[#FFF] font-sans ml-[2.3%] text-xs md:text-lg'>Sensitivity to Factor</div>
                        <Graph className='w-[65%] ml-[13%]'/>
                       
                    </div>
              </div>
            </div>
  )
}

export default Factors