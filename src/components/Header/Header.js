import React from 'react'
import './Header.scss'
import logo from '../../images/logo.png'
import Search from '../Search/Search'

const Header = () => {
    return (
        <div className='header_block'>
            <div className='logo_block'>
                <img src={logo} alt="logo" />
                <h1>Tello</h1>
            </div>
            <div className='search_block'>
                <Search />
            </div>
            <div className='user_block'>
                <button>Person</button>
                <button>Heart</button>
                <button>Basket</button>
            </div>
            <nav>
                <ul className='navbar_block'>
                    <li>
                        <a href="#">Yeni</a>
                    </li>
                    <li>
                        <a href="#">Apple</a>
                    </li>
                    <li>
                        <a href="#">Samsung</a>
                    </li>
                    <li>
                        <a href="#">Xiaomi</a>
                    </li>
                    <li>
                        <a href="#">Redmi</a>
                    </li>
                    <li>
                        <a href="#">Bütün Brendlər</a>
                    </li>
                    <li>
                        <a href="#">Aksessuarlar</a>
                    </li>
                    <li>
                        <a href="#">Endirimlər</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header