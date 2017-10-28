let axios = require('axios');
let express = require('express');
let router = express.Router();

const PLAYLIST_SERVICE_URL = 'http://localhost:8080';

// Get all songs
router.get('/', (req, res) => {

    const playlistUrl = PLAYLIST_SERVICE_URL + '/songs';

    return new Promise(() => {
        axios.get(playlistUrl).then((response) => {
            res.send(response.data);
        }).catch(error => {
            res.send(error);
        })
    });
});

// Create a song
router.post('/', (req, res) => {

    const playlistUrl = PLAYLIST_SERVICE_URL + '/songs';

    // TODO fields validation

    return new Promise(() => {
        axios.post(playlistUrl, req.body).then((response) => {
            res.send(response.data);
        }).catch(error => {
            res.send(error);
        })
    });
});

// set router to be the object returned from a require() call
module.exports = router;
