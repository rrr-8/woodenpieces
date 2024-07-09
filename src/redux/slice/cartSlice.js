import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPriceAll: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            const newItem = actions.payload.product;
            const amount = actions.payload.amount;
            const existing = state.cart.find((item) => item.id === newItem.id && item.color === newItem.color);

            if (typeof newItem.price === 'object') {
                newItem.price.map((pr) => {
                    if (pr.color === newItem.color) {
                        newItem.price = parseFloat((pr.value - (pr.value * newItem.discount / 100)).toFixed(2))
                    }
                })
            }

            if (existing) {
                existing.quantity += amount;
                existing.totalPrice += parseFloat((newItem.price * amount).toFixed(2))
                state.totalQuantity += amount;
                state.totalPriceAll += newItem.price * amount;
            } else {
                state.cart.push({ ...newItem, quantity: amount, price: newItem.price, totalPrice: newItem.price * amount })
                state.totalQuantity += amount;
                state.totalPriceAll += newItem.price * amount;
            }
        },
        removeFromCart: (state, actions) => {
            const product = actions.payload;
            const existing = state.cart.find((item) => item.id === product.id && item.color === product.color);

            if (product.quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== product.id || item.color !== product.color)
                state.totalQuantity--;
                state.totalPriceAll -= product.price;
            } else {
                existing.quantity--;
                existing.totalPrice -= existing.price;
                state.totalQuantity--;
                state.totalPriceAll -= product.price;
            }
        },
        deleteFromCartOneItem: (state, actions) => {
            const product = actions.payload;

            state.cart = state.cart.filter((item) => item.id !== product.id || item.color !== product.color)
            state.totalQuantity -= product.quantity;
            state.totalPriceAll -= product.totalPrice;
        },
        clearCart: (state) => {
            state.cart = []
            state.totalQuantity = 0
            state.totalPriceAll = 0
        },
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, deleteFromCartOneItem, clearCart, changeQuantity } = cartSlice.actions;
