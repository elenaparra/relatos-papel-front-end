import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";
import {BookshopContext} from "../context/BookshopContext";

function Menu() {

    const navigate = useNavigate();
    const {shoppingCart, handleCartShow} = useContext(BookshopContext);

    return (
        <Navbar expand="lg" className="App-nav" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand onClick={() => navigate("/")}>Relatos de papel</Navbar.Brand>
                <Nav className="justify-content-center" activeKey="/bookSearch">
                    <Nav.Item>
                        <Nav.Link onClick={() => navigate("/bookSearch")}>Busqueda</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="justify-content-end text-center">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={handleCartShow}><i
                            className="bi bi-cart3"></i> <span
                            className="App-nav-dot">{shoppingCart.length}</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Iniciar Sesión</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;