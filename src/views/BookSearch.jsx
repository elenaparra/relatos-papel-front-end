import React, {useContext, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PaginationCard from "../components/PaginationCard";
import {BookshopContext} from "../context/BookshopContext";
import {ProgressBar} from "react-bootstrap";

export const BookSearch = () => {

    const [booksFiled, setBooksFilter] = useState([]);

    const {books} = useContext(BookshopContext);

    const [search, setSearch] = useState();

    const searchOnChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value === '') {
            setBooksFilter(books);
            return;
        }
        setBooksFilter(books.filter(book => book.title.includes(e.target.value)));
    }

    useEffect(() => {
        setBooksFilter(books);
    }, [books]);

    return (
        <Container fluid="md">
            <br></br>
            <Row>
                <Col className="text-center">
                    <h2>Buscar</h2>
                </Col>
            </Row>
            <Row>
                <Col> <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="titulo"
                        className="me-2"
                        aria-label="Search"
                        onChange={searchOnChange}
                    />
                </Form></Col>
            </Row>
            <Row>
                <Col> {
                    booksFiled.length > 0 ?
                        (<PaginationCard items={booksFiled} itemsPerPage={8}/>) :
                        (<ProgressBar animated now={45}/>)
                } {}
                </Col>
            </Row>
        </Container>
    );
}
