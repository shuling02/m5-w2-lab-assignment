import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import productsData from "./products";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";
import Home from "./home";
import Cart from "./cart";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: productsData,
      //activeProduct: null
    };
  }

  /*
  openModal = (product) => {
    this.setState({ activeProduct: product });
  };

  closeModal = () => {
    this.setState({ activeProduct: null });
  };
  */

  handleAdd = (id) => {
    const updatedProducts = this.state.images.map(p => {
      if(p.id === id) {
        return { ...p, value: p.value + 1 };
      }
      return p;
    });

    this.setState({ images: updatedProducts });
  };

  handleSubtract = (id) => {
    const updatedProducts = this.state.images.map(p => {
      if(p.id === id && p.value > 0){
        return { ...p, value: p.value - 1};
      }
      return p;
    });

    this.setState({ images: updatedProducts });
  };

  render() {

    const totalItems = this.state.images
      .map(p => Number(p.value))
      .reduce((sum, val) => sum + val, 0);

    return (
      <BrowserRouter>
        <Navbar totalItems={totalItems} />

        <Routes>
          
          <Route
            path="/"
            element={
              <Home 
                products={this.state.images}
                handleAdd={this.handleAdd}
                handleSubtract={this.handleSubtract}
              />
            }
          />
          
          <Route
            path="/cart"
            element={<Cart products={this.state.images} />}
          />  
        
        </Routes>

      </BrowserRouter>


    );
  }
}

export default App;
