import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const checkdata=(x)=>{
  console.log(x);
  
}

export const apiAddFollowings = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  //   tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getFollowings: builder.query({
      query: () => "/followings",
      //   transformResponse: (tasks) => tasks.reverse(),
      //   providesTags: ["Tasks"],
    }),
    // getSinglePosts: builder.query({
    //   query: (id) => `/users/${id}`,
    //   //   transformResponse: (tasks) => tasks.reverse(),
    //   //   providesTags: ["Tasks"],
    // }),
    addFollowing : builder.mutation({
      query: (task) => (
        checkdata(task),
        console.log("hello"),
        console.log(task),{
        url: "/followings",
        method: "POST",
        body: task,
      }),
      //   invalidatesTags: ["Tasks"],
 
    }),

    // updatePost: builder.mutation({
    //   query: (x) => ({
    //     url: `/users/${x.id}`,
    //     method: "PATCH",
    //     body: x.updatedPost,
    //   }),
    //   //   invalidatesTags: ["Tasks"],
   
    // }),
    deleteFollowing : builder.mutation({
      query: (id) => ({
        url: `/followings/${id}`,
        method: "DELETE",
      }),
      //   invalidatesTags: ["Tasks"],
   
    }),
  }),
});

export const {
  useGetFollowingsQuery,
  useAddFollowingMutation,
  useDeleteFollowingMutation,
} = apiAddFollowings ;