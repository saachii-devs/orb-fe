import React, { useState } from 'react';

function YesNoCheckbox() {
  const [yesChecked, setYesChecked] = useState(true);
  const [noChecked, setNoChecked] = useState(false);

  const handleYesChange = () => {
    setYesChecked(true);
    setNoChecked(false);
  };

  const handleNoChange = () => {
    setYesChecked(false);
    setNoChecked(true);
  };

  return (
    <div className='mb-6'>
      <label className="inline-flex items-center space-x-2">
        
        <span className={`md:w-[10rem] w-[7rem] p-[0.7rem] rounded-l-md text-center ${yesChecked?"bg-[#080594] text-white border-2 border-[#080594]":"text-[#080594] border-2 border-[#080594]"}`}onClick={handleYesChange}>Yes</span>
      </label>
      <label className="inline-flex items-center space-x-2">
        <span className={`md:w-[10rem] w-[7rem] p-[0.7rem] text-center rounded-r-md ${noChecked?"bg-[#080594] text-white border-2 border-[#080594]":"text-[#080594] border-2 border-[#080594]"}`}onClick={handleNoChange}>No</span>
      </label>
    </div>
  );
}

export default YesNoCheckbox;
