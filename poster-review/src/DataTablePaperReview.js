// DataTable.js
import React, { useEffect, useState } from 'react';
import PosterReview from './PosterReview';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import LockButton from './LockButton';


const DataTablePaperReview = (prop) => {

  const [papers, setPapers] = useState([]);
  const maxLength = 500;

  const [reload, setReload] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [marks, setMarks] = useState('');
  const [refereeName, setRefereeName] = useState('');

  const [isOnline, setIsOnline] = useState(navigator.onLine);



  const handleTextChange = (filename, value) => {

    setPapers((prev) =>
      prev.map((p) =>
        p.Filename === filename && value.length <= maxLength
          ? { ...p, remarks: value }
          : p
      )
    );
  };


  const handleNumberChange = (e) => {

  }


  const handleMarksChange = (filename, value) => {
    if (value === "" || (Number(value) >= 0 && Number(value) <= 10)) {
      setPapers((prev) =>
        prev.map((p) =>
          p.Filename === filename ? { ...p, marks: value } : p
        )
      );
    }
  }

  /*
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
*/
  // Update button action
  const handleUpdate = async (paper) => {
    //alert(JSON.stringify(paper));
    //console.log(paper);
    //alert(`Message: ${text}\nNumber: ${number}`);

    // Here you can also send to API / database instead of alert

    if (prop.locked) {
      alert("Your decisions are alreay locked. Please contact admin.");
      return;
    }
    try {

      const urltoFire = 'https://sympnp.org/phpNode/updateDataPaperReview.php?refereeName=' + selectedValue + '&Filename=' + paper.Filename + '&remarks=' + paper.remarks + '&marks=' + paper.marks;
      /*
      alert(urltoFire);
      const response = await fetch(urltoFire);
      const jsonData = await response.json();
      console.log(jsonData);
      */
      const response = await axios.get(urltoFire);
      console.log('Database update response:', response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Stop loading
    }

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
  //NOW const selectedValue = queryParams.get('hash');
  const selectedValue = prop.refereeName; //queryParams.get('refereeName');
  useEffect(() => {
    if (selectedValue) {
      setRefereeName(selectedValue);
    }
  }, [selectedValue]);

  //alert(selectedValue);
  const triggerReload = () => {
    //alert("Trigger Reloadedddd..");
    setReload(!reload);  // Toggle state to trigger re-render
  };

  const getRowColor = (value) => {
    if (parseInt(value, 10) > 0) return 'table-success'; // Red for low values

  };

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedValue) return;

      setLoading(true); // Start loading

      setLoading(true); // Start loading
      try {
        //const response = await fetch(`/api/update?refereeName=${encodeURIComponent(selectedValue)}`);
        //const response = await fetch('https://sympnp.org/phpNode/getData.php?refereeName='+selectedValue);
        //NOW const response = await fetch('https://sympnp.org/phpNode/getDataLocal.php?hash='+selectedValue);
        const response = await fetch('https://sympnp.org/phpNode/getDataPaperReview.php?refereeName=' + selectedValue);
        const jsonData = await response.json();
        //console.log(jsonData);

        /*
        //setting the initial state
        const formatted = jsonData.map((item) => ({
          id: item.Filename,
          text: item.remarks || "",    // fallback to empty string
          number: item.marks || "" // fallback to empty string
        }));
        */
        setPapers(jsonData);
        console.log(papers);

        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [refereeName]);
  //}, [selectedValue,reload]);
  return (
    <div>
      <hr />

      {!isOnline && (
        <>
          <h3 className='text-danger'> You are offline</h3>
          <hr />
        </>
      )}

      <h2 className='text-center  text-success'>Welcome : {prop.fullname}</h2>
      <table border="1" className='table table-danger table-hover mb-0'>
        <thead className="thead-dark">
          <tr className='table-warning'>
            <th className='text-center'>S. No.</th>
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
          {papers.map((item, index) => (


            <tr key={index} className={getRowColor(item.marks)}>
              <td className='text-center'>{index + 1}</td>
              <td className='text-center'>{item.uname}</td>
              <td className='text-center'>{item.Title}</td>
              <td className='text-center'>{item.Topic}</td>
              <td className='text-center'>
                <a
                  href={`${process.env.PUBLIC_URL}/Uploads/${item.Filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.Filename}
                </a>
              </td>

              <td className='col-3 text-center'>
                <textarea
                  value={item.remarks || ""}
                  onChange={(e) => handleTextChange(item.Filename, e.target.value)}
                  rows="6" cols="50"
                  className="w-full border rounded-lg p-2"
                  placeholder={`Type your message... (max ${maxLength} characters)`}
                  readOnly={prop.locked || prop.initiallyLocked}
                />
              </td>
              <td className='text-center'>
                <input
                  type="number"
                  readOnly={prop.locked || prop.initiallyLocked}
                  value={item.marks || ""}
                  min="0"
                  max="10"
                  onChange={(e) => handleMarksChange(item.Filename, e.target.value)}
                  onKeyDown={(e) => e.preventDefault()}
                  className="border p-2 rounded w-full"
                  placeholder=""
                />
              </td>

              <td className='text-center'>
                <button
                  disabled={prop.locked || prop.initiallyLocked || loading}
                  onClick={() => handleUpdate(item)}
                  className="bg-blue-600 text-dark px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                >
                  Save
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

