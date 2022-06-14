import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'
import sekil from '../../images/slider.png'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 5000
    };
    return (
        <Slider {...settings}>
            <div className="slider-item">
                <div className="slider-text">
                    <h3>Buy & Sell <br /> What's Now & Next</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                </div>
                <div className="slider-img">
                    <img src={sekil} alt="slider" />
                </div>
            </div>
            <div className="slider-item">
                <div className="slider-text">
                    <h3>Buy & Sell What's Now & Next</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                </div>
                <div className="slider-img">
                    <img src={sekil} alt="slider" />
                </div>
            </div>
        </Slider>
    );
}