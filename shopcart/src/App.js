import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import productsData from "./products";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: productsData
    };
  }

  render() {

    const totalItems = this.state.images
      .map(p => Number(p.value))
      .reduce((sum, val) => sum + val, 0);

    return (
      <div>
        <Navbar totalItems={totalItems} />
        <DisplayProducts products={this.state.images} />
      </div>
    );
  }
}

export default App;
