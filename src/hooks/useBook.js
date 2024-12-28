import book from "../img/book-store.fw.png";
import bookCart from "../img/book-cart.fw.png";
import book1 from "../img/book-store-1.fw.png";
import bookCart1 from "../img/book-cart-1.fw.png";
import book2 from "../img/book-store-2.fw.png";
import bookCart2 from "../img/book-cart-2.fw.png";
import {useEffect, useState} from 'react';

const useBook = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks([
            {id: 1,title: "Democracia", author: "Paul Cartledge", price: 90, imageMax: book1, imageMin: bookCart1},
            {id: 2,title: "Los Vagabundos de Dios", author: "Mario Mendoza", price: 150, imageMax: book, imageMin: bookCart},
            {id: 3,title: "Critica De La Razon Pura", author: "Immanuel Kant", price: 100, imageMax: book2, imageMin: bookCart2},
            {id: 4,title: "Democracia", author: "Paul Cartledge", price: 90, imageMax: book1, imageMin: bookCart1},
            {id: 5,title: "Los Vagabundos de Dios", author: "Mario Mendoza", price: 150,  imageMax: book, imageMin: bookCart},
            {id: 6,title: "Critica De La Razon Pura", author: "Immanuel Kant", price: 100, imageMax: book2, imageMin: bookCart2},
            {id: 7,title: "Democracia", author: "Paul Cartledge", price: 90, imageMax: book1, imageMin: bookCart1},
            {id: 8,title: "Los Vagabundos de Dios", author: "Mario Mendoza", price: 150,  imageMax: book, imageMin: bookCart},
            {id: 9,title: "Critica De La Razon Pura", author: "Immanuel Kant", price: 100, imageMax: book2, imageMin: bookCart2},
            {id: 10,title: "Democracia", author: "Paul Cartledge", price: 90, imageMax: book1, imageMin: bookCart1},
            {id: 11,title: "Los Vagabundos de Dios", author: "Mario Mendoza", price: 150,  imageMax: book, imageMin: bookCart}
        ]);
    }, []);

    return books;
}


export default useBook;