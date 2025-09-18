// DataTable.js
import React, { useEffect, useState } from 'react';
import PosterReview from './PosterReview';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const DataTablePaperReview = (props) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const maxLength = 500;

  const [reload, setReload] = useState(false); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [marks, setMarks] = useState('');
  const [refereeName,setRefereeName]=useState('');

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  //This will control the number of characters in textarea
  const handleTextChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    } else {
      alert(`Maximum ${maxLength} characters allowed`);
    }
  };

  // Handle number input (limit 0–10)
  const handleNumberChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "" || (Number(newValue) >= 0 && Number(newValue) <= 10)) {
      setNumber(newValue);
    }else{
      alert("Please enter a number between 0 and 10");
      setNumber("");
    }
  };

  // Update button action
  const handleUpdate = () => {
    alert(`Message: ${text}\nNumber: ${number}`);
    // Here you can also send to API / database instead of alert
  };

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
  const queryParams = new URLSearchParams(location.search);
  //const selectedValue = queryParams.get('refereeName');
  //NOW const selectedValue = queryParams.get('hash');
  const selectedValue = queryParams.get('refereeName');
  //alert(selectedValue);
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
      /*
      try {
        //const response = await fetch(`/api/getReviewerName?refereeName=${encodeURIComponent(selectedValue)}`);
        //const response = await fetch(`https://sympnp.org/phpNode/getData.php?refereeName=${encodeURIComponent(selectedValue)}`);
        //NOW const response = await fetch(`https://sympnp.org/phpNode/getDataLocal.php?hash=${encodeURIComponent(selectedValue)}`);
        const response = await fetch(`https://sympnp.org/phpNode/getDataPaperReview.php?refereeName=${encodeURIComponent(selectedValue)}`);
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
        //const response = await fetch(`/api/update?refereeName=${encodeURIComponent(selectedValue)}`);
        //const response = await fetch('https://sympnp.org/phpNode/getData.php?refereeName='+selectedValue);
        //NOW const response = await fetch('https://sympnp.org/phpNode/getDataLocal.php?hash='+selectedValue);
        const response = await fetch('https://sympnp.org/phpNode/getDataPaperReview.php?refereeName='+selectedValue);
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
      
      { !isOnline && (
      <>
        <h3 className='text-danger'> You are offline</h3>
        <hr />
      </>
    )}

      <h2 className='text-center  text-success'>Welcome : {refereeName}</h2>
            <table border="1" className='table table-danger table-hover mb-0'>
        <thead className="thead-dark">
          <tr className='table-warning'>
          
            <th className='text-center'>Username</th>
            <th className='text-center'>Title</th>
            <th className='text-center'>Topic</th>
            <th className='text-center'>Uploaded File</th>
            <th className='text-center'>Referee Remarks</th>
            <th className='text-center'>Merit Points</th>
            <th className='text-center'>Update Status</th>
            
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
           
            <tr key={index} className={getRowColor(item.marks)}>
             
              <td className='text-center'>{item.uname}</td>
              <td className='text-center'>{item.Title}</td>
              <td className='text-center'>{item.Topic}</td>
              <td className='text-center'> {item.Filename}</td>
              
              <td className='col-3 text-center'> 
               <textarea
                onChange={handleTextChange}
                rows="6" cols="50" 
                className="w-full border rounded-lg p-2"
                placeholder={`Type your message... (max ${maxLength} characters)`}
              />
              </td>
              <td className='text-center'> 
                <input
                  type="number"
                  min="0"
                  max="10"
                  onChange={handleNumberChange}
                  onKeyDown={(e) => e.preventDefault()}
                  className="border p-2 rounded w-full"
                  placeholder=""
              />
              </td>

          <td className='text-center'>
          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-dark px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Update
          </button>
          </td>


              {/*<td className='col-4 text-center'><PosterReview paper={item.Filename} refereeName={selectedValue} triggerReload={triggerReload} marks={item.marks} disabled={!isOnline}/></td>*/}
             
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default DataTablePaperReview;

