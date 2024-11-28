import React from 'react';

function DownloadCSV(props) {

    const { jsonData } = props;

  const fetchAndDownloadCSV = async () => {
    try {
      
      // Convert JSON to CSV
      const csvData = convertToCSV(jsonData);

      // Trigger CSV download
      downloadCSV(csvData, 'attendance_data.csv');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const convertToCSV = (data) => {
    if (!data || !data.length) return '';

    const headers = Object.keys(data[0]).join(',') + '\n'; // Extract headers
    const rows = data.map(row => Object.values(row).join(',')).join('\n'); // Map rows

    return headers + rows;
  };

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
      <button onClick={fetchAndDownloadCSV}>Download CSV</button>
    </div>
  );
}

export default DownloadCSV;
