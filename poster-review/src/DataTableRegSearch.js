// DataTable.js
import React, { useEffect, useState } from 'react';
import PosterReview from './PosterReview';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import dropdownData from './json/data.json';
import Select from './Select';
import Input from './Input';
import Label from './Label';
import helpers from './css/helpers.css';

const DataTableRegSearch = (props) => {

  const disabled=false;

  const [reload, setReload] = useState(false); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue]=useState('');
  const [searchUser, setSearchUser]=useState('');

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [login, setLogin]=useState(false);


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
  //const location = useLocation();
  //const queryParams = new URLSearchParams(location.search);
  //const selectedValue = queryParams.get('refereeName');
  //alert(selectedValue);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hashValue = queryParams.get('hash');

  const triggerReload = () => {
    //alert("Trigger Reloadedddd..");
    setReload(!reload);  // Toggle state to trigger re-render
  };

  const handleSearchUser = async (event)=>{
    //alert("HandleSearchUser called....");
    setSearchUser(event.target.value);
  };
  
  const handleDropdownChange = async (event,uname) => {
    setSelectedValue(event.target.value);


  };

  const getRowColor = (attended) => {
    if (attended=="Present") return 'table-success'; // Red for low values
    
  };

//For login check using hash
useEffect(() => {
  const fetchLoginData = async () => {
    setLoading(true); // Start loading

    try {
      const response = await fetch('https://sympnp.org/phpNode/getData.php?hash='+hashValue);
      const jsonData = await response.json();
      setLogin(true);
     
      console.log(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLogin(false);
    } finally {
      setLoading(false); // Stop loading
      
    }

    setLoading(true); // Start loading
    
  };
  fetchLoginData();
}, []);

  useEffect(() => {
    const fetchData = async () => {
     // if (!selectedValue) return;

      setLoading(true); // Start loading

      try {
        //const response = await fetch(`/api/getReviewerName?refereeName=${encodeURIComponent(selectedValue)}`);
        //const response = await fetch(`https://sympnp.org/phpNode/getAttendanceData.php?refereeName=${encodeURIComponent(selectedValue)}`);
        const response = await fetch('https://sympnp.org/phpNode/getAttendanceData.php?uname='+searchUser);
        const jsonData = await response.json();
        setData(jsonData);
       
        //console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading
      }

      setLoading(true); // Start loading
      
    };

    fetchData();
  }, [selectedValue,reload,searchUser]);
  return (
    <div className=''>
      <hr/>
      
      { !isOnline && (
      <>
        <h3 className='text-danger'> You are offline</h3>
        <hr />
      </>
    )}

{login && (
  <>
      <h1 className='text-center  text-success'>DAE-Nuclear Physics symposium</h1>
      <h2 className='text-center  text-success'>Search your registration number</h2>

      <hr/>
      <table className="table table-secondary">
        <tr className='red-border-box bg-secondary'>
          <td className="col-8"> <Label> Search (uname / reg. no / FirstName / LastName) </Label></td>
          <td className="col-4"><Input handleChange={handleSearchUser}/></td>
        </tr>
      </table>

      <hr/>
            <table border="1" className='table table-danger table-hover mb-0'>
        <thead className="thead-dark">
          <tr className='table-warning'>
          <th className='col-4 text-center'>S. No.</th>
          <th className='col-4 text-center'>Reg. No.</th>
            
            <th className='col-4 text-center'>Name</th>
            
            
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
           
            <tr key={index} >
               <td className='col-4 text-center'>{index}</td>
             <td className='col-4 text-center'>{item.Reg_No}</td>
              
              <td className='col-4 text-center'>{item.FullName}</td>
                           
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      </>
      )}
    </div>
    );
};

export default DataTableRegSearch;

