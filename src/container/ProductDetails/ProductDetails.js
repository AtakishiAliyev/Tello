import React, { useEffect, useState } from 'react';
import './ProductDetails.scss';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { getProductDetails } from '../../api/https';

const ProductDetails = () => {
    const product_id = useParams().slug;
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        async function productDetails() {
            const result = await getProductDetails(product_id)
            setProductData(result.data)
        }
        productDetails()
    }, [product_id])

    // console.log(productData);

    return (
        <div className='container'>
            <Breadcrumb />
            <div className='product-details-wrapper'>
                <div className='product-images'>
                    <Gallery assets={productData?.assets} image={productData?.image} />
                </div>
                <div className='product-information'>
                    <h3>ProductDetails</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails