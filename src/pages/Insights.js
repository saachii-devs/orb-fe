import React, { useEffect, useState } from "react";
import body from "../assets/body.svg";
import Summary from "../components/Summary/Summary";
import SummaryParameters from "../components/SummaryParameters/SummaryParameters";
import { Link,Navigate } from "react-router-dom";
function Insights() {
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
  const loggedInUser = localStorage.getItem("authenticated");
  if (loggedInUser) {
    setauthenticated(loggedInUser);
  }else{
    setauthenticated(false)
  }
}, []);

if (authenticated===false) {
  return <Navigate replace to="/" />;
}
 return (
    <div className="h-full w-[90%] mx-auto ">
      <div className="md:hidden text-[#F4F4F4] font-base mb-2 mt-6 mr-32 font-poppins text-3xl ">
            Summary
          </div>
    <div className=" flex-col md:hidden mt-6 ml-4">
    
    <Summary />
    <Summary />
    <Summary />
    <Summary />
    <Summary />
    </div>
     
      <div className="hidden md:flex mt-4">
        <div className="flex-col h-[80%] flex-1 mt-6 md:mt-16 max-w-[33.33%]">
          <div className="text-[#F4F4F4] font-base md:font-bold font-poppins text-3xl md:ml-6  ">
            Summary
          </div>
          <div className="m-8">
            <Summary />
          </div>
          <div className="m-8">
            <Summary />
          </div>
          <div className="m-8">
            <Summary />
          </div>
        </div>
        <div className="flex-1 ">
          <img src={body} alt="" className="hidden  md:block w-[80%] h-full ml-10 mt-14" />
        </div>
        <div className="flex-col h-[80%] flex-1 mt-16 max-w-[33.33%]">
          <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
            Your Clevo Code:
            <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
          </div>
          <div className="m-8">
            <Summary />
          </div>
          <div className="m-8">
            <Summary />
          </div>
          <div className="m-8">
            <Summary />
          </div>
        </div>
      </div>

      <div className="mt-8">
            <div className="text-[#F4F4F4] font-bold font-poppins text-3xl ml-10  ">
            Parameters
            </div>

            <div className="flex">
            <div className="flex-col" >

            <Link to="/Parameters"><SummaryParameters/> </Link>
            <SummaryParameters/>
            <SummaryParameters/>
            <SummaryParameters/>
            <SummaryParameters/>
            <SummaryParameters/>
            </div>
            <div className="flex-col" >
            <SummaryParameters/>
            <SummaryParameters/>
            <SummaryParameters/>
            <SummaryParameters/>
            <SummaryParameters/>
            <SummaryParameters/>
            </div>
               
            </div>
    </div>
      </div>
      
  );
}

export default Insights;
