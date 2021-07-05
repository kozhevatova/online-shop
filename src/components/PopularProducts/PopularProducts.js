import React from 'react';
import Products from '../Products/Products';
import './PopularProducts.css';

const PopularProducts = () => {
    return(
        <section className="popular">
            <h2>PopularProducts</h2>
            <Products/>
        </section>
    );
}

export default PopularProducts;