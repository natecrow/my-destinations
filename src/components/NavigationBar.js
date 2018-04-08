import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                My Destinations
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1}>
                    <Link to='/destination-list'>View Destinations</Link>
                </NavItem>
                <NavItem eventKey={2}>
                    <Link to='/destination'>Add destination</Link>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavigationBar;
