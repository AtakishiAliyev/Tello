import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider'
import Banner from '../../components/Banner/Banner'
import iphone_1 from '../../images/iphon_1.png'
import iphone_11 from '../../images/iphone_11.png'

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
            <ProductsSlider categoryName={'Ən çox satılan məhsullar'} />
            <div className='container'>
                <div className='banner-wrapper'>
                    <Banner img={iphone_1} />
                    <Banner img={iphone_11} color={'#f2f2f2'} />
                </div>
            </div>
            <ProductsSlider categoryName={'Yeni gələn məhsullar'} />
        </>
    )
}

export default Home