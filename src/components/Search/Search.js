import React from 'react'
import './Search.scss'
import search_icon from '../../images/search.png'

const Search = () => {
    return (
        <div className='search_block'>
            <div className='search_block-form'>
                <img src={search_icon} alt="search" />
                <form>
                    <input type="text" placeholder='Axtarış...' />
                </form>
            </div>
            <div className='search_block-result'></div>
        </div>
    )
}

export default Search