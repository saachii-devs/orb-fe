import React, { useState } from 'react';

function RatingInput() {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(Number(value));
  };

  return (
    <div className=''>
      <p className="font-semibold mb-2">Rate on a scale of 1-10:</p>
     
      <div className="flex space-x-2 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <label onClick={()=>handleRatingChange(value)} value={value} key={value} className={`flex items-center rounded-md md:rounded-xl w-7 mb-2y text-sm pl-2 md:text-lg md:px-6  py-2 ${rating === value ? 'text-white text-sm  md:text-lg  rounded-md md:rounded-lg bg-blue-700' : 'bg-slate-500 text-black' }`} >
          {value}
          </label>
        ))}
      </div>
      
      
    </div>
  );
}

export default RatingInput;
