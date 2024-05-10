import { useEffect, useState } from 'react';

export function FetchData(props) {
  // alert(props.url);

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
    }, [props.url]);
  
  //console.log(dataC);
  return dataC;
} 