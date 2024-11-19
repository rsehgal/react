import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PosterReview from './PosterReview';
import DataTable from './DataTable';
import DataTableAdmin from './DataTableAdmin';
import DataTableAttendance from './DataTableAttendance';
import DataTableRegSearch from './DataTableRegSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Router>
      <Routes>
        {
        <Route path="/login" element={  <Login />} />
        }
        {
        <Route path="/posterReview" element={<DataTable />} />
        }
        {
        <Route path="/posterAdmin" element={<DataTableAdmin />} />
        }

        {
        <Route path="/attendance" element={<DataTableAttendance />} />
        }

        {
          <Route path="/regSearch" element={<DataTableRegSearch />} />
        }
      </Routes>
    </Router>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
