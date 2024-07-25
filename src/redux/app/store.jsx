import { configureStore } from '@reduxjs/toolkit'
import secondSlice from '../features/secondSlice/secondSlice'
import firstSlice from '../features/firstSlice/firstSlice'
import { apiCreatePost } from '../features/apiSlices/createPostSlice'

export const store = configureStore({
    
  reducer: {
    storeSliceOne : firstSlice ,
    storeSliceTwo : secondSlice ,    
    [apiCreatePost.reducerPath]: apiCreatePost.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiCreatePost.middleware,
  ],
})