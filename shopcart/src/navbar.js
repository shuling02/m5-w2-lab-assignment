import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const navbar = ({ totalItems }) => {

    return (
        <div className="header">

            <Link to="/" className="logo-link">
                <h2>Shop to React</h2>
            </Link>
            
            <Link to="/cart" className="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>{totalItems} items</span>
            </Link>
        </div>
    );
};

export default navbar;