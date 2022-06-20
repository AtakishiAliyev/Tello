import React from 'react'
import './Breadcrumb.scss'
import chevron_right from '../../images/chevron-right.png'

const Breadcrumb = () => {
    return (
        <div className='product-category-breadcrumb'>
            <ul>
                <li>
                    <a href="/">
                        Ana səhifə
                        <img src={chevron_right} alt="right" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        Telefonlar
                        <img src={chevron_right} alt="right" />
                    </a>
                </li>
                <li>
                    <a href="/">Apple</a>
                </li>
            </ul>
        </div>
    )
}

export default Breadcrumb