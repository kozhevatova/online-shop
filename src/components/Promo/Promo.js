import React from 'react';
import Slider from 'react-slick';
import './Promo.css';
import ad from '../../images/image.jpg';

const Promo = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <section className="promo">
            <Slider className='promo__slider' {...settings}>
      <div>
        <h3><img src={ad} /></h3>
      </div>
      <div>
        <h3><img src={ad} /></h3>
      </div>
      <div>
        <h3><img src={ad} /></h3>
      </div>
      <div>
        <h3><img src={ad} /></h3>
      </div>
      <div>
        <h3><img src={ad} /></h3>
      </div>
      <div>
        <h3><img src={ad} /></h3>
      </div>
    </Slider>
    
        </section>
    );
}

export default Promo;