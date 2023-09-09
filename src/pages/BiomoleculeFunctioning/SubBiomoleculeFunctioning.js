import React from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/ItemSummary/Item";
import Button from "../../components/Button";
const SubBiomoleculeFunctioning = () => {
  let {subid} = useParams();
  console.log(subid)
  return (
    <div>
      <div className="md:hidden flex justify-between ml-4 mt-6 w-full ">
        <div className="text-[#F4F4F4] font-semibold mb-2 font-poppins text-2xl ">
          Brain
        </div>
        <div className="text-[#B2B2B2] w-[7rem] mr-4 font-poppins text-xs ">
          Your Clevo Code
          <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="hidden md:flex w-full h-auto justify-between pl-8 py-10 pr-[5.8rem]">
        <div className="text-[#F4F4F4] font-bold font-poppins text-3xl ml-8  ">
          Brain
        </div>
        <div className="text-[#B2B2B2] font-poppins text-base ml-[9rem]">
          Your Clevo Code:
          <span className="text-[#FFF] ml-2"> 1010 3431 1200</span>
        </div>
      </div>
      <div className="w-full ml-4 mt-4 md:mt-0 md:ml-[3.7rem]">
        <Item />
      </div>

      <div className="w-full h-auto mb-8">
        <div className="text-[#F4F4F4] font-semibold text-2xl mt-6 ml-4 md:font-bold font-poppins md:text-3xl md:pt-16 md:ml-16 w-full">
          Biomolecule Functioning
        </div>
        <div className="flex gap-4 ml-4 mt-4 md:ml-[2rem] md:mt-8">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <div className="w-[92%] mx-auto mt-8 h-auto border-[1px] border-[#B2B2B2]/20 rounded-2xl hidden md:block">
          <div className="md:h-16  border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] md:text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center ">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 border-b-[1px] border-[#B2B2B2]/20 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>

          <div className="h-16 flex items-center pl-2">
            <div className="h-[3rem] pt-[0.5rem] pb-[0.5rem] border-r-[1px] border-[#B2B2B2]/20 w-[12.5%] uppercase font-sans text-[#B2B2B2] text-xl">
              <span className="ml-[3.2rem] text-center tracking-widest">
                DRD2
              </span>
            </div>
            <div className="h-[3rem] pt-[0.7rem] pb-[0.5rem] font-sans text-[#B2B2B2] text-md">
              <span className="ml-[1rem] text-center">
                Enzyme of the nervous system that breaks down the
                neurotransmitters dopamine, norepinephrine, and adrenaline by
                transferring amethyl group to them, from SAM-e.
              </span>
            </div>
          </div>
        </div>

        {/* for Mobile table */}
       <div className="md:hidden w-[92%] h-auto border-[1px] border-[#B2B2B2]/20 rounded-xl ml-4 mt-4 font-sans">
          <div className="flex border-b-[1px] border-[#B2B2B2]/20  items-center h-10">
            <div className="text-[#d2d2d2] uppercase ml-2 h-[80%]  border-r-[1px] border-[#B2B2B2]/20 w-[15%] mx-4">
            <div className="text-center mt-[0.3rem] mr-2">DRD2</div>
            </div>
            <div className="text-[#d2d2d2] text-[7px]">  Enzyme of the nervous system that breaks down the neurotransmitters dopamine, norepinephrine, and adrenaline by transferring amethyl group to them, from SAM-e.</div>
          </div>

          <div className="flex border-b-[1px] border-[#B2B2B2]/20  items-center h-10">
            <div className="text-[#d2d2d2] uppercase ml-2 h-[80%]  border-r-[1px] border-[#B2B2B2]/20 w-[15%] mx-4">
            <div className="text-center mt-[0.3rem] mr-2">DRD2</div>
            </div>
            <div className="text-[#d2d2d2] text-[7px]">  Enzyme of the nervous system that breaks down the neurotransmitters dopamine, norepinephrine, and adrenaline by transferring amethyl group to them, from SAM-e.</div>
          </div>

          <div className="flex border-b-[1px] border-[#B2B2B2]/20  items-center h-10">
            <div className="text-[#d2d2d2] uppercase ml-2 h-[80%]  border-r-[1px] border-[#B2B2B2]/20 w-[15%] mx-4">
            <div className="text-center mt-[0.3rem] mr-2">DRD2</div>
            </div>
            <div className="text-[#d2d2d2] text-[7px]">  Enzyme of the nervous system that breaks down the neurotransmitters dopamine, norepinephrine, and adrenaline by transferring amethyl group to them, from SAM-e.</div>
          </div>

          <div className="flex border-b-[1px] border-[#B2B2B2]/20  items-center h-10">
            <div className="text-[#d2d2d2] uppercase ml-2 h-[80%]  border-r-[1px] border-[#B2B2B2]/20 w-[15%] mx-4">
            <div className="text-center mt-[0.3rem] mr-2">DRD2</div>
            </div>
            <div className="text-[#d2d2d2] text-[7px]">  Enzyme of the nervous system that breaks down the neurotransmitters dopamine, norepinephrine, and adrenaline by transferring amethyl group to them, from SAM-e.</div>
          </div>

          <div className="flex border-b-[1px] border-[#B2B2B2]/20  items-center h-10">
            <div className="text-[#d2d2d2] uppercase ml-2 h-[80%]  border-r-[1px] border-[#B2B2B2]/20 w-[15%] mx-4">
            <div className="text-center mt-[0.3rem] mr-2">DRD2</div>
            </div>
            <div className="text-[#d2d2d2] text-[7px]">  Enzyme of the nervous system that breaks down the neurotransmitters dopamine, norepinephrine, and adrenaline by transferring amethyl group to them, from SAM-e.</div>
          </div>

          <div className="flex   items-center h-10">
            <div className="text-[#d2d2d2] uppercase ml-2 h-[80%]  border-r-[1px] border-[#B2B2B2]/20 w-[15%] mx-4">
            <div className="text-center mt-[0.3rem] mr-2">DRD2</div>
            </div>
            <div className="text-[#d2d2d2] text-[7px]">  Enzyme of the nervous system that breaks down the neurotransmitters dopamine, norepinephrine, and adrenaline by transferring amethyl group to them, from SAM-e.</div>
          </div>
       </div>

        <div className="flex gap-4 ml-[2rem] mt-8">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default SubBiomoleculeFunctioning;
