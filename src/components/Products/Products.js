import React from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Products.css";
import ProductsNav from "../ProductsNav/ProductsNav";
import Slider from "react-slick";

const Products = ({ products, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <section className="products">
      <h3 className="products__title">{title}</h3>
      <ProductsNav />
      <Slider {...settings} className="products__list">
        {/* <ul className="products__list"> */}
          {products.map((product) => {
            return <Product product={product} key={uuidv4()} />;
          })}
        {/* </ul> */}
      </Slider>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Products;
