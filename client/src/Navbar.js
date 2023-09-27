// src/Navbar.js
import React from 'react';

//const Navbar = () => {

const Navbar = ({ setActiveComponent }) => {
  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };
  //The items array may be fetched from the database
  const items=[
		{
		 label:"Home",
		 handler:"Home"
		},
		{
		 label:"About",
		 handler:"About",
		},
		{
		 label:"Contact",
		 handler:"Contact"
		},
		{
		 label:"Login",
		 handler:"Login"
		},
		{
		 label:"Signup",
		 handler:"Signup"
		},
		{
		 label:"Register",
		 handler:"Register",
		},
		{
		 label:"Organizing Committee",
		 handler: "Organizing Committee"
		},
		{
		 label:"Advisory Committee",
		 handler:"Advisory Committee"
		},
	      ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
	  {
		items.map((item)=>(
		<li className="nav-item">
          	    <a className="nav-link" onClick={() => handleNavClick(item.handler)}>{item.label}</a>
            	</li>
		))
	  }
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

