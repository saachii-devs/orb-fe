import React, { useState } from 'react';

function RatingInput() {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  return (
    <div>
      <p className="font-semibold mb-2">Rate on a scale of 1-10:</p>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <label key={value} className="flex items-center bg-slate-400 rounded-xl mb-2">
            <input
              type="radio"
              name="rating"
              value={value}
              checked={rating === value}
              onChange={handleRatingChange}
              className="sr-only "
            />
            <span className={`text-lg px-6  py-2 ${rating === value ? 'text-white rounded-lg bg-blue-700' : 'text-black'}`}>
              {value}
            </span>
          </label>
        ))}
      </div>
      
    </div>
  );
}

export default RatingInput;
