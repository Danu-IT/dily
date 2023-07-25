import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsetApiType } from '../../type/auth';

interface userState {
    isAuth: boolean;
    user: UsetApiType | null;
}

const initialState: userState = {
    isAuth: false,
    user: null
};

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        changeUser: (state, action: PayloadAction<UsetApiType>) => {
            state.user = action.payload
        }
    }
})

export default auth.reducer;
export const { toggleAuth, changeUser } = auth.actions;