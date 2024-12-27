import logo from "../img/relatosdepapel.fw.png";
import React from 'react';
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import useRedirection from "../hooks/useRedirection";

function Landing () {

    useRedirection("/bookSearch", 5000);

    return (
        <div className="App">
            <div className="App-header">
                <Link to={"/bookSearch"}> {}
                    <h1>Bienvenidos a Nuestra Libreria</h1>
                </Link>
                <img src={logo} className="App-logo"   alt="logo" />
            </div>
            <Footer />
        </div>
    );

}

export default Landing;