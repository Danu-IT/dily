import { createSlice } from '@reduxjs/toolkit';

interface userState {
    isAuth: boolean;

}

const initialState: userState = {
    isAuth: false,
};

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})

export default auth.reducer;
export const { } = auth.actions;