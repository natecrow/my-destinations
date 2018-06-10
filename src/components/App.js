import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MainMenuContainer from '../containers/MainMenuContainer';
import DestinationFormContainer from '../containers/DestinationFormContainer';
import DestinationListContainer from '../containers/DestinationListContainer';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        marginTop: '4rem',
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            marginLeft: drawerWidth
        },
    },
});

const App = ({ classes }) => (
    <div className={classes.root}>
        <MainMenuContainer />
        <main className={classes.content}>
            <Switch>
                <Route exact path='/' component={DestinationListContainer} />
                <Route exact path='/destinations' component={DestinationListContainer} />
                <Route exact path='/destinations/new' component={DestinationFormContainer} />
                <Route exact path='/destinations/:id([0-9]*)' component={DestinationFormContainer} />
            </Switch>
        </main>
    </div >
);

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
