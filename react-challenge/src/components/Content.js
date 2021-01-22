import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedMovie } from "../reducers/MoviesSlice";
import { setSelectedSerie } from "../reducers/SeriesSlice";
import Error from "./Error";
import Loading from "./Loading";

let Content = ({ type, contentType }) => {
   const dispatch = useDispatch();

   const data = useSelector((state) => {
      if (contentType === "movie") {
         return state.movies.movies;
      } else return state.series.series;
   });

   const { loading, error } = useSelector((state) => {
      if (contentType === "movie") {
         return { loading: state.movies.loading, error: state.movies.error };
      } else
         return { loading: state.series.loading, error: state.series.error };
   });

   const filteredData = () =>
      data
         .filter(
            (elem) =>
               elem.releaseYear >= 2010 && elem.programType === contentType
         )
         .sort((a, b) => (a.title > b.title ? 1 : -1))
         .slice(0, 21);

   let handleSelectElement = (element) => {
      if (contentType === "series") {
         dispatch(setSelectedSerie({ selectedElement: element }));
      } else dispatch(setSelectedMovie({ selectedElement: element }));
   };

   return (
      <>
         <Header type={type} />
         {loading ? (
            <Loading />
         ) : error ? (
            <Error />
         ) : (
            data && (
               <div className="titles-container">
                  {filteredData().map((element) => (
                     <Link
                        to="/details"
                        className="title-box"
                        onClick={() => handleSelectElement(element)}
                     >
                        <h3 className="title-name">{element.title}</h3>
                        <img
                           alt=""
                           className="title-image"
                           src={element.images["Poster Art"].url}
                        />
                     </Link>
                  ))}
               </div>
            )
         )}
         <Footer />
      </>
   );
};

export default Content;
