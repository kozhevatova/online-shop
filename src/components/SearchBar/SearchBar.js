import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return(
        <section className="search">
            <form className='searchBar__form'>
                <div className='searchBar__radio_container'> 
                <input className='searchBar__radio_button' type='radio' id='searchByVin' name='searchType' value='vin'/>
                <label className='searchBar__label' htmlFor='searchByVin'>Поиск по Vin</label>
                <input className='searchBar__radio_button' type='radio' id='searchByLabel' name='searchType' value='label'/>
                <label className='searchBar__label' htmlFor='searchByLabel'>Поиск по марке</label>
                <input className='searchBar__radio_button' type='radio' id='searchByName' name='searchType' value='name'/>
                <label className='searchBar__label' htmlFor='searchByName'>Поиск по названию товара</label>
                <input className='searchBar__radio_button' type='radio' id='searchByArticle' name='searchType' value='article'/>
                <label className='searchBar__label' htmlFor='searchByArticle'>Поиск по артикулу</label>
                </div>
                <input className='searchBar__searchField' placeholder='Введите данные для поиска' type='search'/>
                <button className='searchBar__button_submit' type='submit'>Искать</button>
            </form>
        </section>
    );
}

export default SearchBar;