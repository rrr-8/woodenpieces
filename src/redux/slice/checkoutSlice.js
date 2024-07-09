import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    checkoutIsOpen: false,
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        handleCheckout: (state) => {
            state.checkoutIsOpen = !state.checkoutIsOpen
        }
    }
});

export const { handleCheckout } = checkoutSlice.actions

export default checkoutSlice.reducer