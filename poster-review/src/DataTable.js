// DataTable.js
import React, { useEffect, useState } from 'react';
import PosterReview from './PosterReview';
import { useLocation } from 'react-router-dom';



const DataTable = (props) => {
  const [reload, setReload] = useState(false); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [marks, setMarks] = useState('');

  // Get the query parameter from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedValue = queryParams.get('selectedValue');

  const triggerReload = () => {
    //alert("Trigger Reloadedddd..");
    setReload(!reload);  // Toggle state to trigger re-render
  };

  /*
  const updateMyState = (key, newValue) => {
    setData(prevState => ({
      ...prevState,  // Spread the previous state
      [key]: newValue  // Update the specific key
    }));
  };
  */

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedValue) return;

      setLoading(true); // Start loading
      try {
        const response = await fetch(`/api/update?refereeName=${encodeURIComponent(selectedValue)}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [selectedValue,reload]);
  return (
    <div>
      <h1>Data Table</h1>
            <table border="1">
        <thead>
          <tr>
            <th>Filename</th>
            <td>Marks</td>
            <th>ID</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Filename}</td>
              <td>{item.marks}</td>
		          <td><PosterReview paper={item.Filename} refereeName={selectedValue} triggerReload={triggerReload} marks={item.marks}/></td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

