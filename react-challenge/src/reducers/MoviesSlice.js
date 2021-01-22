import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../redux-store/thunk";

const initialState = {
   movies: [],
   loading: false,
   error: null,
   selectedMovie: undefined,
};

const MoviesSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {
      setMovies(state, action) {
         state.movies = action.payload.movies;
      },
      setSelectedMovie(state, action) {
         state.selectedMovie = action.payload.selectedElement;
      },
   },
   extraReducers: {
      [fetchData.pending]: (state) => {
         state.loading = true;
      },
      [fetchData.fulfilled]: (state, action) => {
         state.loading = false;
         state.movies = action.payload.movies;
      },
      [fetchData.rejected]: (state, action) => {
         state.loading = false;
         state.error = action.error.message;
      },
   },
});

const { actions, reducer } = MoviesSlice;

export const { setMovies, setSelectedMovie } = actions;

export { reducer };
