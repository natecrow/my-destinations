import React from 'react';
import Playlist from './../components/Playlist';
import axios from 'axios';

let songs = [];

class PlaylistContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            songs
        }
    }

    componentWillMount() {
        axios.get('/api/songs')
        .then(response => {
            if (response) {
                // Map songs returned from service to our song array
                songs = response.data.map(song => {
                    return {
                        id: song.id,
                        title: song.title,
                        artist: song.artist,
                        album: song.album,
                        year: song.year,
                        genre: song.genre
                    };
                });
                this.setState({songs: songs});
            }
        })
        .catch(error => {
            console.log('Error getting songs: ' + error);
        });
    }

    render() {
        return (
            <Playlist songs={this.state.songs} />
        );
    }
}

export default PlaylistContainer;
