import React from "react";
import DisplayProducts from "./displayProducts";

const Home = ({ products, handleAdd, handleSubtract }) => {
    return (
        <DisplayProducts
            products={products}
            handleAdd={handleAdd}
            handleSubtract={handleSubtract}
        />
    );
};

export default Home;