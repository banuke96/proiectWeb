import React from 'react';

import "./Navbar.css"

import { Navbar, Nav } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={NavLink} exact to="/">Rate My Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                        <NavLink className="nav-link" exact to="/projects">Projects</NavLink>
                        <NavLink className="nav-link" exact to="/about">About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarComponent;
