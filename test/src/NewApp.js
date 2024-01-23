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
import Latex from "react-latex-next";
import LatexComp from './Latex';
import PaperTitle from './PaperTitle';
import AuthorName from './AuthorName';
import PaperDetail from './PaperDetail';
import "katex/dist/katex.min.css";
import LatexTest from './LatexTest';
import Proceedings from './Proceedings';
//import LatexComp from './Latex';
import Label from './Label';
import Upload from './Upload';
import ChangePasswd from './ChangePasswd';
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
      case 'Latex Test':
	return <LatexTest>Demonstration of Latex Interpretation</LatexTest>
      case 'Proceedings':
	return <Proceedings/>
      case 'Upload':
	return <Upload/>
  case 'Change Password':
	return <ChangePasswd/>

	
      default:
	return <Message className="alert alert-info text-center">Will be available soon </Message>;
        //return <Home />;
    }
  };

  const VcLatex = "A test equation : $V_c = V_s(1 - 10^{-\\frac{t}{T}})$";
  const enerEq = "Energy equation : $E=mc^2$"
  const title = "TPSM Study of even-even $^{144-148}$Ce Isotopes";
  //const title2="Description of one-neutron pick-up angular distribution for $^{40}$Ca+$^{96}$Zr within coupled reaction channels framework";
  const title2="The investigation of neutrinoless double beta decay of $^{136}$Xe using nuclear shell model";
  const author="Shahariar  Sarkar, Rajdeep Chatterjee";
  return (
    <div className="App">
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <Footer />
    <hr/>
    </div>
  );
}

export default NewApp;

