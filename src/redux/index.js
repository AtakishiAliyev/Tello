import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basketReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        basket: basketReducer,
        user: userReducer,
    },
})