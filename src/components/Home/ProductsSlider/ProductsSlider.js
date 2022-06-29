import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsSlider.scss'
import chevron_right from '../../../images/chevron-right.png'
import Product from '../../Product/Product';
import ProductSkeleton from '../../Skeleton/ProductSkeleton';

const ProductsSlider = ({ categoryName, data, loading }) => {
    const settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    className: 'mobile_slick-slider'
                }
            },
        ]
    };

    return (
        <div className='products-slider_block'>
            <div className='products-slider_title'>
                <h2> {categoryName} </h2>
                <a href="/">
                    Hamısına bax
                    <img src={chevron_right} alt="right" />
                </a>
            </div>
            {
                !loading
                    ? <Slider {...settings}>
                        {
                            data?.map(item => {
                                return (
                                    <div key={item.id} className='products-slider_item'>
                                        <Product product={item} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    : <div className='skeleton-wrapper'>
                        {[1, 2, 3, 4, 5].map((item, index) => <ProductSkeleton key={index} />)}
                    </div>

            }
        </div>
    );
}

export default ProductsSlider