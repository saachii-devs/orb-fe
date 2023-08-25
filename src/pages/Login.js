import React from "react";
import { ReactSVG } from "react-svg";
import login from "../assets/login.svg";
function Login() {
  return (
    <div className="flex items-center gap-[4rem] ml-[24.5%] mt-[5%] h-[32rem] w-[55%] bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
      <div className=" w-[40rem] h-[27rem] mt-[2.5rem] flex items-center gap-[4rem] ml-[5.5rem]">
        <div className="w-[40%] h-full">
          <div className="text-[#FFF] font-roboto text-3xl font-sm my-[1.8rem] whitespace-nowrap">Sign In</div>
          <div className="flex-col mt-[5rem]">
            <form>
              <div className="flex-col">
                <div className=" mb-[1px] ">
                  <label className="text-[#B2B2B2] font-roboto whitespace-nowrap">Clevo code</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="bg-transparent border-b-[1px] border-b-[#2E333B] w-full font-roboto "
                  />
                </div>
              </div>

              <div className="flex-col mt-4">
              <div>

              <label className="text-[#B2B2B2] whitespace-nowrap">Mobile Number</label></div>
                <div className="flex">
              <span className="bg-transparent border-b-[1px] border-b-[#2E333B] font-roboto mr-2 w-10 ">+91</span>
                <input
                  type="text"
                  className="bg-transparent border-b-[1px] border-b-[#2E333B] w-full"
                /></div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[40%] mt-2 mr-16 hidden md:block">
          <ReactSVG src={login} height="1000" width="1000" className="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
