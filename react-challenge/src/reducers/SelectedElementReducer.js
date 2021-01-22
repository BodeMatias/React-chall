import { createSlice } from "@reduxjs/toolkit"

let initialState = {}

let SelectedElementSlice = createSlice({
   name: "selectedElement",
   initialState,
   reducers: {
      setSelectedElement(state, action) {
         return action.payload
      },
   },
})

let { actions, reducer } = SelectedElementSlice

export let { setSelectedElement } = actions
export { reducer }
