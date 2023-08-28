import React from 'react'
import {ReactComponent as Graph} from "../../../assets/bargraph.svg"

const EarlyWarnng = () => {
  return (
    <div className="ml-16 h-[24rem] w-[42.5%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
              <div className="bg-[#191B20] h-[18%] overflow-hidden pt-[4.3%] pl-[2rem] rounded-t-3xl">
                <span className="text-[#B2B2B2]  text-center text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">Smoking</span>
                {/* <div className='text-[#08B7F6] w-[5%] '>Click here For Root Cause Analysis (RCA)</div> */}
              </div>
              <div className='flex-col h-[100%] ml-4'>
                    <div className='h-[40%] flex items-center border-b-[0.5px] border-b-[#323D50] w-[90%] ml-4'>
                        <div className='shadow-sm w-[20%] text-[#FFF] font-sans ml-[2.3%] text-lg'>Overall Risk</div>
                        <Graph className='w-[65%] ml-[13%]'/> 
                    </div>
                    
                    <div className='h-[40%] flex items-center w-[90%] ml-4'>
                        <div className='shadow-sm w-[30%] text-[#FFF] font-sans ml-[2.3%] text-lg'>Primary factors</div>
                        <div className="uppercase text-[#00DEFF] font-sans text-xl font-bold text-centerw-[10rem] mt-[0.2%rem] ml-[13%]">
              faulty Zone
            </div>
                    </div>
              </div>
            </div>
  )
}

export default EarlyWarnng