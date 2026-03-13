import './App.css';
import React from "react";
import { useState } from "react";
import { Modal } from 'react-bootstrap'

const DisplayProducts = ({ products, handleAdd, handleSubtract }) => {
    
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setShowImge(product);
    }

    return (

        <>
            {products.map(p => (
                <div key={p.id} className="product-card">
                    <h5>{p.name}</h5>

                    <div className="product-row">
                        <img 
                            src={p.img} 
                            alt={p.name} 
                            onClick={() => handleShow(p)}
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{showImge.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <img
                        src={showImge.img}
                        width="350"
                        alt={showImge.name}
                        className="mx-5"
                    />
                    <p><span className="text-dark">Ratings:</span> {showImge.rating}/5</p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DisplayProducts;