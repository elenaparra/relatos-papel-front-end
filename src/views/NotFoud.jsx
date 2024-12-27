import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NotFound = ({image}) => {
  return (
      <Container className="mt-4">
        <Row className="d-flex justify-content-center align-items-center">
          <Col
              md={6}
              className="d-flex flex-column align-items-center justify-content-around p-4">
            <img
                src={image}
                alt="Not Found"
                className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
  )
}