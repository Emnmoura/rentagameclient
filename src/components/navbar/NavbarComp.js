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
                        <Navbar.Brand >RentAGame</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {this.props.user && (<>
                                <Nav.Link as={Link} to={"/main"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/cliente/all"}>Clientes</Nav.Link>
                                <Nav.Link as={Link} to={"/jogos/all"}>Games</Nav.Link>
                                <Nav.Link as={Link} to={"/locacoes/all"}>Locações</Nav.Link>
                                <Nav.Link as={Link} to={'/logout'} className="text-light" >Logout</Nav.Link>
                                 </>)}
                                
                                
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        )
    }
}

