import React, { useEffect, useState } from 'react'
import Item from '../components/ItemSummary/Item'
import Parameters from '../components/Parameters/Parameters'
import { Navigate } from 'react-router-dom'


function SubParameters() {
  const[authenticated,setauthenticated] = useState(null)
//   const summary1 = [
//     "biomolecules functioning",
//     "cellular health",
//     "stress response",
//   ];
//   const summary2 = [
//     "Lifestyle & Environmental factors/metabolism",
//     "Hormones & neurotransmitters",
//     "Eating Behaviour & Taste",
//   ];
useEffect(() => {
  window.scrollTo(0, 0);
  const loggedInUser = localStorage.getItem("authenticated");
  if (loggedInUser) {
    setauthenticated(loggedInUser);
  }
  else{
    setauthenticated(false)
  }
}, [authenticated]);

if (authenticated===false) {
  return <Navigate replace to="/" />;
}
return (
    <div className='overflow-x-hidden'>
        <div className='flex w-full h-auto justify-between md:pl-8 md:py-10 md:pr-[5.8rem] overflow-none'>
        <div className="md:hidden flex justify-between w-full">
        <div className= "text-[#F4F4F4] font-semibold mb-2 mt-6 md:mr-32 ml-[1.1rem] font-poppins text-2xl ">
          Summary
        </div>
        <div className="text-[#B2B2B2] w-[7rem] mt-[1.8rem] mr-2 font-poppins text-xs md:ml-[9rem]  ">
            Your Clevo Code
            <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
          </div>
      </div>

        <div className="text-[#F4F4F4] font-bold font-poppins text-3xl ml-8  hidden md:block">
            Brain
          </div>
            <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem] hidden md:block">
            Your Clevo Code:
            <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
          </div>

        </div>
        <div className='w-full ml-4 mt-6 md:ml-[3.7rem]'>
            <Item/>
        </div>
       
          <div className='w-full h-auto mb-8'>
          <div className="text-[#F4F4F4] md:font-bold font-semibold font-poppins md:text-3xl text-2xl md:pt-16 md:ml-16 ml-4 mt-10 w-full">
            Parameters
          </div>
                <div className=' mt-8 md:mt-[3rem]'><Parameters/></div>
                <div className='mt-8 md:mt-[3rem]'><Parameters/></div>
                <div className='mt-8 md:mt-[3rem]'><Parameters/></div>
                <div className='mt-8 md:mt-[3rem]'><Parameters/></div>
                <div className='mt-8 md:mt-[3rem]'><Parameters/></div>
                
                
          </div>
    </div>
  )
}

export default SubParameters