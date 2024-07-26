import { createSlice } from "@reduxjs/toolkit";
import data from "../../../dataFiles/otherUsersProfiles.json";

const initialState = {
  value: "i am initialValue of otherUserProfileSliceOne",
  data: data,
  singleUserProfile: [],
};

export const otherUserProfileSliceOne = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    actionTypeOneotherUserProfileSliceOne: (state, action) => {
      // console.log(state.data);
      // console.log(action);
      console.log(action.payload);
      const post = state.data.filter((data) => data.user_id === action.payload);
      // console.log(post);
      return {
        ...state,
        singleUserProfile: post,
      };
    },
    actionTypeTwootherUserProfileSliceOne: (state, action) => {
      // console.log(state);
      // console.log(action);
      // console.log(action.payload);
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
  actionTypeOneotherUserProfileSliceOne,
  actionTypeTwootherUserProfileSliceOne,
} = otherUserProfileSliceOne.actions;

export default otherUserProfileSliceOne.reducer;
