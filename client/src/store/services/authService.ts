import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RegFormApi } from "../../type/form";
import { SerializedError } from "../../type/error";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/auth",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers
        },
    }),
    tagTypes: ["auth"],
    endpoints: (build) => ({
        postRegistration: build.mutation<SerializedError, RegFormApi>({
            query: body => ({
                url: "/registraition",
                method: 'POST',
                body: JSON.stringify(body),
            }),
        })
    })
})