import { createSlice } from "@reduxjs/toolkit";
import { getCreateBasket, getUserBasketAsync, getAddToBasketAsync, deleteBasketItem, updateBasket } from "../actions/basket";

const initialState = {
    loading: false,
    error: null,
    basket: [],
};

const basketReducer = createSlice({
    name: 'basket',
    initialState,
    extraReducers: {
        [getCreateBasket.pending]: (state) => {
            state.loading = true
        },
        [getCreateBasket.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getCreateBasket.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.basket = payload
        },
        [getUserBasketAsync.pending]: (state) => {
            state.loading = true
        },
        [getUserBasketAsync.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getUserBasketAsync.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.basket = payload
        },
        [getAddToBasketAsync.pending]: (state) => {
            state.loading = true
        },
        [getAddToBasketAsync.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getAddToBasketAsync.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.basket = payload
        },
        [deleteBasketItem.pending]: (state) => {
            state.loading = true
        },
        [deleteBasketItem.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [deleteBasketItem.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.basket = payload
        },
        [updateBasket.pending]: (state) => {
            state.loading = true
        },
        [updateBasket.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [updateBasket.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.basket = payload
        }
    }
})

export default basketReducer.reducer