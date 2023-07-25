import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RegFormApi, AuthForm } from '../../type/form';
import { SerializedError } from "../../type/error";
import { LoginApiType } from "../../type/auth";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/auth",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            if (localStorage.getItem('token')) {
                headers.set("Authorization", "Bearer " + localStorage.getItem('token'));
            }
            return headers
        },
        credentials: "include",
    }),
    tagTypes: ["auth"],
    endpoints: (build) => ({
        postRegistration: build.mutation<SerializedError, RegFormApi>({
            query: body => ({
                url: "/registraition",
                method: 'POST',
                body: JSON.stringify(body),
            }),
        }),
        postAuthorization: build.mutation<LoginApiType, AuthForm>({
            query: body => ({
                url: "/login",
                method: 'POST',
                body: JSON.stringify(body),
            })
        }),
        refreshToken: build.query<LoginApiType, void>({
            query: () => ({
                url: "/refresh",
            })
        })
    })
})