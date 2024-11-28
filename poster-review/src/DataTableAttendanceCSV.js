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
import { Login } from './Login';
import Logout from './Logout';
import DownloadCSV from './DownloadCSV';

const DataTableAttendanceCSV = (props) => {

  const disabled=false;

  const [reload, setReload] = useState(false); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue]=useState('');
  const [searchUser, setSearchUser]=useState('');

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  const [isAdminUser, SetAdminUser] = useState(false);
const [ isAttendanceLoggedIn, setLoggedIn ] = useState(false);
  const checkLogin = (value,adminUser)=>{
      setLoggedIn(value);
      SetAdminUser(adminUser);
      localStorage.setItem("isAttendanceLoggedIn", value);
      localStorage.setItem("isAdminUser", adminUser);

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
  //const location = useLocation();
  //const queryParams = new URLSearchParams(location.search);
  //const selectedValue = queryParams.get('refereeName');
  //alert(selectedValue);
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
    //alert(event.target.value);
    try {
      //const response = await axios.get(`https://sympnp.org/phpNode/updateAttendance.php?attended=${event.target.value}&uname=${uname}`);
      const response = await fetch(`https://sympnp.org/phpNode/updateAttendance.php?attended=${event.target.value}&uname=${uname}`);
      console.log('Database update response:', response.data);
    } catch (error) {
      console.error('Error updating the database:', error);
    }

  };

  const getRowColor = (attended,paid) => {
    if (attended=="Present" && paid==0) return 'table-success'; // Red for low values
    if (attended=="Present" && paid!=0) return 'table-warning'; // Red for low values
    if (attended=="Absent" && paid!=0) return 'table-danger'; // Red for low values
    //if (attended=="Absent") return 'table-danger'; // Red for low values
    
  };

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

        const storedLoginState = localStorage.getItem("isAttendanceLoggedIn");
        const storedAdminUser = localStorage.getItem("isAdminUser");
        if (storedLoginState==="true") {
          setLoggedIn(true);
        }
        if (storedAdminUser==="true") {
          SetAdminUser(true);
        }
       
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

  const logout=()=>{
    setLoggedIn(false);
    localStorage.setItem("isAttendanceLoggedIn", "false");
    localStorage.setItem("isAdminUser", "false");
  }

  return (
    <div className=''>
      <hr/>
      
      { !isOnline && (
      <>
        <h3 className='text-danger'> You are offline</h3>
        <hr />
      </>
    )}

      <table className='table'>  
      <tr><td><h2 className='text-center  text-success'>DAE-Nuclear Physics symposium registration portal</h2></td>  <td>{isAttendanceLoggedIn && <Logout logout={logout} />} </td>  <td>{isAttendanceLoggedIn && isAdminUser && <DownloadCSV jsonData={data} />} </td> </tr>
      </table>
      <hr/>
      {
      isAttendanceLoggedIn ? 
      <div >
      <table className="table table-secondary">
        <tr className='red-border-box bg-secondary'>
          <td className="col-8"> <Label> Search (uname / reg. no / FirstName / LastName) </Label></td>
          <td className="col-4"><Input handleChange={handleSearchUser}/></td>
        </tr>
      </table>
      <hr/>
            <table border="1" className='table table-hover mb-0'>
        <thead className="thead-dark">
          <tr className='table-warning'>
          <th className='col-4 text-center'>S. No.</th>
          <th className='col-4 text-center'>Reg. No.</th>
            <th className='col-4 text-center'>Name</th>
            <th className='col-4 text-center'>Affiliation</th>
            <th className='col-4 text-center'>To Collect</th>
            <th className='col-4 text-center'>Select</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={getRowColor(item.attended,item.fees)}>
               <td className='col-4 text-center'>{index}</td>
             <td className='col-4 text-center'>{item.regno}</td>
              <td className='col-4 text-center'>{item.Initials+" "+item.FirstName+" "+item.LastName}</td>
              <td className='col-4 text-center'>{item.Affiliation}</td>
              <td className='col-4 text-center'>{item.fees}</td>
             <td><Select options={dropdownData.attendance} defaultValue={item.attended} handleChange={(event)=>handleDropdownChange(event,item.uname)} disabled={disabled} triggerReload={triggerReload}/></td>
                           
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      : <Login checkLogin={checkLogin} />
        }
    </div>
    );
};

export default DataTableAttendanceCSV;

