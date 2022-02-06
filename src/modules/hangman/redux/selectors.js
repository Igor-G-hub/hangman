import { createSelector } from "@reduxjs/toolkit";

export const appSelector = (state) => state.app;

export const dataSelector = createSelector(appSelector, (app) => app.data);
export const nameSelector = createSelector(appSelector, (app) => app.name);
export const errorSelector = createSelector(appSelector, (app) => app.errors);
export const initialTimeSelector = createSelector(
  appSelector,
  (app) => app.initialTime
);
