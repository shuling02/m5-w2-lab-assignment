import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        { id: 1, img: "/products/cologne.jpg", name: "Unisex Cologne", value: 0 },
        { id: 2, img: "/products/iwatch.jpg", name: "Apple iWatch", value: 0 },
        { id: 3, img: "/products/mug.jpg", name: "Unique Mug", value: 0 },
        { id: 4, img: "/products/wallet.jpg", name: "Mens Wallet", value: 0 }
      ]
    };
  }

  render() {

    const totalItems = this.state.images
      .map(p => Number(p.value))
      .reduce((sum, val) => sum + val, 0);

    return (
      <div>

        <div className="header">
          <h2>Shop to React</h2>

          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{totalItems} items</span>
          </div>
        </div>

        {this.state.images.map(p => (
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
      </div>
    );
  }
}

export default App;
