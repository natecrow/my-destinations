import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    }
};

const linkStyle = {
    textDecoration: 'none',
    color: 'white'
}

const NavigationBar = (classes) => (
    <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    My Destinations
                </Typography>
                <Button color="inherit">
                    <Link to='/destinations' style={ linkStyle }>View Destinations</Link>
                </Button>
                <Button color="inherit">
                    <Link to='/destinations/new' style={ linkStyle }>Add destination</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
);

NavigationBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NavigationBar);
