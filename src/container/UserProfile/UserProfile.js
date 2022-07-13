import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
                console.log(json?.customer_id)
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

    function logout() {
        setCustomerId(null)
        localStorage.setItem('customer_id', null)
    }

    return (
        <div>
            <h3>{userData?.firstname}</h3>
            <button onClick={() => { logout() }}>Log out</button>
        </div>
    )
}

export default UserProfile