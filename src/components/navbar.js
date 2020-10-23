import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../stylesheets/navbar.scss';

export default class Navigation extends Component {

    render() {
        return(
            <Navbar expand="lg" className='navbar' sticky='top'>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Leagues</Nav.Link>
                    <Nav.Link href="#link">Events</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }        
}
