import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './UserProfile.scss'

const UserProfile = () => {
    const param = useParams()
    const [customerId, setCustomerId] = useState(localStorage.getItem('customer_id') || null)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const url = new URL(
            "https://api.chec.io/v1/customers/exchange-token"
        );

        let headers = {
            "X-Authorization": "sk_43790e4ac2a0fa20c262e5f327a452b6084617465172f",
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let body = {
            "token": param?.token
        }

        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(json => {
                if (json?.customer_id) { setCustomerId(json.customer_id) }
                if (!localStorage.getItem('customer_id')) {
                    localStorage.setItem('customer_id', json?.customer_id)
                }
            });
    }, [param.token])

    useEffect(() => {
        if (customerId) {
            const url = new URL(
                `https://api.chec.io/v1/customers/${customerId}`
            );

            let headers = {
                "X-Authorization": "sk_43790e4ac2a0fa20c262e5f327a452b6084617465172f",
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then(response => response.json())
                .then(json => { if (json) setUserData(json) });
        }
    }, [customerId, param.token])


    console.log(userData)

    return (
        <div className='user_details_body'>
            <div className='container'>
                <div className='user_details_wrapper'>
                    <div className='user_profile'>
                        <h3>Profilim</h3>
                        <ul>
                            <li>
                                <Link to={`/userprofile/${param.token}`}>Şəxsi məlumatlar</Link>
                            </li>
                            <li>
                                <Link to='/login'>Çıxış</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='user_details'>
                        <h3>Şəxsi məlumatlar</h3>
                        <form>
                            <div className='input-group'>
                                <label>Ad </label>
                                <input type="text" placeholder='Adınızı daxil edin' name='firstname' defaultValue={userData?.firstname} />
                            </div>
                            <div className='input-group'>
                                <label>Soyad</label>
                                <input type="text" placeholder='Soyadınızı daxil edin' name='lastname' defaultValue={userData?.lastname} />
                            </div>
                            <div className='input-group'>
                                <label>E-mail</label>
                                <input type="email" placeholder='nümunə@gmail.com' name='email' defaultValue={userData?.email} />
                            </div>
                            <div className='input-group'>
                                <label>Mobil nömrə</label>
                                <input type="text" placeholder='070 - 000 - 00 - 00' name='phone' defaultValue={userData?.phone} />
                            </div>
                            <button className='main-btn'>Məlumatları yenilə</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile