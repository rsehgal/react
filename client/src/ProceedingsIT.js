import TableProc from './TableProc';
import React, { useEffect, useState } from 'react';
function ProceedingsIT(props){
/*const data = [
  { Name: 'John', Age: 30, Email: 'john@example.com' },
  { Name: 'Alice', Age: 25, Email: 'alice@example.com' },
  { Name: 'Bob', Age: 35, Email: 'bob@example.com' },
];*/

const [dataC, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    fetch(props.url,
	 {
	  method:'POST',
	  headers: {
    		'Content-Type': 'application/json',
		    // Other headers as needed
  	},
	  body:JSON.stringify({
		category:props.category
		}),
	 }) // Replace with the correct API endpoint
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
console.log(dataC);
//return ;
return <TableProc data={dataC} id={props.id} type={props.type}>{props.children}</TableProc>;
}

export default ProceedingsIT;
