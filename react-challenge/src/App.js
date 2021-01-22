import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Content from "./components/Content";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Details from "./components/Details";
import { fetchData } from "./redux-store/thunk";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchData());
   });

   return (
      <Router>
         <Switch>
            <Route exact path="/movies">
               <Content type="Movies" contentType="movie" />
            </Route>
            <Route exact path="/series">
               <Content type="Series" contentType="series" />
            </Route>

            <Route exact path="/details">
               <Details />
            </Route>
            <Route exact path="/">
               <Home type="Titles" />
            </Route>
            <Route path="*">
               <Error type="Titles" />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
