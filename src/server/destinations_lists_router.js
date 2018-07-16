let axios = require('axios');
let express = require('express');
let router = express.Router();

const DESTINATIONS_LISTS_URL = 'http://localhost:8080/destinationsLists/';

// Create a list of destinations
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

// Get all lists of destinations
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(DESTINATIONS_LISTS_URL);

        if (response) {
            res.send(response.data);
        }
    } catch (error) {
        res.send(error);
    }
});

// Get a list of destinations
router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(DESTINATIONS_LISTS_URL + req.params.id);

        if (response) {
            res.send(response.data);
        }
    } catch (error) {
        res.send(error);
    }
})

// Get all destinations from a list
router.get('/:id/destinations', async (req, res) => {
    try {
        const response = await axios.get(DESTINATIONS_LISTS_URL + req.params.id + '/destinations');

        if (response) {
            res.send(response.data);
        }
    } catch (error) {
        res.send(error);
    }
})

// Delete a list
router.delete('/:id', async (req, res) => {
    try {
        const response = await axios.delete(DESTINATIONS_LISTS_URL + req.params.id);

        if (response) {
            res.send(response.data);
        }
    } catch (error) {
        res.send(error);
    }
})

// Rename a destination list
router.put('/:id', async (req, res) => {
    try {
        const response = await axios.put(DESTINATIONS_LISTS_URL + req.params.id, req.body);

        if (response) {
            res.send(response.data);
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
