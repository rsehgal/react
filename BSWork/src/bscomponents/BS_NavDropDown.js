import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import WebDesign from '../pages/web';
import JewelleryDesign from '../pages/jewellery';
import InteriorDesign from '../pages/interior';
import data from "../data/products.json";

export default function BS_NavDropDown(props) {

    const { routes, dropdown } = data;

    return (
        <NavDropdown title={props.title} id="basic-nav-dropdown">

            {
                // Step 1 : Manual way of doing the stuff
                /*
                <NavDropdown.Item as={Link} to="/jewdesign">Jewellery</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/intdesign">Interior</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/webdesign">Web</NavDropdown.Item>
                */
            }

            {
                // Step 2 : Programmatic way of doing it using data from JSON object
                dropdown.items.map(item=>(
                    <NavDropdown.Item as={Link} to={item.path}>{item.label}</NavDropdown.Item>
                ))
            }

        </NavDropdown>
    );
}