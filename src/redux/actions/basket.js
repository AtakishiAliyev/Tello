import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api/https'
const { REACT_APP_API_KEY } = process.env

export const getCreateBasket = createAsyncThunk('basket/fetchBasket', async () => {
    try {
        const result = await api.createBasket();
        localStorage.setItem('basketId', result.data.id)
        return result.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})

export const getUserBasketAsync = createAsyncThunk('basket/fetchBasket', async (id) => {
    try {
        const result = await api.getUserBasket(id);
        return result.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})

export const getAddToBasketAsync = createAsyncThunk('basket/fetchBasket', async (data) => {
    const obj = {}

    obj[data.variant_color_id] = data.activeColor.id;
    obj[data.variant_size_id] = data.activeSize.id;

    const body = {
        "id": data.product_id,
        "quantity": data.quantity,
        "options": obj
    }

    try {
        const result = await fetch(`https://api.chec.io/v1/carts/${data.basket_id}`, {
            method: "POST",
            headers: {
                "X-Authorization": REACT_APP_API_KEY,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        const response = await result.json();
        return response.cart

    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})

export const deleteBasketItem = createAsyncThunk('basket/fetchBasket', async (data) => {
    try {
        const result = await fetch(`https://api.chec.io/v1/carts/${data.basket_id}/items/${data.line_item_id}`, {
            method: "DELETE",
            headers: {
                "X-Authorization": REACT_APP_API_KEY,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })

        const response = await result.json();
        return response.cart

    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})

export const updateBasket = createAsyncThunk('basket/fetchBasket', async (data) => {
    const body = {
        "quantity": data.quantity,
    }
    try {
        const result = await fetch(`https://api.chec.io/v1/carts/${data.basket_id}/items/${data.line_item_id}`, {
            method: "PUT",
            headers: {
                "X-Authorization": REACT_APP_API_KEY,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        const response = await result.json();
        return response.cart

    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})