import React, { useEffect, useState } from 'react'
import './DropdownMenu.scss'

const DropdownMenu = ({ categories, hoverCategoryId }) => {
    const [subCategoryParent, setSubCategoryParent] = useState([])

    useEffect(() => {
        if (categories.id === hoverCategoryId) {
            setSubCategoryParent(categories.children)
        }
    }, [hoverCategoryId, categories.id, categories.children])

    return (
        <div className="dropdown_menu_block">
            <div className='dropdown_menu-list'>
                {
                    subCategoryParent.map(category => {
                        return (
                            <div key={category.id} className='dropdown_menu-list-item'>
                                <h3 className={`${category.children.length === 0 ? 'sub-title' : ''}`}>
                                    <a href="/"> {category.name} </a>
                                </h3>
                                <ul>
                                    {
                                        category.children.length > 0 && category.children.map(last => {
                                            return (
                                                <li key={last.id}>
                                                    <a href="/">{last.name}</a>
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
                    categories.id === hoverCategoryId && categories.assets.length > 0
                        ? <img src={categories.assets[0].url} alt="menu banner" />
                        : ''
                }
            </div>
        </div>
    )
}

export default DropdownMenu