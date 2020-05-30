import React from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import FilmInfo from "./components/FilmInfo";
import FilmList from "./components/FilmList";

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path="/" exact component={FilmList} />
          <Route path="/:filmid" exact component={FilmInfo} />
           <Redirect to="/" />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
 

const AppContainer = styled.div`

width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

`