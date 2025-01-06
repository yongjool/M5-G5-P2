import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListingPage from "./pages/ListingPage";
// ...existing code...

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/listing" element={<ListingPage />} />
        {/* ...existing routes... */}
      </Routes>
    </Router>
  );
};

export default App;
