import React from 'react';
import Categories from '../Categories/Categories';
import PopularProducts from '../PopularProducts/PopularProducts';
import Promo from '../Promo/Promo';
import SearchBar from '../SearchBar/SearchBar';
import AdBanner from '../AdBanner/AdBanner';
import './Main.css';
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts';

const Main = () => {
    return(
        <main className="main">
            <Promo/>
            <SearchBar/>
            <Categories/>
            <PopularProducts/>
            <AdBanner/>
            <RecommendedProducts/>
        </main>
    );
}

export default Main;