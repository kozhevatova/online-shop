import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <NavLink to="#" className="navbar__link">Каталог Запчастей</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="#" className="navbar__link">Каталог ТО</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="#" className="navbar__link">Шины</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="#" className="navbar__link">Диски</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="#" className="navbar__link">Аккумуляторы</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="#" className="navbar__link">Автомасла</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="#" className="navbar__link">Автолампы</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="#" className="navbar__link">Аксессуары</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;