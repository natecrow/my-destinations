import React from 'react';
import DestinationList from './../components/DestinationList';
import axios from 'axios';

let destinations = [];

class DestinationListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            destinations
        }
    }

    componentWillMount() {
        axios.get('/api/destinations')
        .then(response => {
            if (response) {
                // Store destinations from backend in the state
                destinations = response.data.map(destination => {
                    return {
                        id: destination.id,
                        title: destination.title,
                        artist: destination.artist,
                        album: destination.album,
                        year: destination.year,
                        genre: destination.genre
                    };
                });
                this.setState({destinations: destinations});
            }
        })
        .catch(error => {
            console.log('Error getting destinations: ' + error);
        });
    }

    render() {
        return (
            <DestinationList destinations={this.state.destinations} />
        );
    }
}

export default DestinationListContainer;
