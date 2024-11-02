import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FamilyMedicineView from './pages/FamilyMedicineView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FamilyMedicineView" element={<FamilyMedicineView />} />
        {/* Fallback route for 404 */}
        <Route path="*" element={<div style={{ padding: "20px", textAlign: "center" }}>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
