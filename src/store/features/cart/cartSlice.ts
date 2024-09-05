import { createSlice } from "@reduxjs/toolkit";

type ItemType = {
    item:object,
    quantity:number,
}
const initialState = {
    items: Array<ItemType>(),
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload.item
            const quantity = action.payload.quantity
            state.items = [...state.items, {item, quantity}]
        },
        removeFromCart: (state, action) => {
            const index = action.payload
            state.items.splice(index, 1)
        },
        increaseQuantity: (state, action) => {
            const index = action.payload
            state.items[index].quantity += 1
        },
        decreaseQuantity: (state, action) => {
            const index = action.payload
            state.items[index].quantity -= 1
        },
        
        
    }
})
export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer