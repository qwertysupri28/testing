const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/api/cities', async (req, res) => {
    try {
        const response = await axios.get('https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching city data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});