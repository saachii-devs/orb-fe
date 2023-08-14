import React from "react";
import logo from "../../assets/logo.svg"

function Navbar() {
  const navElements = [
    "INSIGHTS",
    "FOR HEALTHCARE PROFESSIONALS",
    "ABOUT REPORT",
    "ACCOUNT",
  ];

  const elements = navElements.map((element, index) => (
    <span key={index} className=" text-gray-600 my-auto py-auto text-sm font-roboto mr-[3.5rem] font-normal leading-3 tracking-tight">{element}</span>
  ));

  return (
    <div className="flex justify-between w-full h-[3.75rem] shadow-navbar">

      <img className="text-white w-[11.41rem] h-[2.8125rem] ml-[3.5rem]" src={logo} alt=""/>
        <div className=" text-shadow-navbar my-auto w-[42rem] flex-shrink-0">
          {elements}
        </div>
      
    </div>
  );
}

export default Navbar;
