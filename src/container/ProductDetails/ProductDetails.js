import React from 'react';
import './ProductDetails.scss';
import { useParams } from 'react-router-dom';
// import Gallery from '../../components/Gallery/Gallery'

const ProductDetails = () => {
    const product_id = useParams().slug;


    console.log(product_id);
    return (
        <div className='container'>
            ProductDetails
        </div>
    )
}

export default ProductDetails