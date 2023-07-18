import { combineReducers, configureStore } from "@reduxjs/toolkit";
import slices from './slices'
import { authAPI } from "./services/authService";

const rootReducer = combineReducers(slices);

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];