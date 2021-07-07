import React from "react";
import { productsNavTypes } from "../../data/data";
import { v4 as uuidv4 } from "uuid";
import "./ProductsNav.css";

const ProductsNav = () => {
  return (
    <nav className="products-nav">
      <ul className="products-nav__list">
        {productsNavTypes.map((type) => {
          return (
            <li className="products-nav__item" key={uuidv4()}>
              <label className="products-nav__radio-label">
                <input
                  type="radio"
                  name="navType"
                  className="products-nav__radio"
                />
                <span className="products-nav__option-btn">{type}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ProductsNav;
