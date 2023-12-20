import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tariqApi = createApi({
    reducerPath: "tariqApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ecommerce-node4.vercel.app",
    }),
    endpoints: (builder) => ({
        //  all endpoints return A hook
        getProducts: builder.query({
            query: (limit) => `/products?limit=${limit}`,
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,

        }),
        addToCart : builder.mutation({  
            query: (id) => ({
                url: `/cart`,
                method: "POST",
                headers: {
                    'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODJmYmQ3NGU3MzVmNjZlYmY4NmUzMSIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAzMDk2MDcyfQ.wP8OErjwszkwBIlyW6Kcf8TdQgkEccLi3CJ5rfed1_4',
                },
                body: {
                    productId: id,
                },
            }),
        }),

        removeItemsFromCart : builder.mutation({  
            query: (id) => ({
                url: `/cart/clear`,
                method: "PATCH",
                headers: {
                    'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODJmYmQ3NGU3MzVmNjZlYmY4NmUzMSIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAzMDk2MDcyfQ.wP8OErjwszkwBIlyW6Kcf8TdQgkEccLi3CJ5rfed1_4',
                },
                body: {
                    productId: id,
                },
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useAddToCartMutation ,useRemoveItemsFromCartMutation } = tariqApi;
