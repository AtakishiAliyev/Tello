import { createAsyncThunk } from '@reduxjs/toolkit'
const { REACT_APP_API_KEY } = process.env

console.log(REACT_APP_API_KEY);

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
        return response

    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})
