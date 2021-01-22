import { createSlice } from "@reduxjs/toolkit";

let initialState = { data: [], loading: false, error: {} };

let EventSlice = createSlice({
   name: "event",
   initialState,
   reducers: {
      setElements(state, action) {
         state.data = action.payload.data.entries;
         state.loading = action.payload.loading;
         state.error = action.payload.error;
      },
   },
});

let { actions, reducer } = EventSlice;

export let { setElements } = actions;
export { reducer };
