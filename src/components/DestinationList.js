import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

let DestinationList = ({ destinations, deleteDestination }) => (
    <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Destination</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>When to Visit</TableCell>
                    <TableCell>Website</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {destinations.map(destination =>
                    <TableRow key={destination.id}>
                        <TableCell><a href={'destinations/' + destination.id}>{destination.name}</a></TableCell>
                        {!destination.city && !destination.state &&
                            <TableCell></TableCell>
                        }
                        {destination.city && !destination.state &&
                            <TableCell>{destination.city}</TableCell>
                        }
                        {!destination.city && destination.state &&
                            <TableCell>{destination.state}</TableCell>
                        }
                        {destination.city && destination.state &&
                            <TableCell>{destination.city}, {destination.state}</TableCell>
                        }
                        <TableCell>{destination.dateToVisit}</TableCell>
                        <TableCell><a href={destination.linkToWebsite}>{destination.linkToWebsite}</a></TableCell>
                        <TableCell><Button onClick={() => deleteDestination(destination.id)}>Delete</Button></TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </Paper>
)

DestinationList.propTypes = {
    destinations: PropTypes.array,
    deleteDestination: PropTypes.func
}

export default DestinationList;
