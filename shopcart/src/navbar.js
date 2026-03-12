import React, { Component } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const navbar = ({ totalItems }) => {

    return (
        <div className="header">
            <h2>Shop to React</h2>

            <div className="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>{totalItems} items</span>
            </div>
        </div>
    );
};

export default navbar;