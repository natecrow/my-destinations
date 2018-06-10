import React from 'react';
import TopBar from '../components/TopBar';
import SideMenu from '../components/SideMenu';

class MainMenuContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mobileOpen: false
        };

        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    handleMenuToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }

    render() {
        return (
            <div>
                <TopBar handleMenuToggle={this.handleMenuToggle} mobileOpen={this.state.mobileOpen} />
                <SideMenu handleMenuToggle={this.handleMenuToggle} mobileOpen={this.state.mobileOpen} />
            </div>
        )
    }
}

export default MainMenuContainer;
