import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // TypeScript
import ListingPage from './pages/ListingPage';
import SearchResultPage from './pages/SearchResultPage'; // JavaScript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
         <Router>
             <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/search" element={<SearchResultPage />} />
                <Route path="/listing/:id" element={<ListingPage />} />

                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;
