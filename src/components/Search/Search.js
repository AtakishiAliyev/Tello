import React, { useEffect, useRef, useState } from 'react'
import './Search.scss'
import { getSearchProducts } from '../../api/https'
import search_icon from '../../images/search.png'
import { useNavigate } from 'react-router-dom'
import SearchSkeleton from '../Skeleton/SearchSkeleton'
import { useDebounce } from 'use-debounce';

const Search = () => {
    const [inputFocus, setInputFocus] = useState(false)
    const [inputText, setInputText] = useState('')
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const search = useRef()
    const [value] = useDebounce(inputText, 1000);

    window.addEventListener('click', (e) => {
        if (!search.current?.contains(e.target)) {
            setInputFocus(false)
        }
    })

    useEffect(() => {
        const getSearch = async () => {
            setProducts([])
            try {
                if (value.length > 0) {
                    const result = await getSearchProducts(value)
                    return setProducts(result.data.data)
                }
            } catch (error) {
                if (!error.response) {
                    throw error
                }
            }
        }

        getSearch()
    }, [value])

    return (
        <div ref={search} className='search_block'>
            <div className='search_block-form'>
                <img src={search_icon} alt="search" />
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <input
                        onFocus={() => { setInputFocus(true) }}
                        onChange={(e) => { setInputText(e.target.value) }}
                        value={inputText}
                        type="text"
                        placeholder='Axtarış...'
                    />
                </form>
            </div>
            <div className={`search_block-result ${inputFocus ? 'd-flex' : ''}`} >
                <div className='searc_block-default'>
                    <div className='head'>
                        <h3>{value.trim().length > 0 ? 'Nəticələr' : 'Son axtarışlar'}</h3>
                        <button onClick={() => { setInputText('') }}>Təmizlə</button>
                    </div>

                    {
                        value.trim().length > 0
                            ? <div className='result_search'>
                                {
                                    products?.length > 0
                                        ? products?.map(product => {
                                            return (
                                                <div onClick={() => { navigate(`/product-details/${product.id}`); setInputFocus(false); setInputText('') }} key={product?.id} className='item'>
                                                    <div className='image'>
                                                        <img src={product?.image?.url} alt="product" />
                                                    </div>
                                                    <div className='details'>
                                                        <h3>{product?.name}</h3>
                                                        <p className='price'>{product?.price.raw}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : [1, 2, 3].map((item, index) => <SearchSkeleton key={index} />)
                                }

                            </div>
                            : <div className='last_search'>
                                <div className='item'>Iphone</div>
                                <div className='item'>Samsung</div>
                                <div className='item'>Honor</div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Search