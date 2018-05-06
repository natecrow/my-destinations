import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from 'material-ui';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});

let DestinationList = ({ destinations, deleteDestination }, classes) => (
    <Paper className={classes.root}>
        <Table className={classes.table}>
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
    destinations: PropTypes.any,
    deleteDestination: PropTypes.any
}

export default withStyles(styles)(DestinationList);
