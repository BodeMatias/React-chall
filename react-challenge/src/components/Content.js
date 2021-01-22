import React from "react";
import Error from "./Error";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedElement } from "../reducers/SelectedElementReducer";

let Content = ({ type, contentType }) => {
   const dispatch = useDispatch();
   let { data, loading, error } = useSelector((state) => state.event);

   const filteredData = () =>
      data
         .filter(
            (elem) =>
               elem.releaseYear >= 2010 && elem.programType === contentType
         )
         .sort((a, b) => (a.title > b.title ? 1 : -1))
         .slice(0, 21);

   let handleSelectElement = (element) => {
      dispatch(setSelectedElement(element));
   };

   return (
      <>
         <Header type={type} />
         {loading ? (
            <Loading />
         ) : Object.entries(error).length !== 0 ? (
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
