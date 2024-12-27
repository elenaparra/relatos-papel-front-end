import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import {Link, useNavigate} from "react-router-dom";

export const SubMenu = () => {
    const navigate = useNavigate();
    return (
        <Container className="mt-4">
            <Row className="align-items-center">
                <Navbar>
                    <Container>
                            <Navbar.Brand onClick={() => navigate("/bookSearch")}><i className="bi bi-arrow-left-circle App-icon-sizes"></i></Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
}