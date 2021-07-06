import React from 'react';
import Slider from 'react-slick';
import './Promo.css';
import ad from '../../images/image.jpg';
import SaleItem from '../SaleItem/SaleItem';

const Promo = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="promo">
      <div>
      <Slider className='promo__slider' {...settings}>
        <div className='promo__sliderItem'>
          <img src={ad} />
        </div>
        <div className='promo__sliderItem'>
          <img src={ad} />
        </div> 
        <div className='promo__sliderItem'>
          <img src={ad} />
        </div>
        <div className='promo__sliderItem'>
          <img src={ad} />
        </div>
        <div className='promo__sliderItem'>
          <img src={ad} />
        </div>
        <div className='promo__sliderItem'>
          <img src={ad} />
        </div>
      </Slider>
      </div>
      <div>
      <SaleItem />
      </div>

    </section>
  );
}

export default Promo;