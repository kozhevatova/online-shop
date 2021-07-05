import React from 'react';
import Categorie from '../Categorie/Categorie';
import './Categories.css';

const Categories = () => {
    return(
        <section className="categories">
            <h2>Categories</h2>
            <Categorie/>
        </section>
    );
}

export default Categories;