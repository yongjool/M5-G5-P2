import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // TypeScript
import SearchResultPage from './pages/SearchResultPage'; // JavaScript

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/search" element={<SearchResultPage />} />
            </Routes>
        </Router>
    );
};

export default App;
