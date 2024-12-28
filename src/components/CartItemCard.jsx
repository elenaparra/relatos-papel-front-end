import React from "react";
import Card from "react-bootstrap/Card";
import {CardBody} from "react-bootstrap";

export const CartItemCard = ({item, updateQuantity, removeShoppingCart}) => {

    return (

        <Card className="cart-item-card">
            {/* Imagen a la izquierda */}
            <Card.Img
                src={item.imageMin}
                className="cart-item-card--image"
                alt="Producto"
            />
            {/* Contenido a la derecha */}
            <Card.Body className="cart-item-card--body">
                <Card.Title className="cart-item-card-body--title">{item.title}</Card.Title>
                <Card.Text className="cart-item-card-body--text">
                    <button className="App-border-0" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <i className="bi bi-plus-circle"></i>
                    </button>
                    <span>  {item.quantity}</span>
                    <button className="App-border-0"
                            onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>
                        <i className="bi bi-dash-circle"></i>
                    </button>
                </Card.Text>
                <Card.Text className="cart-item-card-body--text"> {item.quantity > 1 ? <span className="body-text--span small">€ {item.price} por unidad</span> : null }</Card.Text>
                <Card.Text className="cart-item-card-body--text fw-bold"> €  {item.quantity * item.price}</Card.Text>
            </Card.Body>
            <CardBody>
                <button className="App-border-0" onClick={() => removeShoppingCart(item.id)}>
                    <i className="bi bi-trash"></i></button>
            </CardBody>
        </Card>
    )

}