import React from 'react'
import './DropdownMenu.scss'

const DropdownMenu = ({ categories, hoverEl }) => {
    let category = null

    if (categories.id === hoverEl) {
        category = categories.children
    }

    return (
        <div className='dropdown_menu_block'>
            <div className='dropdown_menu-list'>
                {
                    category && category.map(item => {
                        return (
                            <div key={item.id} className='dropdown_menu-list-item'>
                                <h3 className={`${item.children.length === 0 ? 'sub-title' : ''}`}>
                                    <a href="/"> {item.name} </a>
                                </h3>
                                <ul>
                                    {
                                        item.children.length > 0 && item.children.map(c => {
                                            return (
                                                <li key={c.id}>
                                                    <a href="/">{c.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className='dropdown_menu-banner'>
                {
                    categories.id === hoverEl && categories.assets.length > 0
                        ? <img src={categories.assets[0].url} alt="menu banner" />
                        : ''
                }
            </div>
        </div>
    )
}

export default DropdownMenu