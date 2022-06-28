import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
    },
})