import React from 'react'
import Item from '../components/ItemSummary/Item'
import Parameters from '../components/Parameters/Parameters'



function SubParameters() {
  return (
    <div className='overflow-x-hidden'>
        <div className='flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem] overflow-none'>
        <div className="text-[#F4F4F4] font-bold font-poppins text-3xl ml-8  ">
            Brain
          </div>
            <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
            Your Clevo Code:
            <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
          </div>
        </div>
        <div className='w-full ml-[3.7rem]'>
            <Item/>
        </div>
       
          <div className='w-full h-auto mb-8'>
          <div className="text-[#F4F4F4] font-bold font-poppins text-3xl pt-16 ml-16 w-full">
            Parameters
          </div>
                <div className='mt-[3rem]'><Parameters/></div>
                <div className='mt-[3rem]'><Parameters/></div>
                <div className='mt-[3rem]'><Parameters/></div>
                <div className='mt-[3rem]'><Parameters/></div>
                <div className='mt-[3rem]'><Parameters/></div>
                
                
          </div>
    </div>
  )
}

export default SubParameters