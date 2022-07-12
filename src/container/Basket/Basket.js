import React from 'react';
import './Basket.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBasketItem, updateBasket } from '../../redux/actions/basket';

const Basket = () => {
    const { basket } = useSelector((state) => state)
    const dispatch = useDispatch();

    const updatedQuantity = (type, quantity, line_item_id) => {
        if (type === 'inc') {
            quantity = quantity + 1
        } else {
            quantity = quantity - 1
        }

        dispatch(updateBasket({
            quantity,
            basket_id: localStorage.getItem('basketId'),
            line_item_id
        }))
    }

    return (
        <div className='basket-body'>
            <div className='container'>
                <h3 className='basket-title'>Səbət ({basket?.basket?.total_unique_items} məhsul)</h3>
                <div className='basket-wrapper'>
                    <div className='basket-items'>
                        {
                            basket?.basket?.line_items?.map(item => {
                                return (
                                    <div key={item.id} className='item'>
                                        <div className='item-details'>
                                            <div className='image'>
                                                <img src={item.image.url} alt="product" />
                                            </div>
                                            <div className='item-static-details'>
                                                <h3>{item.product_name}</h3>
                                                <div className='item-variants'>
                                                    <p className='color'>
                                                        <span>Rəng:</span>
                                                        {item.selected_options[0].option_name}
                                                    </p>
                                                    <p className='price'>{item.price.raw} AZN</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item-quantity'>
                                            <button onClick={() => { updatedQuantity('desc', item.quantity, item.id) }}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => { updatedQuantity('inc', item.quantity, item.id) }}>+</button>
                                        </div>
                                        <button onClick={() => {
                                            dispatch(deleteBasketItem({
                                                basket_id: localStorage.getItem('basketId'),
                                                line_item_id: item.id
                                            }))
                                        }} className='remove-btn'>
                                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.900391 4.54541H2.70039H17.1004" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5.39922 4.54542V2.72724C5.39922 2.24503 5.58886 1.78257 5.92643 1.44159C6.26399 1.10062 6.72183 0.909058 7.19922 0.909058H10.7992C11.2766 0.909058 11.7344 1.10062 12.072 1.44159C12.4096 1.78257 12.5992 2.24503 12.5992 2.72724V4.54542M15.2992 4.54542V17.2727C15.2992 17.7549 15.1096 18.2174 14.772 18.5583C14.4344 18.8993 13.9766 19.0909 13.4992 19.0909H4.49922C4.02183 19.0909 3.56399 18.8993 3.22643 18.5583C2.88886 18.2174 2.69922 17.7549 2.69922 17.2727V4.54542H15.2992Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.19922 9.09094V14.5455" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.8008 9.09094V14.5455" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='basket-total'>
                        <h3>Ümumi</h3>
                        <ul>
                            <li>
                                <span>Məbləğ</span>
                                <span>{basket?.basket?.subtotal.raw} AZN</span>
                            </li>
                            <li>
                                <span>Çatdırılma</span>
                                <span>0</span>
                            </li>
                            <li>
                                <span>Hədiyyə paketi</span>
                                <span>0</span>
                            </li>
                            <li>
                                <span>Promo kod</span>
                                <span>0</span>
                            </li>
                        </ul>
                        <p className='total-price'>
                            <span>Cəmi</span>
                            <span>{basket?.basket?.subtotal.raw} AZN</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket