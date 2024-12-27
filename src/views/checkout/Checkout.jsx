import React, {useContext, useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import {useNavigate} from "react-router-dom";
import {PaymentMethod} from "./PaymentMethod";
import {Order} from "./Order";
import {Delivery} from "./Delivery";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import {BookshopContext} from "../../context/BookshopContext";

export const Checkout = () => {
    const navigate = useNavigate();
    const {clearCart} = useContext(BookshopContext);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        clearCart();
        setShow(false)
        navigate("/bookSearch");
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" className="App-nav" data-bs-theme="dark">
                <Container fluid className="justify-content-center">
                    <Navbar.Brand onClick={() => navigate("/bookSearch")}>Relatos de papel</Navbar.Brand>
                </Container>
            </Navbar>
            <Container fluid className="checkout-content">
                <Row>
                    <Col className="text-center">
                        <h2>Checkout</h2>
                    </Col>
                </Row>
                <Row className="h-100">
                    <Col md={6} className="checkout-content--column-left">
                        <h3 className="mb-4">Pedido</h3>
                        <Order/>
                    </Col>
                    <Col md={6} className="checkout-content--column-right">
                        <Delivery></Delivery>
                        <PaymentMethod></PaymentMethod>
                        <br/>
                        <button className="btn App-btn-secondary text-color" onClick={handleShow}>Pagar Ahora</button>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pago</Modal.Title>
                </Modal.Header>
                <Modal.Body>Pago Exitoso!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>)
}