import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
            <nav className="NavBar">
                <Link to="/">
                    Home
                </Link>
                <Link to="/coke">
                    Coke
                </Link>
                <Link to="/kitkat">
                    Kitkat
                </Link>
                <Link to="/mentos">
                    Mentos
                </Link>
                <Link to="/pringles">
                    Pringles
                </Link>
                <Link to="/sprite">
                    Sprite
                </Link>
            </nav>


    );
}

export default NavBar;