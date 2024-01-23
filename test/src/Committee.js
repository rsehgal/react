import Table from './Table';
import React, { useEffect, useState } from 'react';
function Committee(props){
/*const data = [
  { Name: 'John', Age: 30, Email: 'john@example.com' },
  { Name: 'Alice', Age: 25, Email: 'alice@example.com' },
  { Name: 'Bob', Age: 35, Email: 'bob@example.com' },
];*/

const [dataC, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    fetch(props.url) // Replace with the correct API endpoint
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

//console.log(dataC);
//return ;
return <Table data={dataC}>{props.children}</Table>;
}

export default Committee;
