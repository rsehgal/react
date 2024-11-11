// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function PosterReview(props) {
  const { paper, refereeName,triggerReload } = props; 
  //const [selectedValue, setSelectedValue] = useState('');
  const [marks, setMarks] = useState(props.marks);

  // Handler for dropdown change
  const handleDropdownChange = async (event) => {
    const selectedMarks = event.target.value;
    //alert("Dropdown clicked....");
    //alert("Value : "+value);
    //setSelectedValue(value);
    setMarks(selectedMarks);
    //console.log(value);
    //alert("Selected Value : "+selectedValue);

    triggerReload();

    try {
      // Send the selected value to the backend API
      //const response = await axios.get('http://localhost:5000/api/updateMarks', { selectedValue: value });
      //const response = await axios.get(`/api/updateMarks?marks=${selectedMarks}&paper=${paper}&refereeName=${refereeName}`);
      const response = await axios.get(`http://sympnp.org/phpNode/updateData.php?marks=${selectedMarks}&paper=${paper}&refereeName=${refereeName}`);
      console.log('Database update response:', response.data);
    } catch (error) {
      console.error('Error updating the database:', error);
    }
    
  };

  return (
    <div className="App">
      <select value={marks} onChange={handleDropdownChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

export default PosterReview;

