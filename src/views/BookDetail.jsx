import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {BookshopContext} from "../context/BookshopContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imagePage from "../img/libro-no-encontrado.fw.png";
import {NotFound} from "./NotFoud";
import {SubMenu} from "../components/SubMenu";

export const BookDetail = () => {
    const {bookId} = useParams();
    const {books, addShoppingCart} = useContext(BookshopContext);
    const book = books.find(b => b.id == bookId);

    if (!book) {
        return <NotFound image={imagePage}/>
    }

    return (
        <div>
            <SubMenu/>
            <Container className="mt-4">
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                        <img
                            src={book.imageMax}
                            alt="Ejemplo"
                            className="img-fluid rounded"
                        />
                    </Col>

                    <Col md={6} className="bg-light p-4 border rounded">
                        <h3 className="mb-4">{book.title}</h3>
                        <div className="mb-3">
                            <strong>Autor:</strong> {book.author}
                        </div>
                        <div className="mb-3">
                            <strong>Precio:</strong> {book.price}
                        </div>
                        <div className="mb-3">
                            <strong>Descripción:</strong> Este es un producto de ejemplo. Es muy útil y viene con una
                            gran
                            cantidad de características.
                        </div>
                        <div className="mb-3">
                            <strong>Disponibilidad:</strong> En stock
                        </div>
                        <button className="btn btn-primary" onClick={()  => addShoppingCart(book)}>Agregar al carrito</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}