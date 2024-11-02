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
        <Route path="*">
          <div style={{ padding: "20px", textAlign: "center" }}>404 - Page Not Found</div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
