import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchResultPage = () => {
    const [auctionItems, setAuctionItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch auction items using the same API as in LandingPage
    useEffect(() => {
        const fetchAuctionItems = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:4000/api/search?query=oil',
                ); // Replace with your actual API endpoint
                setAuctionItems(response.data.products); // Assuming response.data is an array of auction items
                setLoading(false);
            } catch (err) {
                setError('Error fetching auction items', err);
                setLoading(false);
            }
        };

        fetchAuctionItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Empty Javascript Page</h1>

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
            <a href="/">Go to land Page</a>
        </div>
    );
};

export default SearchResultPage;
