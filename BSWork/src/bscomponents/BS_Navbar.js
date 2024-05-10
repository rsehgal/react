// App.js
import React, { Suspense }  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from '../pages/home';
import Contact from '../pages/contact';
import BS_DropDown from './BS_DropDown';
import JewelleryDesign from '../pages/jewellery';
import WebDesign from '../pages/web';
import InteriorDesign from '../pages/interior';
import BS_NavDropDown from './BS_NavDropDown';
import data from '../data/products.json';
import DynamicComponent from '../components/dynamiccomponent';
import About from '../pages/about';
import Team from '../pages/team';
import VideoEditing from '../pages/videoediting';
import HorizontalDiv from '../components/horizontaldiv';
import TableData from '../components/TableData';
import Login from '../pages/Login';
import ChangePasswd from '../pages/ChangePasswd';
import "../css/gradient.css";

function App() {

    const {routes,dropdown} = data;

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg" className="brown-gradient">
          <Navbar.Brand as={Link} to="/"><h2 className='text-light'>Sehgal Furnishers</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto" variation="pills">
                <Nav.Item>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/changepassword">Change Password</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <BS_NavDropDown title="Our Products"/>
              <Nav.Link as={Link} to="/team">Team</Nav.Link>
              <Nav.Link as={Link} to="/orgComm" >Organizing Committee</Nav.Link>
              <Nav.Link as={Link} to="/advComm" >Advisory Committee</Nav.Link>
              <Nav.Link as={Link} to="/invited" >Invited Speakers</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

{
/*
<HorizontalDiv className="horizontal-div" >
    <h1>HELLO SEHGAL</h1>
    </HorizontalDiv>    
    */
}
        {
          
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/jewdesign" element={<JewelleryDesign />} />
          <Route path="/intdesign" element={<InteriorDesign />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/videoediting" element={<VideoEditing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepassword" element={<ChangePasswd />} />
          <Route path="/orgComm" element={<TableData url='/api/data/OrgComm'/>} />
          <Route path="/advComm" element={<TableData url='/api/data/AdvComm' variant="light"/>} />
          <Route path="/invited" element={<TableData url='/api/data/invited'/>} />
        </Routes>
       
}
       {
  /*      
<Suspense fallback={<div>Loading...</div>}>
        <Routes>
            startTransition(()=> {
            {routes.map(route => (
            <Route key={route.path} path={route.path} element={<DynamicComponent componentName={route.component} />} />
          ))}
});
        </Routes>
        </Suspense>
*/}

        

      </div>
    </Router>
  );
}

export default App;
