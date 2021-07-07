import React from 'react';
import './SaleItem.css';
import sale from '../../images/sale.svg'
import timer from '../../images/timer.svg';
import pulp from '../../images/pulp.jpg';
const SaleItem = () => {

    return(
        <aside className='saleItem'>
            <div className="saleItem__container">
                <div className='saleItem__info'>
                    <img src={pulp} className='saleItem__image'/>
                    <img src={sale} className='saleItem__saleBanner'/>
                    <p className='saleItem__price'>200 &#8381;</p>
                    <p className='saleItme__description'>Лампочка mini...</p>
                </div>
                <div className='saleItem__timerContainer'>
                    <p className='saleItem__timerDescription'>До конца акции осталось:</p>
                    <div className='saleItem__timer'>
                    <img src={timer} className='saleItem__timerImage'/>
                    <p className='saleItem__timerCount'>00  : 00  : 00 </p>
                    <span className='saleItem__timerCount_title'>часов минут секунд</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default SaleItem;