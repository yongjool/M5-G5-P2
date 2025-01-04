import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from '../components/NavBar/NavBar';
import SearchBar from '../components/LandingPage/SearchBar/SearchBar';
import MainBody from '../components/LandingPage/MainBody/MainBody';

// Define the type of the response data (you can adjust this based on your API response structure)
interface AuctionItem {
    _id: string;
    title: string;
    description: string;
    start_price: number;
}

const LandingPage: React.FC = () => {
    const [auctionItems, setAuctionItems] = useState<AuctionItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Make the API call using useEffect
    useEffect(() => {
        const fetchAuctionItems = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:4000/api/search?query=lamp',
                ); // Update the API endpoint if necessary
                setAuctionItems(response.data.products); // Assuming response.data is an array of auction items
                setLoading(false);
            } catch (err) {
                setError('Error fetching auction items');
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

    return (
        <div>
            <Navbar />
            <SearchBar />
            <MainBody />
            <h1>Empty Typescript Page</h1>

            <div>
                {auctionItems.length > 0 ? (
                    auctionItems.map((item) => (
                        <div key={item._id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Starting Price: ${item.start_price}</p>
                        </div>
                    ))
                ) : (
                    <p>No auction items available at the moment.</p>
                )}
            </div>
            <a href="/search">Go to search Page</a>
        </div>
    );
};

export default LandingPage;
