import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiComment = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006" }),
  //   tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "/myComments",
      transformResponse: (tasks) => tasks.reverse(),
      //   providesTags: ["Tasks"],
    }),
    getSingleComment: builder.query({
      query: (id) => `/myComments/${id}`,
      //   transformResponse: (tasks) => tasks.reverse(),
      //   providesTags: ["Tasks"],
    }),
    addComment: builder.mutation({
      query: (task) => (
        console.log(task),
        {
          url: "/myComments",
          method: "POST",
          body: task,
        }
      ),
      //   invalidatesTags: ["Tasks"],
    }),

    updateComment: builder.mutation({
      query: (x) => ({
        url: `/myComments/${x.id}`,
        method: "PATCH",
        body: x.updatedPost,
      }),
      //   invalidatesTags: ["Tasks"],
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/myComments/${id}`,
        method: "DELETE",
      }),
      //   invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetSingleCommentQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = apiComment;
