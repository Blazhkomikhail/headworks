import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardField from "../components/CardField/CardField";
import Favourites from "../components/Favourites/Favourites";
import Header from '../components/Header/Header';
import './app.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/" exact component={CardField} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
    </Router>
  )
}

export default App;