import React from 'react';
import Products from '../Products/Products';
import './RecommendedProducts.css';

const RecommendedProducts = () => {
    return(
        <section className="recommended">
            <h2>RecommendedProducts</h2>
            <Products/>
        </section>
    );
}

export default RecommendedProducts;