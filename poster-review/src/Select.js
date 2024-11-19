// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function Select(props) {
  
 const { options, defaultValue, handleChange, disabled=false ,triggerReload} = props;
 
 const [selectedValue, setSelectedValue] = useState(defaultValue);

 //console.log(options);


  // Handler for dropdown change
  const handleDropdownChange = async (event) => {
    setSelectedValue(event.target.value);
    handleChange(event);
    if(triggerReload)
      triggerReload();

  };

  return (
    <div className="App">
      <select value={defaultValue} onChange={handleDropdownChange} disabled={disabled}>
        {
          options.map((option)=>(
            <option value={option.label}>{option.label}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Select;

