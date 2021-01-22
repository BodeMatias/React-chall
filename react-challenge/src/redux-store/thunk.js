import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
   const response = await axios(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
   );
   const data = response.data.entries;

   const { movies, series } = data.reduce(
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
   return { movies, series };
});
