import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const { REACT_APP_API_KEY } = process.env

const GenerateToken = () => {
    const param = useParams().token;
    const navigate = useNavigate();

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


    const id = console.log(localStorage.getItem('customerID'))

    useEffect(() => {
        id !== null && navigate('/userprofile')
    }, [id, navigate])

    return (
        <div></div>
    )
}

export default GenerateToken