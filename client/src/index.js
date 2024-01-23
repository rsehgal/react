import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewApp from './NewApp';
import Form from './Form';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import Committee from './Committee';
import MyQRCode from './QRCode';
//import MyQRReader from './MyQRReader';
//import QRR from "./QRReader";
//import MyQRReader from './QRReader';
//import Latex from './Latex';
const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [
  { Name: 'John', Age: 30, Email: 'john@example.com' },
  { Name: 'Alice', Age: 25, Email: 'alice@example.com' },
  { Name: 'Bob', Age: 35, Email: 'bob@example.com' },
];

    //<App urll='/api/data/OrgComm'/>
root.render(
  <React.StrictMode>
  <NewApp />   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
