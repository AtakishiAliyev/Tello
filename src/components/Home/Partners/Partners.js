import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Partner.scss'
// ! Images
import partners_1 from '../../../images/partners_1.png'
import partners_2 from '../../../images/partners_2.png'
import partners_3 from '../../../images/partners_3.png'
import partners_4 from '../../../images/partners_4.png'
import partners_5 from '../../../images/partners_5.png'
import partners_6 from '../../../images/partners_6.png'

export default function Partners() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
    };
    return (
        <div className="partners-slider-wrapper">
            <div className="container">
                <Slider {...settings}>
                    <div className="item">
                        <img src={partners_1} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_2} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_3} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_4} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_5} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_6} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_1} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_2} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_3} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_4} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_5} alt="item" />
                    </div>
                    <div className="item">
                        <img src={partners_6} alt="item" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}