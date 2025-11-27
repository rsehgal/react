import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PosterReview from './PosterReview';
import DataTable from './DataTable';
import DataTableAdmin from './DataTableAdmin';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import DataTablePaperReview from './DataTablePaperReview';
import PaperReview from './PaperReview';
import RefereeConfirmation from './RefereeConfirmation';
import DataTableAttendance from './DataTableAttendance';
import DataTableRegSearch from './DataTableRegSearch';
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>  
      <Routes>
        <Route path="/" element={<PaperReview />} />
      </Routes>
    </Router>
    
    
  </React.StrictMode>
);
*/
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <BrowserRouter basename="/adresp/PosterReview">
    <DataTable />
</BrowserRouter>

<BrowserRouter basename="/adresp/AttendanceAdmin">
    <DataTableAttendance />
</BrowserRouter>


<BrowserRouter basename="/adresp/Regsearch">
    <DataTableRegSearch />
</BrowserRouter>

<BrowserRouter basename="/adresp/PosterAdmin">
    <DataTableAdmin />
</BrowserRouter>

</>
);
*/

// Recommended Structure for App.js (or index.js)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/adresp">
      <Routes>
        <Route path="/PosterReview" element={<DataTable />} />
        <Route path="/AttendanceAdmin" element={<DataTableAttendance />} />
        <Route path="/Regsearch" element={<DataTableRegSearch />} />
        <Route path="/PosterAdmin" element={<DataTableAdmin />} />
        {/* Optional: Add a default landing page */}
        <Route path="/" element={<App />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
