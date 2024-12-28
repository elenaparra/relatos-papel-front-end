import {useState} from 'react';


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState([]);

    const [showCart, setShowCart] = useState(false);

    const handleCartClose = () => setShowCart(false);
    const handleCartShow = () => setShowCart(true);

    const addShoppingCart = (book) => {
        setShoppingCart((prevCart) => {

            const bookExist = shoppingCart.find((item) => item.id === book.id);

            if (bookExist) {
                // Incrementa la cantidad del producto existente
                return prevCart.map((item) =>
                    item.id === book.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                );
            } else {
                // Agrega el nuevo producto al carrito
                return [...prevCart, {...book, quantity: 1}];
            }
        });
    };


    const removeShoppingCart = (idBook) => {
        setShoppingCart((prevCart) => prevCart.filter((item) => item.id !== idBook));
    };

    const updateQuantity = (idBook, newQuantity) => {
        setShoppingCart((prevCart) =>
            prevCart.map((item) =>
                item.id === idBook ? {...item, quantity: newQuantity} : item
            )
        );
    };

    const calculateTotal = () => {
        return shoppingCart.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    const clearCart = () => {
        setShoppingCart([]);
    };


    return {
        shoppingCart, addShoppingCart, removeShoppingCart, updateQuantity, calculateTotal, clearCart,
        showCart, handleCartShow, handleCartClose
    };
}