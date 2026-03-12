import React from "react";
import DisplayProducts from "./displayProducts";

const Home = ({ products, openModal, handleAdd, handleSubtract }) => {
    return (
        <DisplayProducts
            products={products}
            openModal={openModal}
            handleAdd={handleAdd}
            handleSubtract={handleSubtract}
        />
    );
};

export default Home;