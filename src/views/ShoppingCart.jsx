import React, {useContext} from 'react';
import {Offcanvas} from "react-bootstrap";
import {BookshopContext} from "../context/BookshopContext";
import {CartItemCard} from "../components/CartItemCard";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

export const ShoppingCart = () => {
    const navigate = useNavigate();
    const {
        showCart, handleCartClose,
        shoppingCart, removeShoppingCart, updateQuantity, calculateTotal
    } = useContext(BookshopContext);

    return (
        <>
            <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                {
                    shoppingCart.length === 0 ?
                        <Offcanvas.Body>
                            <div>Carrito vacío</div>
                        </Offcanvas.Body>
                        :
                        <Offcanvas.Body>
                            <div>
                                {shoppingCart.map((item, index) => (
                                    <CartItemCard key={index} item={item} updateQuantity={updateQuantity}
                                                  removeShoppingCart={removeShoppingCart}></CartItemCard>
                                ))}

                            </div>
                            <div className="shopping-cart-footer">
                                <div>Total: € {calculateTotal()}</div>
                                <Button variant="secondary" onClick={() => navigate("/checkout")}>
                                    Finalizar Compra
                                </Button>
                            </div>
                        </Offcanvas.Body>
                }
            </Offcanvas>
        </>
    );
}