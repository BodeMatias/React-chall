import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../redux-store/thunk";

const initialState = {
   series: [],
   loading: false,
   error: null,
   selectedSerie: undefined,
};

const SeriesSlice = createSlice({
   name: "series",
   initialState,
   reducers: {
      setSeries(state, action) {
         state.series = action.payload.series;
      },
      setSelectedSerie(state, action) {
         state.selectedSerie = action.payload.selectedElement;
      },
   },
   extraReducers: {
      [fetchData.pending]: (state) => {
         state.loading = true;
      },
      [fetchData.fulfilled]: (state, action) => {
         state.loading = false;
         state.series = action.payload.series;
      },
      [fetchData.rejected]: (state, action) => {
         state.loading = false;
         state.error = action.error.message;
      },
   },
});

const { actions, reducer } = SeriesSlice;

export const { setSeries, setSelectedSerie } = actions;

export { reducer };
