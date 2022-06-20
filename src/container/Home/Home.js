import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Slider from '../../components/Home/Slider/Slider'
import ProductsSlider from '../../components/Home/ProductsSlider/ProductsSlider'
import Banner from '../../components/Home/Banner/Banner'
import CategoryCard from '../../components/Home/CategoryCard/CategoryCard'
import Advantage from '../../components/Home/Advantage/Advantage'
import Partners from '../../components/Home/Partners/Partners'
import Footer from '../../components/Footer/Footer'
// !Images
import iphone_1 from '../../images/iphon_1.png'
import iphone_11 from '../../images/iphone_11.png'
import watch from '../../images/watch.png'
import image6xiaomi from '../../images/image6xiaomi.png'
import image6 from '../../images/image6.png'

const Home = ({ categories }) => {

    return (
        <>
            <Header categories={categories} />
            <Slider />
            <div className='container'>
                <ProductsSlider categoryName={'Ən çox satılan məhsullar'} />
                <ProductsSlider categoryName={'Yeni gələn məhsullar'} />
                <div className='banner-wrapper'>
                    <Banner img={iphone_1} />
                    <Banner img={iphone_11} color={'#f2f2f2'} />
                </div>
                <ProductsSlider categoryName={'Yeni gələn aksesuarlar'} />
                <div className='category-card-wrapper'>
                    <CategoryCard image={image6xiaomi} />
                    <CategoryCard image={watch} />
                    <CategoryCard image={image6} />
                </div>
                <Advantage />
            </div>
            <Partners />
            <Footer />
        </>
    )
}

export default Home