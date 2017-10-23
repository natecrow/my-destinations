let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('GET route on songs');
})

router.post('/', (req, res) => {
    res.send('POST route on songs');
})

// set router to be the object returned from a require() call
module.exports = router;
