import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GPview from './pages/GPview';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/GPview" component={GPview} />
      </Switch>
    </Router>
  );
}

export default App;
