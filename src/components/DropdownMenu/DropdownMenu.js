import React, { useEffect, useState } from 'react'
import './DropdownMenu.scss'
import { Link } from 'react-router-dom';

const DropdownMenu = ({ categories, hoverCategoryId, openId, setNavbarStatus }) => {
    const [subCategoryParent, setSubCategoryParent] = useState([])

    useEffect(() => {
        if (categories.id === hoverCategoryId) {
            setSubCategoryParent(categories.children)
        }
    }, [hoverCategoryId, categories.id, categories.children])

    return (
        <div className={`${categories.id === openId ? 'd-flex' : ''} dropdown_menu_block`} >
            <div className='dropdown_menu-list'>

                {
                    subCategoryParent.map(category => {
                        return (
                            <div key={category.id} className='dropdown_menu-list-item'>
                                <h3 className={`${category.children.length === 0 ? 'sub-title' : ''}`}>
                                    <Link to={`/products/${category.slug}`} onClick={() => { setNavbarStatus(false) }}> {category.name} </Link>
                                </h3>
                                <ul>
                                    {
                                        category.children.length > 0 && category.children.map(last => {
                                            return (
                                                <li key={last.id}>
                                                    <Link to={`/products/${last.slug}`} onClick={() => { setNavbarStatus(false) }}>{last.name}</Link>
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
        </div >

    )
}

export default DropdownMenu