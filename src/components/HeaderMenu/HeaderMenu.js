import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__item">
          <NavLink to="#" className="header-menu__link">Магазины</NavLink>
        </li>
        <li className="header-menu__item">
          <NavLink to="#" className="header-menu__link">Акции</NavLink>
        </li>
        <li className="header-menu__item">
          <NavLink to="#" className="header-menu__link">Доставка и оплата</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
