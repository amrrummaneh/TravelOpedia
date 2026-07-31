import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST,PUT,DELETE
    getAllDestination: builder.query({
      query: () => "destination",
    }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationAPI;
