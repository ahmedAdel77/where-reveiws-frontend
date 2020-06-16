import React, { Fragment } from 'react';

import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
    BottomNavigation,
    BottomNavigationAction,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
    },
    upper: {
        backgroundColor: '#DADADA',
    },
    bottom: {
        backgroundColor: '#BDBDBD',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
    },
}));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BottomNavigation
                color="primary"
                value="Recents"
                onChange={(event, newValue) => {
                    // setValue(newValue);
                }}
                showLabels
                className={classes.upper}
            >
                <BottomNavigationAction
                    label="Home"
                    // component={Link}
                    // to="/"
                    // onClick={() => props.onPageChange(1)}
                />
                <BottomNavigationAction label="About" />
                <BottomNavigationAction label="Contact" />
            </BottomNavigation>

            <BottomNavigation
                color="primary"
                value="Recents"
                onChange={(event, newValue) => {
                    // setValue(newValue);
                }}
                showLabels
                className={classes.bottom}
            >
                <Typography>All rights reseved ©</Typography>
            </BottomNavigation>
        </div>
    );
};

export default Footer;
