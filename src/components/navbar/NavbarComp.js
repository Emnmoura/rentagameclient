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
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">RentaAGame</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/clientes"}>Clientes</Nav.Link>
                                    <Nav.Link as={Link} to={"/games"}>Games</Nav.Link>
                                    <Nav.Link as={Link} to={"/locações"}>Locações</Nav.Link>
                                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Clientes</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Games</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Locações</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#" disabled>
                                        Uso futuro

                                    </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
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
