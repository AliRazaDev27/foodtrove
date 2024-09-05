import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sortBy: "default",
}

export const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        sort: (state, action) => {
            state.sortBy = action.payload
        }
    }
})
export const {sort} = sortSlice.actions

export default sortSlice.reducer