import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/search">Recherche</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
