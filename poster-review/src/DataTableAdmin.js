// DataTable.js
import React, { useEffect, useState } from 'react';
import PosterReview from './PosterReview';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const DataTableAdmin = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refereeName,setRefereeName]=useState('');

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  

  // Get the query parameter from the URL
  const location = useLocation();
//console.log(location);
  const queryParams = new URLSearchParams(location.search);
  //console.log("QUERY PARAMS :"+queryParams);
  const selectedValue = queryParams.get('refereeName');
  
 
  
  const getRowColor = (value) => {
    if (parseFloat(value,0) > 0) return 'table-success'; // Red for low values
    
  };

  useEffect(() => {
    const fetchData = async () => {
      //alert("Hello Raman, I reached upto here....");
      if (!selectedValue) return;

      setLoading(true); // Start loading

      /*
      try {
        //const response = await fetch(`/api/getReviewerName?refereeName=${encodeURIComponent(selectedValue)}`);
        const response = await fetch(`https://sympnp.org/phpNode/getData.php?refereeName=${encodeURIComponent(selectedValue)}`);
        const jsonData = await response.json();
        const refName = jsonData[0].refereeName;
        console.log(refName);
        setRefereeName(refName);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading
      }
*/

      setLoading(true); // Start loading
      try {
        //alert(selectedValue);
        //const response = await fetch(`/api/update?refereeName=${encodeURIComponent(selectedValue)}`);
        const response = await fetch('https://sympnp.org/phpNode/getData.php?refereeName='+selectedValue);
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
  }, [selectedValue]);
  return (
    <div>
      <hr/>
      
      { !isOnline && (
      <>
        <h3 className='text-danger'> You are offline</h3>
        <hr />
      </>
    )}

      <h2 className='text-center  text-success'>Poster Review Summmary</h2>
            <table border="1" className='table table-danger table-hover mb-0'>
        <thead className="thead-dark">
          <tr className='table-warning'>
          
            <th className='col-4 text-center'>Filename</th>
            <th className='col-4 text-center'>Referees</th>
            <th className='col-4 text-center'>AverageMarks</th>
            <th className='col-4 text-center'>ReviewedBy</th>
            
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
           
            <tr key={index} className={getRowColor(item.AverageMarks)}>
             
              <td className='col-4 text-center'>{item.FileName}</td>
              <td className='col-4 text-center'>{item.Referees}</td>
              <td className='col-4 text-center'>{item.AverageMarks}</td>
              <td className='col-4 text-center'>{item.ReviewedBy}</td>
              
             
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default DataTableAdmin;

