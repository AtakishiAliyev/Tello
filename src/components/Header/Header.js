import React, { useState } from 'react'
import './Header.scss'
import logo from '../../images/logo.png'
import person_icon from '../../images/person.png'
import heart_icon from '../../images/heart.png'
import basket_icon from '../../images/shopping-cart.png'
import Search from '../Search/Search'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

const Header = ({ categories }) => {
    const [hoverCategoryId, setHoverCategoryId] = useState()

    function gethoverCategoryId(data) {
        if (data.children.length > 0 && window.innerWidth > 576) {
            setHoverCategoryId(data.id)
        }
    }

    return (
        <div className='header-wrapper'>
            <div className='header_block'>
                <div className='menu-hamburger'>
                    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3 13.6H0.8C0.4 13.6 0 13.2 0 12.8C0 12.4 0.3 12 0.8 12H19.3C19.7 12 20.1 12.3 20.1 12.8C20.1 13.3 19.7 13.6 19.3 13.6Z" fill="#1D2123" />
                        <path d="M19.3 1.6H0.8C0.4 1.6 0 1.2 0 0.8C0 0.4 0.3 0 0.8 0H19.3C19.7 0 20 0.4 20 0.8C20 1.2 19.7 1.6 19.3 1.6Z" fill="#1D2123" />
                        <path d="M19.3 7.6H0.8C0.4 7.6 0 7.2 0 6.8C0 6.4 0.3 6 0.8 6H19.3C19.7 6.1 20 6.4 20 6.8C20 7.2 19.7 7.6 19.3 7.6Z" fill="#1D2123" />
                    </svg>
                </div>
                <div className='logo_block'>
                    <img src={logo} alt="logo" />
                    <h1 className='title'>Tello</h1>
                </div>
                <Search />
                <div className='user_block'>
                    <a href='/' className='user_block-item'>
                        <img src={person_icon} alt="person" />
                    </a>
                    <a href='/' className='user_block-item'>
                        <img src={heart_icon} alt="heart" />
                    </a>
                    <a href='/' className='user_block-item'>
                        <img src={basket_icon} alt="basket" />
                    </a>
                </div>
                <nav>
                    <ul className='navbar_block'>
                        {
                            categories.map(category => {
                                return (
                                    <li key={category.id} onMouseOver={() => { gethoverCategoryId(category) }}>
                                        <a href="/">{category.name}</a>
                                        <div className='mobile_chevron_right'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5002 17C10.2442 17 9.98825 16.902 9.79325 16.707C9.40225 16.316 9.40225 15.684 9.79325 15.293L13.0982 11.988L9.91825 8.695C9.53525 8.297 9.54625 7.664 9.94325 7.281C10.3413 6.898 10.9742 6.909 11.3572 7.305L15.2193 11.305C15.5983 11.698 15.5933 12.321 15.2073 12.707L11.2072 16.707C11.0122 16.902 10.7563 17 10.5002 17Z" fill="#2E3A59" />
                                            </svg>
                                        </div>
                                        {
                                            category.children.length > 0
                                            && <DropdownMenu
                                                categories={category}
                                                hoverCategoryId={hoverCategoryId}
                                            />
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header