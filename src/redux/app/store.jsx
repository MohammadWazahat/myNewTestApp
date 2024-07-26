import { configureStore } from "@reduxjs/toolkit";
import secondSlice from "../features/secondSlice/secondSlice";
import firstSlice from "../features/firstSlice/firstSlice";
import otherUserProfileSliceOne from "../features/otherUserProfilesSlices/otherUserProfileSliceOne";
import { apiCreatePost } from "../features/apiSlices/createPostSlice";
import { apiAddFollowings } from "../features/apiSlices/addFollowingSlice";

export const store = configureStore({
  reducer: {
    storeSliceOne: firstSlice,
    storeSliceTwo: secondSlice,
    storeSliceThree: otherUserProfileSliceOne,
    [apiCreatePost.reducerPath]: apiCreatePost.reducer,
    // [apiAddFollowings.reducerPath]: apiAddFollowings.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiCreatePost.middleware,
    // apiAddFollowings.middleware,
  ],
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   apiAddFollowings.middleware,
  // ],
});
