import React from 'react'
import './Advantage.scss'
// ! Images
import box from '../../../images/box.png'
import card from '../../../images/card-pos.png'
import medal from '../../../images/medal-star.png'

const Advantage = () => {
    return (
        <div className='advantage-wrapper'>
            <div className='advantage-item'>
                <div className='image'>
                    <img src={box} alt="box" />
                </div>
                <h3>Çatdırılma</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='advantage-item'>
                <div className='image'>
                    <img src={card} alt="card" />
                </div>
                <h3>Çatdırılma</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='advantage-item'>
                <div className='image'>
                    <img src={medal} alt="medal" />
                </div>
                <h3>Çatdırılma</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
        </div>
    )
}

export default Advantage