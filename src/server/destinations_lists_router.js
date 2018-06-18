let axios = require('axios');
let express = require('express');
let router = express.Router();

const DESTINATIONS_LISTS_URL = 'http://localhost:8080/destinationsLists/';

// Create a destination
router.post('/', async (req, res) => {
    try {
        const response = await axios.post(DESTINATIONS_LISTS_URL, req.body);

        if (response) {
            res.send(response.data);
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
