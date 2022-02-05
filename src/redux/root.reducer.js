import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "../modules/hangman/redux";

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export default rootReducer;
