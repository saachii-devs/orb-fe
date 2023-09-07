import React from 'react'
import dot from "../../../assets/dot.svg"
import {ReactComponent as Graph} from "../../../assets/bargraph.svg"


const Triggers = () => {
  return (
    <div className="md:ml-16 md:h-[14rem] md:w-[43%] bg-[#1C1F24] shadow-s mt-[1.5rem] mb-4 border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
    <div className="bg-[#191B20] h-[33%] overflow-hidden pt-[4.3%] pl-[2rem] rounded-t-3xl">
      <span className="text-[#B2B2B2]  text-center text-xl font-normal tracking-widest leading-relaxed uppercase font-sans ">Smoking</span>
    </div>
    <div className='flex items-center w-[90%] ml-[1.5rem] mt-4'>
              <span><img src={dot} alt="a dot" className='md:mb-[1.4rem]'></img></span>  
              <div className='shadow-sm w-[20%] text-[#FFF] font-sans ml-[1%]'>Sensitivity to Factor</div>
              <Graph className='w-[65%] ml-[10%]'/>
             
          </div>
  </div>
  )
}

export default Triggers