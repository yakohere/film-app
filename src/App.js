import React from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import FilmList from "./components/FilmList"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FilmList} />
      </Switch>
    </Router>
  );
}

export default App;
 