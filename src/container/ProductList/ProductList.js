import React, { useState, useEffect } from 'react'
import './ProductList.scss'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Product from '../../components/Product/Product'
import ProductFilter from '../../components/ProductList/ProductFilter/ProductFilter'
import { useParams } from 'react-router-dom';
import { getProductsAsync } from '../../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux'

const ProductList = () => {
    const [filter, setFilter] = useState(false)
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state)
    const param = useParams()

    useEffect(() => {
        dispatch(getProductsAsync(param.slug))
    }, [dispatch, param])

    return (
        <>
            <div className='container'>
                <Breadcrumb />
                <div className='product-list-wrapper'>
                    <div className={`${filter ? 'open-filter' : ''} filter`}>
                        <div className='mobile-filter-head'>
                            <div onClick={() => { setFilter(false) }} className='filter-close'>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.825 20.025C0.625 20.025 0.425 19.925 0.225 19.825C-0.075 19.525 -0.075 19.025 0.225 18.725L18.625 0.225C18.925 -0.075 19.425 -0.075 19.725 0.225C20.025 0.525 20.025 1.025 19.725 1.325L1.425 19.725C1.225 19.925 1.025 20.025 0.825 20.025Z" fill="#1D2123"></path><path d="M19.225 20.025C19.025 20.025 18.825 19.925 18.625 19.825L0.225 1.42501C-0.075 1.12501 -0.075 0.625006 0.225 0.325006C0.525 0.0250061 1.025 0.0250061 1.325 0.325006L19.725 18.725C20.025 19.025 20.025 19.525 19.725 19.825C19.625 19.925 19.425 20.025 19.225 20.025Z" fill="#1D2123"></path></svg>
                            </div>
                            <h3>Filterləmələr</h3>
                        </div>
                        <ProductFilter />
                    </div>
                    <div className='product-list'>
                        <div className='product-sort'>
                            <div className='total-product'>{products?.products.length} məhsul tapıldı</div>
                            <div className='mobile-filter-sort'>
                                <select>
                                    <option value="id_desc">Ən yenilər</option>
                                    <option value="name_a_to_z">Ada görə</option>
                                    <option value="price_low_to_hi">Əvvəlcə ucuz</option>
                                    <option value="price_hi_to_low">Əvvəlcə baha</option>
                                </select>
                                <div className='btn-filter-wrapper'>
                                    <button onClick={() => { setFilter(true) }} className='btn btn-filter'>Filterləmələr</button>
                                </div>
                            </div>
                        </div>
                        <div className='products-wrapper'>
                            {
                                products?.products.map(item => {
                                    return (
                                        <Product key={item.id} product={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList