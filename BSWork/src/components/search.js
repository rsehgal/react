import React from "react";
import { useState } from "react";
import Label from "./Label";
import TableData from "./TableData";
import TableData_V2 from "./TableData_V2";

const Search = (props) => {
    const [firstname, setFirstname]=useState('');
    const [lastname, setLastname]=useState('');
    const [startdate, setStartDate]=useState('');
    const [enddate, setEndDate]=useState('');
    
    const handleFirstNameChange = (e) =>{
        setFirstname(e.target.value);
    }
    const handleLastNameChange = (e) =>{
      setLastname(e.target.value);
  }
  const handleStartDateChange = (e) =>{
    //if(e.key ==="Enter")
      setStartDate(e.target.value);
}
const handleEndDateChange = (e) =>{
  //if(e.key ==="Enter")
    setEndDate(e.target.value);
}

    const queryData = {
      firstname: firstname,
      lastname : lastname,
      startdate : startdate,
      enddate:enddate
  };

  return (
    <div>
        <Label>Name</Label>
        <input type="text" id="firstname" name="firstname" onChange={ handleFirstNameChange } />
        <input type="text" id="lastname" name="lastname" onChange={ handleLastNameChange } />
        <input type="date" id="startdate" name="startdate" onChange={ handleStartDateChange } />
        <input type="date" id="enddate" name="enddate" onChange={ handleEndDateChange } />
        {
        (firstname || lastname || startdate || enddate) && <TableData_V2 url='/api/data/Search' queryData={queryData}/>
        }
    </div>
  )
};

export default Search;
