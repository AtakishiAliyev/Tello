import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import './Header.scss'
import logo from '../../images/logo.png'
import person_icon from '../../images/person.png'
import basket_icon from '../../images/shopping-cart.png'
import loading from '../../images/mini_loading.svg'
import Search from '../Search/Search'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { getCategories } from '../../redux/actions/categories'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getCreateBasket, getUserBasketAsync } from '../../redux/actions/basket';

const Header = () => {
    const dispatch = useDispatch()
    const { categories, basket } = useSelector((state) => state)
    const [hoverCategoryId, setHoverCategoryId] = useState()
    const [navbarStatus, setNavbarStatus] = useState(false)
    const [openId, setOpenId] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        !localStorage.getItem('basketId') && dispatch(getCreateBasket())

        dispatch(getUserBasketAsync(localStorage.getItem('basketId')))
    }, [dispatch])

    function gethoverCategoryId(data) {
        if (data.children.length > 0 && window.innerWidth > 576) {
            setHoverCategoryId(data.id)
        }
    }

    function showSubCategory(data) {
        if (data.children.length > 0) {
            setHoverCategoryId(data.id)
            if (openId === data.id) {
                setOpenId(null)
            } else {
                setOpenId(data.id)
            }
        }
    }

    return (
        <div className='header-wrapper'>
            <div className='container-fluid'>
                <div className='header_block'>
                    <div onClick={() => { setNavbarStatus(true) }} className='menu-hamburger'>
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3 13.6H0.8C0.4 13.6 0 13.2 0 12.8C0 12.4 0.3 12 0.8 12H19.3C19.7 12 20.1 12.3 20.1 12.8C20.1 13.3 19.7 13.6 19.3 13.6Z" fill="#1D2123" />
                            <path d="M19.3 1.6H0.8C0.4 1.6 0 1.2 0 0.8C0 0.4 0.3 0 0.8 0H19.3C19.7 0 20 0.4 20 0.8C20 1.2 19.7 1.6 19.3 1.6Z" fill="#1D2123" />
                            <path d="M19.3 7.6H0.8C0.4 7.6 0 7.2 0 6.8C0 6.4 0.3 6 0.8 6H19.3C19.7 6.1 20 6.4 20 6.8C20 7.2 19.7 7.6 19.3 7.6Z" fill="#1D2123" />
                        </svg>
                    </div>
                    <div className='logo_block'>
                        <img src={logo} alt="logo" />
                        <Link to="/" className='title'>Tello</Link>
                    </div>
                    <Search />
                    <div className='user_block'>
                        <Link to='/signup' className='user_block-item'>
                            <img src={person_icon} alt="person" />
                        </Link>
                        <Link to='/basket' className='user_block-item user_basket_icon'>
                            <img src={basket_icon} alt="basket" />
                            {
                                !basket.loading
                                    ? <div className='basket_product_count'>{basket?.basket?.total_items}</div>
                                    : <span className='basket_product_loading'><img src={loading} alt="loading" /></span>
                            }
                        </Link>
                    </div>
                    <nav className={`${navbarStatus && 'open-navbar'}`}>
                        <div className='mobile-navbar-header'>
                            <div onClick={() => { setNavbarStatus(false) }} className='menu_close'>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.825 20.025C0.625 20.025 0.425 19.925 0.225 19.825C-0.075 19.525 -0.075 19.025 0.225 18.725L18.625 0.225C18.925 -0.075 19.425 -0.075 19.725 0.225C20.025 0.525 20.025 1.025 19.725 1.325L1.425 19.725C1.225 19.925 1.025 20.025 0.825 20.025Z" fill="#1D2123" />
                                    <path d="M19.225 20.025C19.025 20.025 18.825 19.925 18.625 19.825L0.225 1.42501C-0.075 1.12501 -0.075 0.625006 0.225 0.325006C0.525 0.0250061 1.025 0.0250061 1.325 0.325006L19.725 18.725C20.025 19.025 20.025 19.525 19.725 19.825C19.625 19.925 19.425 20.025 19.225 20.025Z" fill="#1D2123" />
                                </svg>
                            </div>
                            <div className='mobile-navbar-logo'>
                                <img src={logo} alt="logo" />
                                <h1 className='title'>Tello</h1>
                            </div>
                        </div>

                        <ul className='navbar_block'>
                            {
                                categories?.categories[0]?.children?.map(category => {
                                    return (
                                        <li key={category?.id} onMouseOver={() => { gethoverCategoryId(category) }}>
                                            <div onClick={() => { navigate(`/products/${category?.slug}`) }} >{category?.name}</div>

                                            {
                                                category.children.length > 0
                                                && <>
                                                    <div onClick={() => { showSubCategory(category) }} className={`mobile_chevron_right ${category.id === openId ? 'rotate-90' : ''}`}>
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5002 17C10.2442 17 9.98825 16.902 9.79325 16.707C9.40225 16.316 9.40225 15.684 9.79325 15.293L13.0982 11.988L9.91825 8.695C9.53525 8.297 9.54625 7.664 9.94325 7.281C10.3413 6.898 10.9742 6.909 11.3572 7.305L15.2193 11.305C15.5983 11.698 15.5933 12.321 15.2073 12.707L11.2072 16.707C11.0122 16.902 10.7563 17 10.5002 17Z" fill="#2E3A59" />
                                                        </svg>
                                                    </div>
                                                    <DropdownMenu
                                                        categories={category}
                                                        hoverCategoryId={hoverCategoryId}
                                                        openId={openId}
                                                    />
                                                </>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header