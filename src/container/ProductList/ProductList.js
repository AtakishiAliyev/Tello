import React from 'react'
import './ProductList.scss'
import Header from '../../components/Header/Header'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Product from '../../components/Product/Product'
import Footer from '../../components/Footer/Footer'
import ProductFilter from '../../components/ProductList/ProductFilter/ProductFilter'

const ProductList = ({ categories }) => {
    return (
        <>
            <Header categories={categories} />
            <div className='container'>
                <Breadcrumb />
                <div className='product-list-wrapper'>
                    <div className='filter'>
                        <ProductFilter />
                    </div>
                    <div className='product-list'>
                        <div className='product-sort'>
                            <div className='total-product'>287 məhsul tapıldı</div>
                            <select>
                                <option value="id_desc">Ən yenilər</option>
                                <option value="name_a_to_z">Ada görə</option>
                                <option value="price_low_to_hi">Əvvəlcə ucuz</option>
                                <option value="price_hi_to_low">Əvvəlcə baha</option>
                            </select>
                        </div>
                        <div className='products-wrapper'>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductList