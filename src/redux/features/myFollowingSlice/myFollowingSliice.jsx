import { createSlice } from "@reduxjs/toolkit";
import data from "../../../dataFiles/myFollowing.json";

const initialState = {
  value: "i am initialValue of myFollowingSlice",
  // data: data,
  myFollowings :[],
};

console.log(initialState)

export const myFollowingSlice = createSlice({
  name: "followingSlice",
  initialState,
  reducers: {
    myFollowingSliceOne: (state, action) => {
      console.log(state);
      console.log(action);
      console.log(action.payload);
      state.myFollowings = state.myFollowings + action.payload ;
      // const post = state.myFollowings.filter((data) => data.user_id === action.payload.user_id);
      // console.log(post);
      // return {
      //   ...state,
      //   myFollowings : [...state.myFollowings , action.payload],
      // };
    },
    myFollowingSliceTwo: (state, action) => {
      console.log(state);
      console.log(action);
      console.log(action.payload);
      const filteredData = data.filter((item) => {
        // console.log(item)
        return item.name.toLowerCase().includes(action.payload);
      });
      // console.log(filteredData);
      return {
        ...state,
        data: filteredData,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  myFollowingSliceOne,
  myFollowingSliceTwo,
} = myFollowingSlice.actions;

export default myFollowingSlice.reducer;