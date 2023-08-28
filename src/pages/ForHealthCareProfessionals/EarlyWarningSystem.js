import React from 'react'
import EarlyWarnng from '../../components/HealthCareProfessionals/nteractionWithExtrenalComp/EarlyWarnng'
import {ReactComponent as ArrowRight} from "../../assets/arrowright.svg"
import {ReactComponent as ArrowLeft} from "../../assets/arrowleft.svg"

const EarlyWarningSystem = () => {
  return (
    <div>
    <div className="flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
        <div className="text-[#F4F4F4] font-base font-poppins text-3xl ml-8  ">
        Early Warning System 
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
        
      </div>
      <div className='flex flex-wrap gap-1'>
            <EarlyWarnng/>
            <EarlyWarnng/>
            <EarlyWarnng/>
            <EarlyWarnng/>
            <EarlyWarnng/>
            <EarlyWarnng/>
            <EarlyWarnng/>
            <EarlyWarnng/>
            <EarlyWarnng/>
            <EarlyWarnng/>
        </div>

        <div className='w-[11%] h-[3rem] border-2 border-[#20B3FF] mx-auto my-6 flex rounded mb-32'>
        <div className='w-[29%] mx-[1.25rem] py-[0.9rem] cursor-pointer'>
          <ArrowLeft className='cursor-pointer'/>
        </div>
        <div className='border-r-2 border-[#20B3FF] border-l-2 w-[39%] text-[#FFFFFF] font-roboto px-[1.4rem] py-[0.6rem]'>1</div>
        <div className='w-[29%] mx-[1.25rem] py-[0.9rem] cursor-pointer '>
        <ArrowRight className='cursor-pointer'/>
        </div>
        </div>
    </div>
  )
}

export default EarlyWarningSystem