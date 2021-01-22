import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

let Details = ({ type }) => {
   const selectedElement = useSelector(
      (state) => state.movies.selectedMovie || state.series.selectedSerie
   );
   return (
      <>
         <Header type={type} />
         <div className="details-container">
            <div className="details-title-img">
               <span className="details-title">{selectedElement.title}</span>
               <img
                  className="details-img"
                  alt=""
                  src={selectedElement.images["Poster Art"].url}
               ></img>
            </div>
            <div className="details-description">
               <span>{selectedElement.description}</span>
            </div>
         </div>

         <Footer />
      </>
   );
};

export default Details;
