import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [message, setMessage] = useState('hi');

  useEffect(() => {
    // Using axios instead of fetch
    axios.get('http://localhost:4000/api/search?message=helloworld')
        .then((response) => {
            // Extract the message from the response and set it
            console.log(response.data.message);
            setMessage(response.data.message);
        })
        .catch((error) => {
            console.error("There was an error fetching the message!", error);
        });
}, []);


  return (
    <div>
        <h1>{message}</h1>
    </div>
);
}

export default App