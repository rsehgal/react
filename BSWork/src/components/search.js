import React from "react";
import { useState } from "react";
import Label from "./Label";
import TableData from "./TableData";
import TableData_V2 from "./TableData_V2";

const Search = (props) => {
    const [inputValue, setValue]=useState('');
    
    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    const queryData = {
      firstname: inputValue
  };

  return (
    <div>
        <Label>Name</Label>
        <input type="text" id="search" name="search" onChange={ handleChange } />
        {
        inputValue && <TableData_V2 url='/api/data/Search' queryData={queryData}/>
        }
    </div>
  )
};

export default Search;
