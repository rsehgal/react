import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';

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
/*
export function GetUserData(props,username){
  const [userData, setUserData] = useState(null);
  //const [username] = "rsehgal";
  try{
    const response = await axios.get(props.url, { username });
    setUserData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return userData;
}
*/

export function GetUserData(props,username){
  const [userData, setUserData] = useState(null);
  
  //const [username] = "rsehgal";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(props.url, { params: { username } });
        console.log(response.data)
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        //setError(error);
      } finally {
       // setLoading(false);
      }
    };

    fetchUserData();
  }, [props.url, username]);
  return userData;
}