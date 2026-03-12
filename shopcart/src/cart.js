import React from "react";

const Cart = ({ products }) => {

    const items = products.filter(p => p.value > 0);

    return (
        <div className="cart-page">
            
            <h2>Shopping Cart</h2>

            {items.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                items.map(p => (
                    <div key={p.id} className="cart-item">

                        <img src = {p.img} alt={p.name} className="cart-img" />

                        <div className="cart-info">
                            <h5>{p.name}</h5>
                            <p>{p.desc}</p>
                            <p>Quantity: {p.value}</p>
                        </div>
                        
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;