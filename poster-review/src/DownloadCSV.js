import React from 'react';

function DownloadCSV(props) {

    const { jsonData } = props;

  const fetchAndDownloadCSV = async () => {
    try {
      
      // Convert JSON to CSV
      //const csvData = convertToCSV(jsonData);
      const csvString = jsonToCsv(jsonData);
      console.log(csvString);

      // Trigger CSV download
      downloadCSV(csvString, 'attendance_data.csv');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const convertToCSV = (data) => {
    if (!data || !data.length) return '';
    for (let i = 0; i < data.length; i++) {
      //console.log(`ID: ${jsonArray[i].id}, Name: ${jsonArray[i].name}`);
      console.log(data[i].uname);
      
    }
    
    /*
    const headers = Object.keys(data[0]).join(',') + '\n'; // Extract headers
    const rows = data.map(row => Object.values(row).join(',')).join('\n'); // Map rows

    return headers + rows;
    */
  };

  function jsonToCsv(jsonArray) {
    if (jsonArray.length === 0) {
      return "";
    }
  
    // Extract keys (headers)
    const headers = Object.keys(jsonArray[0]);
  
    // Create CSV rows
    const csvRows = jsonArray.map(obj =>
      headers
        .map(header => {
          // Clean up the value (remove \n, \t, etc.)
          const value = obj[header] !== null && obj[header] !== undefined ? obj[header].toString() : "";
          return `"${value.replace(/[\n\t]/g, " ")}"`; // Wrap value in quotes and clean
        })
        .join(",")
    );
  
    // Combine headers and rows
    return [headers.join(","), ...csvRows].join("\n");
  }
  

  /*
  function jsonToCsv(jsonArray) {
    if (jsonArray.length === 0) {
      return "";
    }
  
    // Extract keys (headers)
    const headers = Object.keys(jsonArray[0]);
  
    // Create CSV rows
    const csvRows = jsonArray.map(obj =>
      headers.map(header => JSON.stringify(obj[header], null, "").trimEnd()).join(",")
    );
  
    // Combine headers and rows
    return [headers.join(","), ...csvRows].join("\n");
  }
  */
  // Convert JSON to CSV string
  //const csvString = jsonToCsv(data);
  
  //console.log(csvString);

  const downloadCSV = (csv, filename) => {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button type="" className='btn btn-primary' onClick={fetchAndDownloadCSV}>Download CSV</button>
      {
        //<button type="" className="btn btn-primary btn-danger" onClick={handleSubmit} value={logoutButtonName}> {logoutButtonName} </button>
      }
    </div>
  );
}

export default DownloadCSV;
