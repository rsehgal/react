// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import data from './json/data.json';
import Select from './Select';

function PosterReview(props) {
  const { paper, refereeName,triggerReload,disabled } = props; 
  //const [selectedValue, setSelectedValue] = useState('');
  const [marks, setMarks] = useState(props.marks);

  // Handler for dropdown change
  const handleDropdownChange = async (event) => {
    const selectedMarks = event.target.value;
    setMarks(selectedMarks);
    //triggerReload();

    try {
      const response = await axios.get(`https://sympnp.org/phpNode/updateData.php?marks=${selectedMarks}&paper=${paper}&refereeName=${refereeName}`);
      console.log('Database update response:', response.data);
    } catch (error) {
      console.error('Error updating the database:', error);
    }
    
  };

  return (
    <div className="App">
      <Select options={data.posterReviewersMarks} defaultValue={marks} handleChange={handleDropdownChange} triggerReload={triggerReload} disabled={disabled}/>
      
    </div>
  );
}

export default PosterReview;

