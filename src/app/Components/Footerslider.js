'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footerslidercard from "./Footerslidercard";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

function Footerslider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay :true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
       

      <div className="w-full bg-yellow-300 py-16">
        <Slider {...settings} className="w-full container mx-auto">
        <div>
        <Footerslidercard/>
        </div>
        <div>
        <Footerslidercard/>
        </div>
        <div>
        <Footerslidercard name={"one"}/>
        </div>
        <div>
        <Footerslidercard name={"one"}/>
        </div>
        <div>
        <Footerslidercard name={"one"}/>
        </div>
        <div>
        <Footerslidercard name={"one"}/>
        </div>
      </Slider>
      </div>
   
  );
}

export default Footerslider;
