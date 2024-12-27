import React from "react";

export const CartItemTable = ({item, updateQuantity, removeShoppingCart}) => {
    return (
        <tr>
            <td>
                <div className="fw-bold">{item.title}</div>
                {item.author}</td>
            <td>€ {item.price}</td>
            <td>
                <button className="App-border-0" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <i className="bi bi-plus-circle"></i>
                </button>
                <span>  {item.quantity}</span>
                <button className="App-border-0"
                        onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>
                    <i className="bi bi-dash-circle"></i>
                </button>
            </td>
            <td> € {item.quantity * item.price}</td>
            <td>
                <button className="App-border-0" onClick={() => removeShoppingCart(item.id)}>
                    <i className="bi bi-x"></i>
                </button>
            </td>
        </tr>
    );
}