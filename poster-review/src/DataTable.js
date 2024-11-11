// DataTable.js
import React, { useEffect, useState } from 'react';
import PosterReview from './PosterReview';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const DataTable = (props) => {
  const [reload, setReload] = useState(false); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [marks, setMarks] = useState('');
  const [refereeName,setRefereeName]=useState('');
  

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

  const getRowColor = (value) => {
    if (parseInt(value,10) > 0) return 'table-success'; // Red for low values
    
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedValue) return;

      setLoading(true); // Start loading
      try {
        const response = await fetch(`/api/getReviewerName?refereeName=${encodeURIComponent(selectedValue)}`);
        const jsonData = await response.json();
        const refName = jsonData[0].refereeName;
        console.log(refName);
        setRefereeName(refName);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading
      }


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
      <hr/>
      <h2 className='text-center  text-success'>Welcome : {refereeName}</h2>
            <table border="1" className='table table-danger table-hover mb-0'>
        <thead className="thead-dark">
          <tr className='table-warning'>
          
            <th className='col-4 text-center'>Filename</th>
            <th className='col-4 text-center'>Marks</th>
            <th className='col-4 text-center'>Select</th>
            
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
           
            <tr key={index} className={getRowColor(item.marks)}>
             
              <td className='col-4 text-center'>{item.Filename}</td>
              <td className='col-4 text-center'>{item.marks}</td>
              <td className='col-4 text-center'><PosterReview paper={item.Filename} refereeName={selectedValue} triggerReload={triggerReload} marks={item.marks}/></td>
             
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

