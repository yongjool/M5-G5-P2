import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from '../components/NavBar/NavBar';
import SearchBar from '../components/LandingPage/SearchBar/SearchBar';
import MainBody from '../components/LandingPage/MainBody/MainBody';
import Footer from '../components/Footer/Footer';

import { AuctionData } from '../types/dataTypes';

const LandingPage: React.FC = () => {
    const [auctionItems, setAuctionItems] = useState<AuctionData[] | null>(
        null,
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Make the API call using useEffect
    useEffect(() => {
        const fetchAuctionItems = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:4000/api/search?query=',
                ); // Update the API endpoint if necessary
                setAuctionItems(response.data.products); // Assuming response.data is an array of auction items
            } catch (err) {
                setError('Error fetching auction items');
            } finally {
                setLoading(false);
            }
        };

        fetchAuctionItems();
    }, []); // Empty dependency array ensures it runs only once after initial render

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    if (!auctionItems || auctionItems.length === 0) {
        return <div>No auction items available</div>;
    }

    return (
        <div>
            <Navbar />
            <SearchBar />
            <MainBody data={auctionItems} />
            <Footer />
        </div>
    );
};

export default LandingPage;
