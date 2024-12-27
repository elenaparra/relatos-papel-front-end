import book from "../img/book-store.fw.png";
import {useEffect, useState} from 'react';

const useBook = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks([
            {id: 1,title: "Item 1", author: "Descripción del Item 1", price: 100, image: book},
            {id: 2,title: "Item 2", author: "Descripción del Item 2", price: 100, image: book},
            {id: 3,title: "Item 3", author: "Descripción del Item 3", price: 100, image: book},
            {id: 4,title: "Item 4", author: "Descripción del Item 4", price: 100, image: book},
            {id: 5,title: "Item 5", author: "Descripción del Item 5", price: 100, image: book},
            {id: 6,title: "Item 6", author: "Descripción del Item 6", price: 100, image: book},
            {id: 7,title: "Item 7", author: "Descripción del Item 7", price: 100, image: book},
            {id: 8,title: "Item 8", author: "Descripción del Item 8", price: 100, image: book},
            {id: 9,title: "Item 9", author: "Descripción del Item 9", price: 100, image: book},
            {id: 10,title: "Item 10", author: "Descripción del Item 10", price: 100, image: book},
            {id: 11,title: "Item 11", author: "Descripción del Item 11", price: 100, image: book}
        ]);
    }, []);

    return books;
}


export default useBook;