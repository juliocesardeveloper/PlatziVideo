import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='carrusel'>
    <div className='carrusel__container'>
      {children}
    </div>
  </section>
);

export default Carousel;
