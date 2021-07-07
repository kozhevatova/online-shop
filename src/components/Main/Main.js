import React from 'react';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import Promo from '../Promo/Promo';
import SearchBar from '../SearchBar/SearchBar';
import AdBanner from '../AdBanner/AdBanner';
import { recommendedProducts, popularProducts } from "../../data/data";
import './Main.css';

const Main = () => {
    return(
        <main className="main">
            <Promo/>
            <SearchBar/>
            <Categories/>
            <Products products={popularProducts} title="Популярные товары"/>
            <AdBanner/>
            <Products products={recommendedProducts} title="С этим товаром покупают"/>
        </main>
    );
}

export default Main;