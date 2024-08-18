import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiComment = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3007" }),
  //   tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "/comTest",
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
          url: "/comTest",
          method: "POST",
          body: task,
        }
      ),
    }),

    updateComment: builder.mutation({
      query: (x) => ({
        url: `/comTest/${x.user_id}`,
        method: "PATCH",
        body: x.updatedPost,
      }),
    }),

    // deleteComment: builder.mutation({
    //   query: (id) => ({
    //     url: `/myComments/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetSingleCommentQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = apiComment;
