let axios = require('axios');
let express = require('express');
let router = express.Router();

const DESTINATIONS_URL = 'http://localhost:8080/destinations/';

// Create a destination
router.post('/', (req, res) => {
    axios.post(DESTINATIONS_URL, req.body)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});

// Get all destinations
router.get('/', (req, res) => {
    axios.get(DESTINATIONS_URL)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});

// Get a destination by ID
router.get('/:id', (req, res) => {
    axios.get(DESTINATIONS_URL + req.params.id)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});

// set router to be the object returned from a require() call
module.exports = router;
