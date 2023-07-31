import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../type/different";

interface userState {
    town: string;
    category: Category[];
}

const initialState: userState = {
    town: '',
    category: []
};

export const different = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleTown: (state, action: PayloadAction<string>) => {
            state.town = action.payload
        },
        getCategories: (state, action: PayloadAction<Category[]>) => {
            state.category = action.payload
        }
    }
})

export default different.reducer;
export const { toggleTown, getCategories } = different.actions;