import './App.css';
import './style/CartItemCard.css';
import {BookshopContext} from "./context/BookshopContext";
import GlobalRouter from "./routers/GlobalRouter";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useBook from "./hooks/useBook";
import {useShoppingCart} from "./hooks/useShoppingCart";


function App() {

    const books = useBook();

    const {
        shoppingCart, addShoppingCart, removeShoppingCart, updateQuantity, calculateTotal, clearCart,
        showCart, handleCartShow, handleCartClose} = useShoppingCart();

    const contextGlobal = {
        books,
        shoppingCart,
        addShoppingCart,
        removeShoppingCart,
        updateQuantity,
        calculateTotal,
        showCart,
        handleCartShow,
        handleCartClose,
        clearCart
    };

    return (
        <BookshopContext.Provider value={contextGlobal}>
            <GlobalRouter></GlobalRouter>
        </BookshopContext.Provider>
    );
}

export default App;
