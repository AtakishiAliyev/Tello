import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api/https'

export const getCategories = createAsyncThunk('categories/fetchCategories', async () => {
    try {
        const result = await api.getAllCategories();

        return result.data.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})
