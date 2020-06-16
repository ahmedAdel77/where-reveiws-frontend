import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import Navbar from './navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontFamily: 'Pacifico , cursive',
        color: '#fff',
        // '&::after': {
        //     fontSize: '16px',
        //     fontWeight: '200',
        //     content: ' " Decide where to be entertained"',
        // },
    },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Where 🤔
                    </Typography>
                </Toolbar>
                <Navbar />
            </AppBar>
        </Fragment>
    );
};

export default Header;
