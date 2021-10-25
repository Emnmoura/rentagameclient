import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="secondary" variant={"dark"} expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">RentAGame</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/cliente/all"}>Clientes</Nav.Link>
                                    <Nav.Link as={Link} to={"/games/all"}>Games</Nav.Link>
                                    <Nav.Link as={Link} to={"/locacoes/all"}>Locações</Nav.Link>                                   
                                    
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-light">Procurar</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>


                </div>


            </Router>

        )
    }
}
