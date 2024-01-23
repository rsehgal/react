// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App(props) {
  const [data, setData] = useState(null);
  //const {urll} = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(props.urll); // Adjust the URL to match your server
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>CORS Request Example</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;

