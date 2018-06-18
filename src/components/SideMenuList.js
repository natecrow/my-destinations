import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    link: {
        color: '#FFFFFF',
        textDecoration: 'none'
    }
});

const SideMenuList = ({ classes, handleListFormOpen }) => (
    <div>
        <div className={classes.toolbar} />
        <Divider />
        <List component='nav'>
            <Link to='/destinations' className={classes.link}>
                <ListItem button>
                    <ListItemText primary='All Destinations' />
                </ListItem>
            </Link>
            <Link to='/destinations/new' className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary='Add destination' />
                </ListItem>
            </Link>
            <Divider />
            <ListItem button onClick={handleListFormOpen}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary='Create List' />
            </ListItem>
        </List>
        <Divider />
    </div>
);

SideMenuList.propTypes = {
    handleListFormOpen: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideMenuList);
