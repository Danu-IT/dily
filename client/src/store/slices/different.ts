import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
    town: string;
}

const initialState: userState = {
    town: '',
};

export const different = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleTown: (state, action: PayloadAction<string>) => {
            state.town = action.payload
        },
    }
})

export default different.reducer;
export const { toggleTown } = different.actions;