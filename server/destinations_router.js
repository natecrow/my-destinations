let axios = require('axios');
let express = require('express');
let router = express.Router();

const DESTINATIONS_SERVICE_URL = 'http://localhost:8080';

// Get all destinations
router.get('/', (req, res) => {

    const destinationsUrl = DESTINATIONS_SERVICE_URL + '/destinations';

    axios.get(destinationsUrl)
        .then((response) => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});

// Create a destination
router.post('/', (req, res) => {

    const destinationsUrl = DESTINATIONS_SERVICE_URL + '/destinations';

    axios.post(destinationsUrl, req.body)
        .then((response) => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});

// set router to be the object returned from a require() call
module.exports = router;
