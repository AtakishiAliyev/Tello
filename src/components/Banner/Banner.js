import React from 'react'
import './Banner.scss'


const Banner = ({ img, color }) => {
    console.log(color)
    return (
        <div className='banner_block' style={color && { backgroundColor: `${color}` }}>
            <div className='banner_text'>
                <h1 className='title'>Əşyalarınızı tapmağın super asan yolu</h1>
                <p className='price'>1519 azn</p>
                <button className='btn btn-banner'>indi alin</button>
            </div>
            <div className='banner_img'>
                <img src={img} alt="banner" />
            </div>
        </div>
    )
}

export default Banner