import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../CSSFiles/Navigation.css';
import { Link, withRouter } from "react-router-dom";
import cakeLogo from '../Images/logo3small.png';

function Navigation(props) 
{
    return (
        <Navbar variant="dark" expand="lg" className="navbar-custom">
         <Navbar.Brand href="/Home"><img src={cakeLogo} width="100" height="100" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto links-costume">
                <Nav.Link href="/signin">התחבר</Nav.Link>
                <Nav.Link href="/register">הרשמה</Nav.Link>
                <Nav.Link href="/VolunteerMatch">למי אאפה הסופש</Nav.Link>
                <Nav.Link href="/gallery">גלריה</Nav.Link>
                <NavDropdown title="עוד" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">עלינו</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">שאלות נפוצות</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">צור קשר</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Admin">אדמין</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>  
  );
}

export default withRouter(Navigation);