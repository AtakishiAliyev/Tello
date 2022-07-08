import React from 'react'
import './Product.scss'
import azn from '../../images/azn.png'
import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => { navigate(`/product-details/${product.id}`) }} className="product">
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