import React from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Products.css";
import ProductsNav from "../ProductsNav/ProductsNav";

const Products = ({ products, title }) => {
  return (
    <section className="products">
      <h3 className="products__title">{title}</h3>
      <ProductsNav/>
      <ul className="products__list">
        {products.map((product) => {
          return <Product product={product} key={uuidv4()} />;
        })}
      </ul>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Products;
