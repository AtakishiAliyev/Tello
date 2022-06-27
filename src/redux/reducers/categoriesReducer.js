import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/categories";

const initialState = {
    loading: false,
    error: null,
    categories: [],
};

const categoriesReducer = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.loading = true
        },
        [getCategories.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getCategories.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.categories = payload
        }
    }
})

export default categoriesReducer.reducer