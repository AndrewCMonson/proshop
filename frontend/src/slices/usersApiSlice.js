import { USERS_LOGIN_URL } from "../constants";
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
    }),
});

export const { useLoginMutation } = usersApiSlice;