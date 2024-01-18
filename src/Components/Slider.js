import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../Slider.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto slide every 3000ms (adjust as needed)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider-container">
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {slides.map((slide, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
              <img src={slide.Image} alt={`Slide ${index + 1}`} className="image" />4
                <div className="image-overlay" >
                    <h1 className="heading" >{slide.heading}</h1>
                 </div>
               
              </>
            )}
          </div>
        ))}
      </section>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;





// import React from "react";
// import Slider from "react-slick";

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }

// const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
//   };

//   return (
//     <div className="slider">

//       <Slider {...settings}>
//         <div>
//           <h3>hellooo</h3>
//         </div>
//         <div>
//           <h3>hiiiiiiiii</h3>
//         </div>
//         <div>
//           <h3>hehehehhehhhee</h3>
//         </div>

//       </Slider>
//     </div>
//   );
// };

// export default SimpleSlider;
