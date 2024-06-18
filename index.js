const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace 'YOUR_API_KEY' with your actual API key from API Ninjas
const API_KEY = 'Ot28mMZlv6k4ttzYvKAA0Q==gsjSjZUAsL2qGe3O';
const BASE_URL = 'https://api.api-ninjas.com/v1/historicalevents';

// Endpoint to fetch historical events
app.get('/historicalevents', async (req, res) => {
    const textQuery = req.query.text;

    if (!textQuery) {
        return res.status(400).json({ error: 'Text query is required' });
    }

    try {
        const response = await axios.get(BASE_URL, {
            params: { text: textQuery },
            headers: {
                'X-Api-Key': API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching historical events' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
