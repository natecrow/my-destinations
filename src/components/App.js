import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MainMenuContainer from '../containers/MainMenuContainer';
import DestinationFormContainer from '../containers/DestinationFormContainer';
import DestinationListContainer from '../containers/DestinationListContainer';
import axios from 'axios';

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

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listDeleted: false
        };

        this.deleteList = this.deleteList.bind(this);
        this.unsetListDeleted = this.unsetListDeleted.bind(this);
    }

    async deleteList(id) {
        try {
            await axios.delete('/api/destinationsLists/' + id);

            this.setState({
                listDeleted: true
            });
        } catch (error) {
            console.log('Error deleting list of destinations with ID ' + id + ': ' + error);
        }
    }

    unsetListDeleted() {
        this.setState({
            listDeleted: false
        });
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <MainMenuContainer listDeleted={this.state.listDeleted} unsetListDeleted={this.unsetListDeleted} />
                <main className={this.props.classes.content}>
                    <Switch>
                        <Route exact path='/' component={DestinationListContainer} />
                        <Route exact path='/destinations' component={DestinationListContainer} />
                        <Route exact path='/destination-lists/:id([0-9]*)' render={props => <DestinationListContainer deleteList={this.deleteList} {...props} />} />
                        <Route exact path='/destinations/new' component={DestinationFormContainer} />
                        <Route exact path='/destinations/:id([0-9]*)' component={DestinationFormContainer} />
                    </Switch>
                </main>
            </div >
        )
    }

}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    match: PropTypes.object,
    history: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(App);
