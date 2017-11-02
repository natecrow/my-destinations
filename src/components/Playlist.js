import React from 'react';
import { PropTypes } from 'prop-types';

let Playlist = ({ songs }) => (
    <table>
        <thead>
            <tr>
                <th>Song title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Year</th>
                <th>Genre</th>
            </tr>
        </thead>
        <tbody>
            {songs.map(song =>
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.year}</td>
                    <td>{song.genre}</td>
                </tr>
            )}
        </tbody>
    </table>
)

Playlist.propTypes = {
    songs: PropTypes.any
}

export default Playlist;
