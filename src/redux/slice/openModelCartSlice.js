import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openCart: false,
    isCart: true,
}

const openModelCartSlice = createSlice({
    name: "modelCart",
    initialState,
    reducers: {
        handleOpen: (state) => {
            state.openCart = !state.openCart;
        },
        handleIsCart: (state, actions) => {
            state.isCart = actions.payload;
        }
    }
});

export const { handleOpen, handleIsCart } = openModelCartSlice.actions

export default openModelCartSlice.reducer