import { USERS_LOGIN_URL, USERS_LOGOUT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: USERS_LOGIN_URL,
                method: "POST",
                body: data,
            }),
            keepUnusedDataFor: 5,
        }),
        logout: builder.mutation({
            query: () => ({
                url: USERS_LOGOUT_URL,
                method: "POST",
            }),
            
        })
    }),
});

export const { useLoginMutation, useLogoutMutation } = usersApiSlice;