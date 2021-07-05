import React from 'react';
import ad from '../../images/tire.jpg'

const SaleItem = () => {

    return(
        <aside className='saleItem'>
            <div className="saleItem__container">
                <div className='saleItem__info'>
                    <img src={ad} className='saleItem__image'/>
                    <img className='saleItem__saleBanner'/>
                    <p className='saleItem__price'></p>
                    <p className='saleItme__description'></p>
                </div>
            </div>
        </aside>
    )
}
export default SaleItem;