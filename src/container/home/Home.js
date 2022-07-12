import React, { useEffect } from 'react'
import './Home.scss'
import Slider from '../../components/Home/Slider/Slider'
import ProductsSlider from '../../components/Home/ProductsSlider/ProductsSlider'
import Banner from '../../components/Home/Banner/Banner'
import CategoryCard from '../../components/Home/CategoryCard/CategoryCard'
import Advantage from '../../components/Home/Advantage/Advantage'
import Partners from '../../components/Home/Partners/Partners'
// !Images
import iphone_1 from '../../images/iphon_1.png'
import iphone_11 from '../../images/iphone_11.png'
import watch from '../../images/watch.png'
import image6xiaomi from '../../images/image6xiaomi.png'
import image6 from '../../images/image6.png'
import { getProductsAsync } from '../../redux/actions/products'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()
    const { products } = useSelector((state) => state)

    useEffect(() => {
        dispatch(getProductsAsync(''))
    }, [dispatch])

    const sliderData = (slug) => {
        const data = []
        products?.products?.map(item => {
            item.categories.map(el => {
                if (el.slug === slug) {
                    data.push(item)
                } return false
            })
            return true
        })
        return data
    }

    return (
        <>
            <Slider />
            <div className='container'>
                <ProductsSlider
                    categoryName={'Ən çox satılan məhsullar'}
                    loading={products.loading}
                    slug={"mobil-telefonlar"}
                    data={sliderData('mobil-telefonlar')}
                />
                <ProductsSlider
                    categoryName={'Yeni gələn məhsullar'}
                    loading={products.loading}
                    slug={"mobil-telefonlar"}
                    data={sliderData('mobil-telefonlar')}
                />
                <div className='banner-wrapper'>
                    <Banner img={iphone_1} />
                    <Banner img={iphone_11} color={'#f2f2f2'} />
                </div>
                <ProductsSlider
                    categoryName={'Yeni gələn aksesuarlar'}
                    loading={products.loading}
                    slug={"aksesuarlar"}
                    data={sliderData('aksesuarlar')}
                />
                <div className='category-card-wrapper'>
                    <CategoryCard
                        categoryName={'Telefon'}
                        slug={'mobil-telefonlar'}
                        image={image6xiaomi}
                    />
                    <CategoryCard
                        categoryName={'Smart Saat'}
                        slug={'saatlar'}
                        image={watch}
                    />
                    <CategoryCard
                        categoryName={'Aksesuar'}
                        slug={'aksesuarlar'}
                        image={image6}
                    />
                </div>
                <Advantage />
            </div>
            <Partners />
        </>
    )
}

export default Home