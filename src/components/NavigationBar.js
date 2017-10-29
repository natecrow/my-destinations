import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to='/'>Playlist App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1}>
                    <Link to='#'>View Playlist</Link>
                </NavItem>
                <NavItem eventKey={2}>
                    <Link to='/song'>Add a Song</Link>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavigationBar;
