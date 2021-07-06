import React from "react";
import Categorie from "../Categorie/Categorie";
import { categories } from "../../data/data";
import { v4 as uuidv4 } from "uuid";
import "./Categories.css";

const Categories = () => {
  return (
    <ul className="categories">
      {categories.map((card) => {
          console.log(card)
        return <Categorie card={card} key={uuidv4()} />;
      })}
    </ul>
  );
};

export default Categories;
