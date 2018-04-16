import React from 'react';
import { PropTypes } from 'prop-types';

let DestinationList = ({ destinations }) => (
    <table>
        <thead>
            <tr>
                <th>Destination</th>
                <th>Location</th>
                <th>When to Visit</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {destinations.map(destination =>
                <tr key={destination.id}>
                    <td><a href={'destinations/' + destination.id}>{destination.name}</a></td>
                    <td>{destination.city}, {destination.state}</td>
                    <td>{destination.dateTimeToVisit}</td>
                    <td>{destination.linkToWebsite}</td>
                </tr>
            )}
        </tbody>
    </table>
)

DestinationList.propTypes = {
    destinations: PropTypes.any
}

export default DestinationList;
