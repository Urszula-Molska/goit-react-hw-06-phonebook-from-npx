import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const getFilter = (state) => state.filter;

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
