import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'
import slider_iphones from '../../../images/slider.png'
import slider_iphone12 from '../../../images/iphone-12.png'

const data = [
    {
        title: "Buy & Sell What's Now & Next",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus",
        image: slider_iphones
    },
    {
        title: "Buy Iphone 12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus",
        image: slider_iphone12
    }
]

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <Slider {...settings}>
            {
                data.map(slider => {
                    return (
                        <div key={Date.now()} className="slider-item">
                            <div className="slider-text">
                                <h3>{slider.title}</h3>
                                <p>{slider.description}</p>
                            </div>
                            <div className="slider-img">
                                <img src={slider.image} alt="slider" />
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    );
}