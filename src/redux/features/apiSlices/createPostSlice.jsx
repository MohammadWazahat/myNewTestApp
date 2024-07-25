import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCreatePost = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  //   tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/users",
      //   transformResponse: (tasks) => tasks.reverse(),
      //   providesTags: ["Tasks"],
    }),
    getSinglePosts: builder.query({
      query: (id) => `/users/${id}`,
      //   transformResponse: (tasks) => tasks.reverse(),
      //   providesTags: ["Tasks"],
    }),
    addPost: builder.mutation({
      query: (task) => ({
        url: "/users",
        method: "POST",
        body: task,
      }),
      //   invalidatesTags: ["Tasks"],
 
    }),

    updatePost: builder.mutation({
      query: (x) => ({
        url: `/users/${x.id}`,
        method: "PATCH",
        body: x.updatedPost,
      }),
      //   invalidatesTags: ["Tasks"],
   
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      //   invalidatesTags: ["Tasks"],
   
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetSinglePostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = apiCreatePost ;