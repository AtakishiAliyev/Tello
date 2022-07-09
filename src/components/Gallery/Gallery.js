import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider({ assets, image }) {
    console.log(assets);
    const settings = {
        customPaging: function (i) {
            return (
                <div>
                    <img src={assets[i]?.url} alt="screen" />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb slick-thumb-wrapper",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

    };
    return (
        <div>
            <Slider {...settings}>
                {
                    assets?.map(item => {
                        return (
                            <div key={item.id}>
                                <img src={item.url} alt={item.filename} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}