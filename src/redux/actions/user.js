import { createAsyncThunk } from '@reduxjs/toolkit'
const { REACT_APP_API_KEY } = process.env

export const createCustomer = createAsyncThunk('user/fetchUser', async (data) => {
    const body = {
        "firstname": data.firstname,
        "lastname": data.lastname,
        "email": data.email,
        "phone": data.phone,
        "external_id": null
    }

    try {
        const result = await fetch(`https://api.chec.io/v1/customers`, {
            method: "POST",
            headers: {
                "X-Authorization": REACT_APP_API_KEY,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        const response = await result.json();
        console.log(response)
        // return response

    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})

export const loginCustomer = createAsyncThunk('user/fetchLoginUser', async (data) => {
    const body = {
        "email": data.email,
        "base_url": data.base_url
    }

    try {
        const result = await fetch("https://api.chec.io/v1/customers/email-token", {
            method: "POST",
            headers: {
                "X-Authorization": REACT_APP_API_KEY,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        const response = await result.json();
        console.log(response);

    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})