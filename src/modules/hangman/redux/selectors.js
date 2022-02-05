import { createSelector } from "@reduxjs/toolkit";

export const appSelector = (state) => state.app;

export const dataSelector = createSelector(appSelector, (app) => app.data);
export const errorSelector = createSelector(appSelector, (app) => app.errors);
