import React from 'react'
import './Product.scss'
import azn from '../../images/azn.png'

const Product = ({ product }) => {
    console.log(product)
    return (
        <div className="product">
            <div className='product-img'>
                <img src={product.image.url} alt="iphone 12 " />
            </div>
            <h3 className='product-name'>{product.name}</h3>
            {/* <h3 className='product-color'>Purple</h3> */}
            <p className='product-price'>
                {product.price.raw}
                <img src={azn} alt="azn" />
            </p>
        </div>
    )
}

export default Product