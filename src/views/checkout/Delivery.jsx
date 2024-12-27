import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export const Delivery = () => {
    return(
        <>
            <div>
                <h3 className="mb-4">Entrega</h3>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formDireccion2">
                            <Form.Label>Contacto </Form.Label>
                            <Form.Control type="text" placeholder="Correo electrónico"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formNombre">
                            <Form.Control type="text" placeholder="Nombre"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formApellido">
                            <Form.Control type="text" placeholder="Apellido"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formNumDocumento">
                            <Form.Control type="text" placeholder="Numero de documento"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formDireccion">
                            <Form.Control type="text" placeholder="Direccion"/>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        </>

    )
}