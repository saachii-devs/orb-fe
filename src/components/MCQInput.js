import React, { useState } from 'react';

function MCQInput({ options }) {
    console.log(options)
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
      <div>
        {options.map((option) => (
          <label key={option} className="block mb-2">
            <input
              type="radio"
              name="mcq-option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
      
   
  );
}

export default MCQInput;
