import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './UserProfile.scss'
const { REACT_APP_API_KEY } = process.env

const UserProfile = () => {
    const param = useParams().token;
    const [customerData, setCustomerData] = useState(null)

    useEffect(() => {
        if (!localStorage.getItem('customerID')) {
            const url = new URL(
                "https://api.chec.io/v1/customers/exchange-token"
            );

            let headers = {
                "X-Authorization": REACT_APP_API_KEY,
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            let body = {
                "token": param
            }

            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(json => !localStorage.getItem('customerID') && localStorage.setItem('customerID', json.customer_id));
        }
    }, [param])

    useEffect(() => {
        const url = new URL(
            `https://api.chec.io/v1/customers/${localStorage.getItem('customerID')}`
        );

        let headers = {
            "X-Authorization": REACT_APP_API_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        };

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => setCustomerData(json));
    }, [])

    const logoutCustomer = () => {
        localStorage.removeItem('customerID')
    }

    console.log(customerData)

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
                                <Link to='/login' onClick={() => { logoutCustomer() }}>Çıxış</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='user_details'>
                        <h3>Şəxsi məlumatlar</h3>
                        <form>
                            <div className='input-group'>
                                <label>Ad </label>
                                <input type="text" placeholder='Adınızı daxil edin' name='firstname' defaultValue={customerData?.firstname} />
                            </div>
                            <div className='input-group'>
                                <label>Soyad</label>
                                <input type="text" placeholder='Soyadınızı daxil edin' name='lastname' defaultValue={customerData?.lastname} />
                            </div>
                            <div className='input-group'>
                                <label>E-mail</label>
                                <input type="email" placeholder='nümunə@gmail.com' name='email' defaultValue={customerData?.email} />
                            </div>
                            <div className='input-group'>
                                <label>Mobil nömrə</label>
                                <input type="text" placeholder='070 - 000 - 00 - 00' name='phone' defaultValue={customerData?.phone} />
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