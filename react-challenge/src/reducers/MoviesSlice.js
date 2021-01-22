import { createSlice } from "@reduxjs/toolkit";

const initialState = { movies: [], selectedMovie: undefined };

const MoviesSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {
      setMovies(state, action) {
         state.movies = action.payload.movies;
      },
      setSelectedMovie(state, action) {
         state.selectedMovie = action.payload.selectedMovie;
      },
   },
});

const { actions, reducer } = MoviesSlice;

export const { setMovies, setSelectedMovie } = actions;

export default reducer;
