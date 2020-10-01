import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import WeatherList from './containers/weather-list/weather-list';
import WeatherResult from './containers/weather-result/weather-result';
import WeatherSearch from './containers/weather-search/weather-search';

function App() {
  return (
    <div >
      <Router>
        <h1>Application Météo</h1>
        <Link to="/">Recherche</Link>
        <Link to="/list">List</Link>

        <Switch>
          <Route path="/list">
            <WeatherList />
          </Route>
          <Route path="/">
            <WeatherSearch />
            <WeatherResult />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
