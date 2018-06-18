import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import SideMenuList from './SideMenuList';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'fixed',
        },
    }
});

const SideMenu = ({ classes, theme, handleMenuToggle, mobileOpen, handleListFormOpen, handleListFormClose, showListFormDialog }) => (
    <div>
        <Hidden mdUp>
            <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleMenuToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <SideMenuList handleListFormOpen={handleListFormOpen}
                            handleListFormClose={handleListFormClose}
                            listFormOpen={showListFormDialog} />
            </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
            <Drawer
                variant="permanent"
                open
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <SideMenuList handleListFormOpen={handleListFormOpen}
                            handleListFormClose={handleListFormClose}
                            showListFormDialog={showListFormDialog} />
            </Drawer>
        </Hidden>
    </div>
);

SideMenu.propTypes = {
    handleMenuToggle: PropTypes.func.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
    handleListFormOpen: PropTypes.func.isRequired,
    handleListFormClose: PropTypes.func.isRequired,
    showListFormDialog: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideMenu);
