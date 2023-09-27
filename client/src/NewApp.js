// src/App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import GeneralForm from './GeneralForm';
import Table from './Table';
import Committee from './Committee';
import CommitteeOrg from './CommitteeOrg';
import CommitteeAdv from './CommitteeAdv';
import Message from './Message';
import Signup from './Signup';
function NewApp() {
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Signup':
        return <Signup />;
      case 'Login':
        return <Login />;
      case 'Register':
        return <Register />;
      case 'Organizing Committee':
        return <CommitteeOrg url='/api/data/OrgComm'>Organizing Committee</CommitteeOrg>;
      case 'Advisory Committee':
        return <CommitteeAdv url='/api/data/AdvComm'>Advisory Committee</CommitteeAdv>;

      default:
	return <Message className="alert alert-info text-center">Will be available soon </Message>;
        //return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <Footer />
    </div>
  );
}

export default NewApp;

