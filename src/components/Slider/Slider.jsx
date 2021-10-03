/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';
import image1 from './slider-1.png';
import image2 from './slider-2.png';
import nextArrow from './nextArrow.svg';
import prevArrow from './prevArrow.svg';

const images = [image1, image2, image1, image2];

const Slider = ({ autoplayTime }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const nextSlideIndex = (currentSlide >= images.length - 1) ? 0 : currentSlide + 1;

    setCurrentSlide(nextSlideIndex);
  };

  const prevSlide = () => {
    const prevSlideIndex = (currentSlide === 0) ? images.length - 1 : currentSlide - 1;

    setCurrentSlide(prevSlideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), autoplayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className='slider'>
      {images.map((imageUrl, index) => (
        <div
          className='slider-item'
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 1080}px` : 0,
          }}
          key={index}
        />
      ))}
      <div className='slider__button  slider__prev' onClick={prevSlide} onKeyDown={prevSlide} role='button' tabIndex={0}>
        <img src={prevArrow} alt='' className='slider__button-item' />
      </div>
      <div className='slider__button  slider__next' onClick={nextSlide} onKeyDown={nextSlide} role='button' tabIndex={0}>
        <img src={nextArrow} alt='' className='slider__button-item' />
      </div>
    </div>
  );
};

Slider.propTypes = { autoplayTime: PropTypes.number };

Slider.defaultProps = { autoplayTime: 4000 };

export default Slider;
