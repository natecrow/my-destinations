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
            showListFormDialog: false
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
                this.setState({
                    showListFormDialog: false
                });
            }

        } catch (error) {
            console.error('Error creating destination list: ' + error);
        }
    }

    render() {
        return (
            <div>
                <TopBar handleMenuToggle={this.handleMenuToggle} />
                <SideMenu handleMenuToggle={this.handleMenuToggle}
                    mobileOpen={this.state.mobileOpen}
                    handleListFormOpen={this.handleListFormOpen}
                    handleListFormClose={this.handleListFormClose}
                    showListFormDialog={this.state.showListFormDialog} />
                <ListFormDialog handleListFormClose={this.handleListFormClose}
                    showListFormDialog={this.state.showListFormDialog}
                    onSubmit={this.createListOfDestinations} />
            </div>
        )
    }
}

export default MainMenuContainer;
