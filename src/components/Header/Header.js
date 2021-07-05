import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./Header.css";
import { address } from "../../utils/constants";
import logo from "../../images/logo.svg";
import geo from "../../images/geo.svg";
import AccountMenu from "../AccountMenu/AccountMenu";
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header className="header">
      <HeaderMenu />
      <img className="header__logo" src={logo} alt="Логотип запчастей." />
      <p className="header__text">
        <img className="header__geo-pic" src={geo} />
        {address}
      </p>
      <AccountMenu/>
      <NavBar/>
    </header>
  );
};

export default Header;
