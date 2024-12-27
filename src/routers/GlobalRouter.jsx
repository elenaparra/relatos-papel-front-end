import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {BookSearch} from "../views/BookSearch";
import {BookDetail} from "../views/BookDetail";
import {NotFound} from "../views/NotFoud";
import imagePage from "../img/pagina-no-encontrado.png";
import {ShoppingCart} from "../views/ShoppingCart";
import {Checkout} from "../views/checkout/Checkout";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/bookSearch" element={<Layout><BookSearch /></Layout>} />
                <Route path="/bookDetail/:bookId" element={<Layout><BookDetail /></Layout>} />
                <Route path="/checkout" element={<><Checkout /> <Footer /></>} />
                <Route path="*" element={<Layout><NotFound image={imagePage} /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Menu />
        <ShoppingCart></ShoppingCart>
        {children}
        <Footer />
    </>
);

export default GlobalRouter;