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
                    <h3 className='product-name'>{productData?.name}</h3>
                    <p className='price'>2089</p>
                    <div className='product-variants'>
                        <div className='color'>
                            <p>Rəng:</p>
                            <div className='colors'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='size'>
                            <p>Yaddaş:</p>
                            <div className='sizes'>
                                <div className='active-size'>128gb</div>
                                <div>256gb</div>
                                <div>512gb</div>
                            </div>
                        </div>
                    </div>
                    <div className='add_to_basket'>
                        <div className='product-quantity'>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <button className='addToBasketBtn'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.72293 18.7514C8.17936 18.7514 8.54938 18.376 8.54938 17.9128C8.54938 17.4497 8.17936 17.0742 7.72293 17.0742C7.2665 17.0742 6.89648 17.4497 6.89648 17.9128C6.89648 18.376 7.2665 18.7514 7.72293 18.7514Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.8138 18.7514C17.2702 18.7514 17.6402 18.376 17.6402 17.9128C17.6402 17.4497 17.2702 17.0742 16.8138 17.0742C16.3573 17.0742 15.9873 17.4497 15.9873 17.9128C15.9873 18.376 16.3573 18.7514 16.8138 18.7514Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.11133 1.14082H4.41711L6.63199 12.3697C6.70756 12.7558 6.91456 13.1026 7.21674 13.3494C7.51892 13.5962 7.89703 13.7274 8.28488 13.7198H16.3179C16.7058 13.7274 17.0839 13.5962 17.3861 13.3494C17.6883 13.1026 17.8953 12.7558 17.9708 12.3697L19.2931 5.33382H5.24356" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Səbətə at
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails