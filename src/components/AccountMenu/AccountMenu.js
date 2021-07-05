import React from "react";
import { NavLink } from "react-router-dom";
import "./AccountMenu.css";
import favourite from "../../images/like.svg";
import account from "../../images/profile.svg";
import cart from "../../images/cart.svg";

const AccountMenu = () => {
  return (
    <nav className="account-menu">
      <ul className="account-menu__list">
        <li className="account-menu__item">
          <NavLink to="#" className="account-menu__link">
            <img className="account-menu__img" src={favourite} />
          </NavLink>
        </li>
        <li className="account-menu__item">
          <NavLink to="#" className="account-menu__link">
            <img className="account-menu__img" src={account} />
          </NavLink>
        </li>
        <li className="account-menu__item">
          <NavLink to="#" className="account-menu__link">
            <img className="account-menu__img" src={cart} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AccountMenu;
