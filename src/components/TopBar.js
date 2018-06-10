import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        position: 'fixed',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    toolbar: theme.mixins.toolbar,
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'fixed',
        },
    }
});

const TopBar = ({ handleMenuToggle, classes }) => (
    <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenuToggle}
                className={classes.navIconHide}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
                My Destinations
            </Typography>
        </Toolbar>
    </AppBar>
);

TopBar.propTypes = {
    handleMenuToggle: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TopBar);
