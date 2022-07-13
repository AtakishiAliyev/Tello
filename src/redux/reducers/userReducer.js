import { createSlice } from "@reduxjs/toolkit";
import { createCustomer } from "../actions/user";

const initialState = {
    loading: false,
    error: null,
    user: [],
};

const userReducer = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [createCustomer.pending]: (state) => {
            state.loading = true
        },
        [createCustomer.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [createCustomer.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = payload
        }
    }
})

export default userReducer.reducer