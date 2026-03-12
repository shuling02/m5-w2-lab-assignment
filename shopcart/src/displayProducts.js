import './App.css';
import React, { Component } from "react";

const displayProducts = ({ products, openModal, handleAdd, handleSubtract }) => {
    return (

        <>
            {products.map(p => (
                <div key={p.id} className="product-card">
                    <h5>{p.name}</h5>

                    <div className="product-row">
                        <img 
                            src={p.img} 
                            alt={p.name} 
                            onClick={() => openModal(p)}
                            style={{ cursor: "pointer" }}
                        />

                        <div className="quantity-controls">

                            <div className = "btn-group">

                                <button className="qty-btn" onClick={() => handleAdd(p.id)}>
                                    <span className="inner-circle">
                                        <span>+</span>
                                    </span>
                                </button>
                                
                                <button className="qty-btn" onClick={() => handleSubtract(p.id)}>
                                    <span className="inner-circle">
                                        <span>-</span>
                                    </span>
                                </button>
                            
                            </div>

                            <div className="qty-box">
                                <span className="qty-label">Quantity</span>
                                <span className="quantity">{p.value}</span>
                            </div>
                            
                        </div>

                    </div>
                </div>
            ))}
        </>
    );
};

export default displayProducts;