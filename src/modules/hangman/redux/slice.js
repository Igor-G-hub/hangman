import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  data: null,
  errors: 0,
  initialTime: null,
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
      state.errors = action.payload;
    },
    setInitialTime: (state, action) => {
      state.initialTime = action.payload;
    },
  },
});

export const { setName, setData, setError, setInitialTime } = appSlice.actions;
