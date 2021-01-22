import { createStore, combineReducers } from "redux";
import useRequest from "../helper/useRequest";
import movieReducer, { setMovies } from "../reducers/MoviesSlice";
import seriesReducer, { setSeries } from "../reducers/SeriesSlice";

const combinedReducer = combineReducers({
   movies: movieReducer,
   series: seriesReducer,
});

const store = createStore(
   combinedReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const getMoviesAndSeries = () => {};

export const GetMoviesAndSeriesThunkFunction = (dispatch, getState) => {
   const { data, loading, error } = useRequest(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
   );

   const { movies, series } = data.entries.reduce(
      (obj, entry) => {
         switch (entry.programType) {
            case "series":
               obj.series.push(entry);
               break;
            case "movie":
               obj.movies.push(entry);
               break;
         }
         return obj;
      },
      { movies: [], series: [] }
   );

   dispatch(setSeries({ series }));
   dispatch(setMovies({ movies }));
};

export { store };
