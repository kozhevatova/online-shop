import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    return(
        <section className="products">
            <h3>Products</h3>
            <Product/>
        </section>
    );
}

export default Products;