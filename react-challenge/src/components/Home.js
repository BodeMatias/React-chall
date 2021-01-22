import { React } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

let Home = ({ type }) => {
   return (
      <>
         <Header type={type} />
         <div className="home-content">
            <div className="tiles">
               <Link className="series-tile" to="/series">
                  SERIES
               </Link>
               <Link className="movies-tile" to="/movies">
                  MOVIES
               </Link>
            </div>
         </div>
         <Footer />
      </>
   )
}
export default Home
