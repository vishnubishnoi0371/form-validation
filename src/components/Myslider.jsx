import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Myslider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true, // Add centerMode for continuous scrolling effect
    centerPadding: "60px", // Adjust the padding as neede d
    cssEase: "linear", // Use linear easing for smoother continuous scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 0.5,
          autoplay: true,
          autoplaySpeed: 0,
        },
      },
    ],
  };

  return (
    <div className="pt-5">
      <h1 className="text-center">React Slider</h1>
      <Slider {...settings} className="gap-2 p-4 ">
        <div className="p-4 bg-black">
          <p className="text-white fs-6 fw-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
            deserunt quos incidunt libero quae, vel animi hic dolores porro
            accusantium fugiat eos unde optio amet dolor mollitia eaque
            architecto?
          </p>
        </div>
        <div className="p-4 bg-black">
          <p className="text-white fs-6 fw-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
            deserunt quos incidunt libero quae, vel animi hic dolores porro
            accusantium fugiat eos unde optio amet dolor mollitia eaque
            architecto?
          </p>
        </div>
        <div className="p-4 bg-black">
          <p className="text-white fs-6 fw-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
            deserunt quos incidunt libero quae, vel animi hic dolores porro
            accusantium fugiat eos unde optio amet dolor mollitia eaque
            architecto?
          </p>
        </div>
        <div className="p-4 bg-black">
          <p className="text-white fs-6 fw-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
            deserunt quos incidunt libero quae, vel animi hic dolores porro
            accusantium fugiat eos unde optio amet dolor mollitia eaque
            architecto?
          </p>
        </div>
        <div className="p-4 bg-black">
          <p className="text-white fs-6 fw-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
            deserunt quos incidunt libero quae, vel animi hic dolores porro
            accusantium fugiat eos unde optio amet dolor mollitia eaque
            architecto?
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Myslider;
