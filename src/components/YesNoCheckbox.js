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
    <div className='mb-2'>
      <label className="inline-flex items-center space-x-2">
        
        <span className={`md:w-[7rem] text-center ${yesChecked?"bg-blue-700 text-white border-2 border-blue-700":"text-blue-700 border-2 border-blue-700"}`}onClick={handleYesChange}>Yes</span>
      </label>
      <label className="inline-flex items-center space-x-2">
        <span className={`md:w-[7rem] text-center ${noChecked?"bg-blue-700 text-white border-2 border-blue-700":"text-blue-700 border-2 border-blue-700"}`}onClick={handleNoChange}>No</span>
      </label>
    </div>
  );
}

export default YesNoCheckbox;
