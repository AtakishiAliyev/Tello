import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsSlider.scss'
import chevron_right from '../../images/chevron-right.png'
import Product from '../Product/Product';

const ProductsSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    return (
        <div className='container products-slider_block'>
            <div className='products-slider_title'>
                <h2> Ən çox satılan məhsullar </h2>
                <a href="/">
                    Hamısına bax
                    <img src={chevron_right} alt="right" />
                </a>
            </div>
            <Slider {...settings}>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
                <div className='products-slider_item'>
                    <Product />
                </div>
            </Slider>
        </div>
    );
}

export default ProductsSlider