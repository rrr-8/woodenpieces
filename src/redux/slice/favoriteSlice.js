import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorite: [],
    totalQuantityFavorite: 0,
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, actions) => {
            const newItem = actions.payload;
            const existing = state.favorite.find((item) => item.id === newItem.id && item.color === newItem.color)

            newItem.price.map((pr) => {
                if (pr.color === newItem.color) {
                    newItem.price = pr.value
                }
            })

            if (!existing) {
                state.favorite.push(actions.payload)
                state.totalQuantityFavorite++;
            }
        },
        deleteFromFavorite: (state, actions) => {
            const product = actions.payload
            state.favorite = state.favorite.filter((item) => item.id !== product.id || item.color !== product.color)
        }
    }
});

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer