import { combineReducers } from "redux";
import { reducer as moviesReducer } from "../reducers/MoviesSlice";
import { reducer as seriesReducer } from "../reducers/SeriesSlice";
import { configureStore } from "@reduxjs/toolkit";

const combinedReducer = combineReducers({
   movies: moviesReducer,
   series: seriesReducer,
});

export const store = configureStore({ reducer: combinedReducer });
