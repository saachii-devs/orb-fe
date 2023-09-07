import React from 'react'
import Factors from '../../components/HealthCareProfessionals/nteractionWithExtrenalComp/Factors'
import Triggers from '../../components/HealthCareProfessionals/nteractionWithExtrenalComp/Triggers'

const InteractionWithExternalFactors = () => {
  return (
    <div>
       <div className="md:hidden flex justify-between  w-full ">
        <div className= "text-[#F4F4F4] font-semibold mb-2 mt-4 ml-4 font-poppins text-xl ">
        Interaction With External Components 
        </div>
        <div className="text-[#B2B2B2] w-[7rem] ml-6 font-poppins text-xs mt-4">
            Your Clevo Code
            <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
          </div>
      </div>


      <div className=" w-full h-auto justify-between pl-8 py-10 pr-[5.8rem] hidden md:flex">
        <div className="text-[#F4F4F4] font-base font-poppins text-3xl ml-8  ">
        Interaction With External Components 
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className='text-[#F4F4F4] font-poppins text-xl md:ml-16 mb-4 mt-4 ml-4 md:mb-0 md:mt-0 '>Lifestyle Factors</div>
      <div className='md:flex gap-1 hidden '>
        <Factors/>
        <Factors/>
      </div>

      <div className='flex-col md:hidden w-[90%] ml-4 '>
        <Factors/>
        <Factors/>
      </div>
      <div className='text-[#F4F4F4] font-poppins text-xl md:ml-16 mb-4 mt-4 ml-4 md:mb-0 md:mt-0'>External Triggers</div>
      <div className='md:flex md:flex-wrap flex-col w-[90%] ml-4'>
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