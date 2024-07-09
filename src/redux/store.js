import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import openModelCartReducer from "./slice/openModelCartSlice";
import QuickViewReducer from "./slice/QuickViewSlice";
import favoriteReducer from "./slice/favoriteSlice";
import checkoutReducer from "./slice/checkoutSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        modelCart: openModelCartReducer,
        quickView: QuickViewReducer,
        favorite: favoriteReducer,
        checkout: checkoutReducer
    }
})

export default store;