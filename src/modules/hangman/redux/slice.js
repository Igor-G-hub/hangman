import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  data: null,
  errors: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.errors = state.errors + 1;
    },
  },
});

export const { setName, setData, setError } = appSlice.actions;
