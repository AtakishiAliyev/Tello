import { createAsyncThunk } from '@reduxjs/toolkit'
const { REACT_APP_API_KEY } = process.env

export const getCustomerData = createAsyncThunk('user/fetchUser', async () => {
    try {
        const url = new URL(
            `https://api.chec.io/v1/customers/${localStorage.getItem('customerID')}`
        );

        let headers = {
            "X-Authorization": REACT_APP_API_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        };

        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        })
        const result = await response.json()
        return result
    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})

export const updateCustomer = createAsyncThunk('user/fetchUpdatedUser', async (data) => {
    try {
        const url = new URL(
            `https://api.chec.io/v1/customers/${data.id}`
        );

        let headers = {
            "X-Authorization": REACT_APP_API_KEY,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let body = {
            "email": data.email,
            "phone": data.phone,
            "firstname": data.firstname,
            "lastname": data.lastname,
            "external_id": null
        }

        const response = await fetch(url, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(body)
        })

        const result = await response.json();
        return result
    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})



