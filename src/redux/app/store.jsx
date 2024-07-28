import { configureStore } from "@reduxjs/toolkit";
import secondSlice from "../features/secondSlice/secondSlice";
import firstSlice from "../features/firstSlice/firstSlice";
import otherUserProfileSliceOne from "../features/otherUserProfilesSlices/otherUserProfileSliceOne";
import { apiCreatePost } from "../features/apiSlices/createPostSlice";
import { apiAddFollowings } from "../features/apiSlices/addFollowingSlice";
import { apiComment } from "../features/apiSlices/myCommentSlice";

export const store = configureStore({
  reducer: {
    storeSliceOne: firstSlice,
    storeSliceTwo: secondSlice,
    storeSliceThree: otherUserProfileSliceOne,
    [apiComment.reducerPath]: apiComment.reducer,
    // [apiCreatePost.reducerPath]: apiCreatePost.reducer,
    // [apiAddFollowings.reducerPath]: apiAddFollowings.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiComment.middleware,
    // apiCreatePost.middleware,
    // apiAddFollowings.middleware,
  ],
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   apiAddFollowings.middleware,
  // ],
});


