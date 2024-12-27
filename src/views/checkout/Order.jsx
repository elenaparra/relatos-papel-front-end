import React, {useContext} from 'react';
import {Table} from "react-bootstrap";
import {CartItemTable} from "../../components/CartItemTable";
import {BookshopContext} from "../../context/BookshopContext";

export const Order = () => {

    const {shoppingCart, removeShoppingCart, updateQuantity, calculateTotal} = useContext(BookshopContext);

    return (

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Libro</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {shoppingCart.length === 0 ?
                <tr>
                    <td colSpan={5}>Carrito vacío</td>
                </tr>
                : shoppingCart.map((item, index) => (
                    <CartItemTable key={index} item={item} updateQuantity={updateQuantity}
                                   removeShoppingCart={removeShoppingCart}></CartItemTable>

                ))}
            <tr>
                <td colSpan={3}><h4>Total</h4></td>
                <td colSpan={2}><h4> € {calculateTotal()}</h4></td>
            </tr>
            </tbody>
        </Table>
    )
}