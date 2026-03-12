import './App.css';
import React, { Component } from "react";

const displayProducts = ({ products }) => {
    return (

        <>
            {products.map(p => (
                <div key={p.id} className="product-card">
                    <h5>{p.name}</h5>

                    <div className="product-row">
                        <img src={p.img} alt={p.name} />

                        <div className="quantity-box">
                            <span className="value">{p.value}</span>
                            <span className="label">quantity</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default displayProducts;