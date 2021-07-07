import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import snow from "../../images/snow.svg";
import sun from "../../images/sun.svg";
import sale from "../../images/sale.svg";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <li className="product">
      <NavLink to="#" className="product__link">
        {product.isOnSale && (
          <img src={sale} alt="Распродажа." className="product__sale" />
        )}
        <p className="product__details">Быстрый просмотр</p>
        <div className="product__pics">
          <button
            className={`product__like ${
              product.isLiked && "product__like_active"
            }`}
            type="button"
          ></button>
          <img
            className={`product__tire-type ${
              !(product.isSummer || product.isWinter) &&
              "product__tire-type_none"
            }`}
            src={(product.isSummer && sun) || (product.isWinter && snow)}
            alt={
              (product.isSummer && "Летняя.") || (product.isWinter && "Зимняя.")
            }
          />
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="product__image"
        />
        <p className="product__title">{product.title}</p>
        {product.isInStock ? (
          <p className="product__price">{product.price} &#8381;</p>
        ) : (
          <div className="product__not-in-stock">
            <p className="product__text">нет в наличии</p>
            <button className="product__button" type="button">
              Сообщить о поступлении
            </button>
          </div>
        )}
        {product.isInStock && (
          <button className="product__cart" type="button"></button>
        )}
      </NavLink>
    </li>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
