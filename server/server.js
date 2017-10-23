let express = require('express');
let bodyParser = require('body-parser');

let app = express();

const PORT = 3001;

// Set up JSON parsing
app.use(bodyParser.json());
// Populates the req.body object with the parsed data as key-value pairs.
// The value can be a string or array because they are not extended.
app.use(bodyParser.urlencoded({ extended: false }));

// Set up routes for songs
let songs = require('./songs_router.js');
app.use('/api/songs', songs);

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})
