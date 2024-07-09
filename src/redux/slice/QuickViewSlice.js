import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openQuickView: false,
    product: {}
}

const QuickViewSlice = createSlice({
    name: "quickView",
    initialState,
    reducers: {
        handleView: (state, action) => {
            state.product = action.payload;
            state.openQuickView = !state.openQuickView;
        },
    }
});

export const { handleView } = QuickViewSlice.actions

export default QuickViewSlice.reducer