import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basketReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        basket: basketReducer,
    },
})