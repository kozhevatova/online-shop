import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Categorie.css';

const Categorie = ({ card }) => {
    return(
        <li className="categorie">
            <NavLink to="#" className="categorie__link">
                <p className="categorie__title">{card.name}</p>
                <p className="categorie__text">Перейти &gt;</p>
                <img src={card.image} alt={card.name} className="categorie__image"/>
            </NavLink>
        </li>
    );
}

Categorie.propTypes = {
    card: PropTypes.object.isRequired
}

export default Categorie;