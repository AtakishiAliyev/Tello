import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Slider from '../../components/Home/Slider/Slider'
import ProductsSlider from '../../components/Home/ProductsSlider/ProductsSlider'
import Banner from '../../components/Home/Banner/Banner'
import CategoryCard from '../../components/Home/CategoryCard/CategoryCard'
import Advantage from '../../components/Home/Advantage/Advantage'
// !Images
import iphone_1 from '../../images/iphon_1.png'
import iphone_11 from '../../images/iphone_11.png'
import watch from '../../images/watch.png'
import image6xiaomi from '../../images/image6xiaomi.png'
import image6 from '../../images/image6.png'

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getData() {
            const url = new URL(
                "https://api.chec.io/v1/categories"
            );

            let params = {
                "depth": "3",
            };

            Object.keys(params)
                .forEach(key => url.searchParams.append(key, params[key]));

            let headers = {
                "X-Authorization": "pk_437901876da421fb3e83a2493acac7205e61388d27e32",
                "Accept": "application/json",
                "Content-Type": "application/json",
            };

            const response = await axios.get(url, {
                method: "GET",
                headers: headers,
            })

            response.data.data.map(item => {
                setCategories(item.children)
                return false
            })
        }

        getData()
    }, [])

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
        </>
    )
}

export default Home