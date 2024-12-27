import React, {useContext, useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import {BookshopContext} from "../context/BookshopContext";

const PaginationCard = ({items, itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const {addShoppingCart} = useContext(BookshopContext);


    // Calcular el número total de páginas
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Obtener los elementos para la página actual
    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Cambiar de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mt-3 text-center">
            <div className="row">
                {currentItems.map((item, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <Card className="card">
                            <Link to={`/bookDetail/${item.id}`}>
                                <Card.Img variant="top" className="pagination-card" src={item.image}/>
                            </Link>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.author}
                                </Card.Text>
                                <Card.Text>
                                    € {item.price}
                                </Card.Text>
                                <Button className="App-btn-primary" onClick={()  => addShoppingCart(item)}>Agregar al carrito</Button>
                                <Link to={`/bookDetail/${item.id}`}>
                                    <Button className="App-btn-secondary">Ver detalle</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Componente de Paginación */}
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link App-btn-primary" onClick={() => handlePageChange(currentPage - 1)}>
                            Anterior
                        </button>
                    </li>
                    {Array.from({length: totalPages}, (_, index) => (
                        <li className={`page-item ${currentPage === index + 1 ? "active" : ""}`} key={index}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link App-btn-primary" onClick={() => handlePageChange(currentPage + 1)}>
                            Siguiente
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PaginationCard;
