import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';



export function GetConfigParamters(props) {
  let fetcherConfigParameter = {
    method: 'post',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
    url: props.url
  }
  return fetcherConfigParameter;
}


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

export function FetchAxiosData(props) {
  
  const {isAuthenticated,login,logout,username,SetUName,initialState} = useAuth();

  const [data, setData] = useState([]);

  

  useEffect(() => {
    console.log("URL : ",props.url);
    async function fetchMyAPI() {
      axios.post(props.url,{
        username: username
      })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        });
     
    }

    fetchMyAPI()
  }, props.url)

  return data;
}


export function useFetchAxiosData(props) {
  const { username } = useAuth(); // Destructure only what's necessary from useAuth
  console.log("username from UseFetchAxiosData : ",username);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    async function fetchMyAPI() {
      console.log("From inside of UseEffect In UseFetchAxiosData");
      try {
        const response = await axios.post(props.url, {
          username: username
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    if (props.url) {
      fetchMyAPI();
    }
  }, [props.url]); // Add username as a dependency

  return { data, loading, error };
}


export function useFetchAxiosData_V2(props,queryData) {
  //const { username } = useAuth(); // Destructure only what's necessary from useAuth
  
 // console.log("username from UseFetchAxiosData : ",username);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    async function fetchMyAPI() {
      console.log("From inside of UseEffect In UseFetchAxiosData");
      try {
        const response = await axios.post(props.url, queryData);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    if (props.url) {
      fetchMyAPI();
    }
  }, [props.url,queryData]); // Add username as a dependency

  return { data, loading, error };
}
