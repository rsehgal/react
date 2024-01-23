import { StrictMode } from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import NewApp from "./NewApp";
import Form from './Form';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import Committee from './Committee';
import MyQRCode from './QRCode';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NewApp />
    <App />
  </StrictMode>,
  rootElement
);
