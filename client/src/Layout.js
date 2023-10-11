import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const Layout = ()=>{

return (
	<div className="container">
		<div className="row">
			<div className="col">
			</div>
			<div className="col-11">
				<Navbar />
				<Footer />
			</div>
			<div className="col">
			</div>


		</div>
	</div>
);

}

export default Layout;
