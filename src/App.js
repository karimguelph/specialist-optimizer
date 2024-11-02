import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FamilyMedicineView from "./pages/FamilyMedicineView";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Set Family Medicine View to render at /GPview */}
        <Route path="/GPview" element={<FamilyMedicineView />} />
        
        {/* Additional routes for other views can be added here, e.g., /specialist, /patient */}
      </Routes>
    </Router>
  );
}

export default App;
