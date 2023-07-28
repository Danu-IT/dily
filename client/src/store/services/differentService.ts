import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TownTypes } from "../../type/different";

export const differentAPI = createApi({
    reducerPath: "differentAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    tagTypes: [],
    endpoints: (build) => ({
        postTown: build.mutation<TownTypes, { latitude: number, longitude: number }>({
            query: body => ({
                url: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address",
                body: { lat: body.latitude, lon: body.longitude },
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + "c52cf6c6979442781d1db3da131dffc98e2e4dd8"
                },
            })
        })
    })
})