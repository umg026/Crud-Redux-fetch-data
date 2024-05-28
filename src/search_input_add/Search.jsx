import React, { useState } from 'react';

const suggestions = ["apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

function Search() {

  const [inputValue, setInputValue] = useState(""); // input for suggestion
  const [selectedValues, setSelectedValues] = useState([]); // suggestion value store in this state 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => { // suggestion value store in array 
    setSelectedValues([...selectedValues, suggestion]);
    setInputValue("");
  };

  const handleRemoveValue = (index) => {
    const newSelectedValues = selectedValues.filter((_, i) => i !== index);
    setSelectedValues(newSelectedValues);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-md">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholder="Start typing..."
        />
        {inputValue && (
          <div className="bg-white border border-gray-300 rounded shadow-md">
            {suggestions
              .filter((suggestion) => // filter for searching functionalities
                suggestion.toLowerCase().includes(inputValue.toLowerCase())
              ) 
              .map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {suggestion}
                </div>
              ))}
          </div>
        )}
      </div>
      
      <div className="w-full max-w-md mt-4">
        {selectedValues.map((value, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-2 border border-gray-300 rounded mb-2"
          >
            <span>{value}</span>
            <button
              onClick={() => handleRemoveValue(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

