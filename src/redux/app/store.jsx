import { configureStore } from "@reduxjs/toolkit";
import otherUserProfileSliceOne from "../features/otherUserProfilesSlices/otherUserProfileSliceOne";
import { apiCreatePost } from "../features/apiSlices/createPostSlice";
import { apiAddFollowings } from "../features/apiSlices/addFollowingSlice";
import { apiComment } from "../features/apiSlices/myCommentSlice";
import myFollowingSlice from "../features/myFollowingSlice/myFollowingSliice";

export const store = configureStore({
  reducer: {
    storeSliceThree: otherUserProfileSliceOne,
    storeSliceFour: myFollowingSlice,
    // [apiComment.reducerPath]: apiComment.reducer,
    [apiCreatePost.reducerPath]: apiCreatePost.reducer,
    // [apiAddFollowings.reducerPath]: apiAddFollowings.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    // apiComment.middleware,
    apiCreatePost.middleware,
    // apiAddFollowings.middleware,
  ],
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   apiAddFollowings.middleware,
  // ],
});
