import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default class NavbarComp extends Component {
    render() {
        return (
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
                                <Nav.Link as={Link} to={"/main"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/clientes"}>Clientes</Nav.Link>
                                <Nav.Link as={Link} to={"/games"}>Games</Nav.Link>
                                <Nav.Link as={Link} to={"/locações"}>Locações</Nav.Link>
                                <Nav.Link as={Link} to={'/logout'} className="text-light" >Login</Nav.Link>
                                
                                
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Pesquisar</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        )
    }
}

