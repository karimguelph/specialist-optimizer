import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FamilyMedicineView from './pages/FamilyMedicineView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/FamilyMedicineView" component={FamilyMedicineView} />
      </Switch>
    </Router>
  );
}

export default App;
