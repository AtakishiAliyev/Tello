import React, { useState } from 'react'
import './Header.scss'
import logo from '../../images/logo.png'
import person_icon from '../../images/person.png'
import heart_icon from '../../images/heart.png'
import basket_icon from '../../images/shopping-cart.png'
import Search from '../Search/Search'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

const Header = ({ categories }) => {
    const [hoverEl, setHoverEl] = useState()

    function getHoverEl(data) {
        if (data.children.length > 0) {
            setHoverEl(data.id)
        }
    }

    return (
        <div className='header-wrapper'>
            <div className='header_block'>
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
                                    <li key={category.id} onMouseOver={() => { getHoverEl(category) }}>
                                        <a href="/">{category.name}</a>
                                        {
                                            category.children.length > 0 && <DropdownMenu categories={category} hoverEl={hoverEl} />
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