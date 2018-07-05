import React from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar';
import SideMenu from '../components/SideMenu';
import ListFormDialog from '../components/ListFormDialog';
import { reset } from 'redux-form';


class MainMenuContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mobileOpen: false,
            showListFormDialog: false,
            listsOfDestinations: []
        };

        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleListFormOpen = this.handleListFormOpen.bind(this);
        this.handleListFormClose = this.handleListFormClose.bind(this);
        this.createListOfDestinations = this.createListOfDestinations.bind(this);
    }

    handleMenuToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }

    handleListFormOpen() {
        this.setState({ showListFormDialog: true });
    }

    handleListFormClose() {
        this.setState({ showListFormDialog: false });
    }

    async createListOfDestinations(values, dispatch) {
        try {
            const response = await axios.post('/api/destinationsLists', values);

            // Clear and close the form after submit succeeds
            if (response) {
                dispatch(reset('destinationsList'));
                this.handleListFormClose();
            }

            // Get all the lists again with the new one added
            this.getAllListsOfDestinations();
        } catch (error) {
            console.error('Error creating destination list: ' + error);
        }
    }

    async getAllListsOfDestinations() {
        try {
            const response = await axios.get('/api/destinationsLists');

            // Store lists from response in the state
            let listsFromResponse = response.data._embedded.destinationsLists.map(destination => {
                return {
                    id: destination.id,
                    name: destination.name
                }
            });

            // alphabetize the list of lists
            listsFromResponse = listsFromResponse.sort((a, b) => a.name > b.name);

            this.setState({ listsOfDestinations: listsFromResponse });
        } catch (error) {
            console.log('Error getting lists of destinations: ' + error);
        }
    }

    componentDidMount() {
        this.getAllListsOfDestinations();
    }

    render() {
        return (
            <div>
                <TopBar handleMenuToggle={this.handleMenuToggle} />
                <SideMenu handleMenuToggle={this.handleMenuToggle}
                    mobileOpen={this.state.mobileOpen}
                    handleListFormOpen={this.handleListFormOpen}
                    handleListFormClose={this.handleListFormClose}
                    showListFormDialog={this.state.showListFormDialog} 
                    listsOfDestinations={this.state.listsOfDestinations} />
                <ListFormDialog handleListFormClose={this.handleListFormClose}
                    showListFormDialog={this.state.showListFormDialog}
                    onSubmit={this.createListOfDestinations} />
            </div>
        )
    }
}

export default MainMenuContainer;
