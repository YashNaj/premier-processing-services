import React, { useRef } from "react";
import useSlider from "../../hooks/useSlider";
import "./slider.css";

const Slider = ({ images }) => {
  const slideImage = useRef(null);
  const slideText = useRef(null);
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  );

  return (
    <div className="slider" ref={slideImage}>

      <div className="slider--content">
        <button
          type="button"
          onClick={goToPreviousSlide}
          className="slider__btn-left"
        >
          <i className="fa-solid fa-angle-left" />
        </button>
        <div className="slider--feature">
          <h1 className="feature--title gradient__text">your business deserves the care of a specialist</h1>
          <p ref={slideText} className="feature--text"></p>
          <button
            type="button"
            className="feature__btn glow-on-hover"
          >
            Learn More
          </button>
        </div>
        <button
          type="button"
          onClick={goToNextSlide}
          className="slider__btn-right"
        >
          <i className="fa fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
