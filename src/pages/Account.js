import React from 'react'

const Account = () => {
  return (
    <div>
    <div className="flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
      <div className="text-[#F4F4F4] font-base font-poppins text-3xl ml-8  ">
        Account
      </div>
      <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
        Your Clevo Code:
        <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
      </div>
    </div>
    <div className='flex-col'>
    <div className="uppercase whitespace-nowrap text-[#B2B2B2] font-sans text-lg font-semibold ml-16  tracking-widest">
    Profile Details
    </div>
    <div className="uppercase whitespace-nowrap text-[#B2B2B2] font-sans text-lg font-semibold  ml-16 mt-4  tracking-widest">
    Name
    </div>
    <div className="uppercase whitespace-nowrap text-[#B2B2B2] font-sans text-lg font-semibold ml-16 mt-4   tracking-widest">
    Clevo code
    </div>
    <div className="uppercase whitespace-nowrap text-[#B2B2B2] font-sans text-lg font-semibold ml-16 mt-4  tracking-widest">
    email
    </div>
    <div className="uppercase whitespace-nowrap text-[#B2B2B2] font-sans text-lg font-semibold ml-16 mt-4  tracking-widest">
    Number
    </div>
    </div>
  </div>
  )
}

export default Account