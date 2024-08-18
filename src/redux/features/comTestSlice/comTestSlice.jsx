import { createSlice } from "@reduxjs/toolkit";
import data from "../../../dataFiles/comTest.json";

const initialState = {
  value: "i am initialValue of comTestSlice",
  data: data,
  myComments: [],
};

// console.log(initialState);

export const comTestSlice = createSlice({
  name: "comTestSlice",
  initialState,
  reducers: {
    comTestSliceOne: (state, action) => {
      console.log(state);
      console.log(action);
      console.log(action.payload);

    },

    comTestSliceTwo: (state, action) => {
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
export const { comTestSliceOne, comTestSliceTwo } = comTestSlice.actions;

export default comTestSlice.reducer;
