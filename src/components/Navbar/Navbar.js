import React from "react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import {ReactComponent as Nav} from "../../assets/HamBurger.svg"
function Navbar() {
  const navElements = [
    "INSIGHTS",
    "FOR HEALTHCARE PROFESSIONALS",
    "ABOUT  REPORT",
    "ACCOUNT",
    
  ];
  const logout = ()=>{
    localStorage.removeItem("authenticated");
  }
  const elements = navElements.map((element, index) => (
    <Link to="Insights"><span key={index} className=" text-gray-600 my-auto shadow-text hover:text-[#08B7F6] hover:font-semibold py-auto text-[.75rem] font-roboto mr-[3.5rem] font-semi-bold leading-3 tracking-tight">{element}</span></Link>
  ));

  return (
    <>
    <div className=" justify-between w-full h-[3.75rem] shadow-navbar hidden md:flex">
     
      <img src={logo} className="text-white w-[11.41rem] h-[2.8125rem] ml-[3.5rem] mt-2" alt="" onClick={logout}/>
      
        <div className=" my-auto w-[42rem] flex-shrink-0 ">
          {elements}
        </div>
      
    </div>
    <div className="flex justify-between md:hidden">
    <img src={logo} className="text-white w-[11rem] h-[2.5rem] ml-[0.5rem] mt-2 " alt="" onClick={logout}/>
    <div>
      <Nav className="w-[3rem] h-[3rem] mt-2 mr-4"/>
    </div>
    </div>
    </>
  );
}

export default Navbar;
