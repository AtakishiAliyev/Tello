import React from 'react'
import './Product.scss'
import azn from '../../images/azn.png'
import iphone_12 from '../../images/iphone-12.png'

const Product = () => {
    return (
        <div className="product">
            <div className='product-img'>
                <img src={iphone_12} alt="iphone 12 " />
            </div>
            <h3 className='product-name'>Apple  iPhone 12, 64 GB</h3>
            <h3 className='product-color'>Purple</h3>
            <p className='product-price'>
                1360
                <img src={azn} alt="azn" />
            </p>
        </div>
    )
}

export default Product