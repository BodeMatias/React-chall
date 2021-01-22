import { createSlice } from "@reduxjs/toolkit";

const initialState = { series: [], selectedSerie: undefined };

const SeriesSlice = createSlice({
   name: "series",
   initialState,
   reducers: {
      setSeries(state, action) {
         state.series = action.payload.series;
      },
      setSelectedSerie(state, action) {
         state.selectedSerie = action.payload.selectedSerie;
      },
   },
});

const { actions, reducer } = SeriesSlice;

export const { setSeries, setSelectedSerie } = actions;

export default reducer;
