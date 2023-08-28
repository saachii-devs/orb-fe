import React from 'react'
import Factors from '../../components/HealthCareProfessionals/nteractionWithExtrenalComp/Factors'
import Triggers from '../../components/HealthCareProfessionals/nteractionWithExtrenalComp/Triggers'

const InteractionWithExternalFactors = () => {
  return (
    <div>
      <div className="flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
        <div className="text-[#F4F4F4] font-base font-poppins text-3xl ml-8  ">
        Interaction With External Components 
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className='text-[#F4F4F4] font-poppins text-xl ml-16'>Lifestyle Factors</div>
      <div className='flex gap-1'>
        <Factors/>
        <Factors/>
      </div>
      <div className='text-[#F4F4F4] font-poppins text-xl ml-16 mt-6'>External Triggers</div>
      <div className='flex flex-wrap'>
        <Triggers/>
        <Triggers/>
        <Triggers/>
        <Triggers/>
        <Triggers/>
        <Triggers/>

      </div>
    </div>
  )
}

export default InteractionWithExternalFactors