import { useState } from 'react';

import data from '../data';
import './index.css';

const App = () => {
  const [curSlide, setCurSlide] = useState(0);

  const nextSlide = () => {
    const newIndex = curSlide === 0 ? data.length - 1 : curSlide - 1;
    console.log('New Index:', newIndex);
    setCurSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = curSlide === 0 ? data.length - 1 : curSlide - 1;
    setCurSlide(newIndex);
  };

  const goToSlide = (slide) => {
    setCurSlide(slide);
  };

  return (
    <div className="container">
      <div className="slider-wrapper">
        <div className="slider">
          <div className="slide">
            <div className="slider-container">
              <div>
                <img src={data[curSlide].image} alt="" className="slider-img" />
              </div>
              <div className="slider-content">
                <h5 className="slider-content-header">{data[curSlide].header}</h5>
                <blockquote className="slider-content-text">{data[curSlide].text}</blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="dots">
          {data.map((_, index) => (
            <button key={index} className={`dot ${index === curSlide ? 'active' : ''}`} onClick={() => goToSlide(index)} />
          ))}
        </div>

        <div>
          <button onClick={() => nextSlide()} className="slider__btn slider__btn--left">
            &larr;
          </button>
          <button onClick={() => prevSlide()} className="slider__btn slider__btn--right">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
