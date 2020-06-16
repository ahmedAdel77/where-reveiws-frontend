import React, { Fragment } from 'react';
import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createMuiTheme, CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Header from './components/header'; 
import Footer from './components/footer';

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#A64AC9',
            light: '#da7bfd',
            dark: '#741498',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#FCCD04',
            light: '#ffff52',
            dark: '#c49d00',
        },
        type: 'light',
    },
});

function App() {
    return (
        <Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Header />
                <Container maxWidth="lg">
                {/* <Switch>

                </Switch> */}
                </Container>
                <Footer/>
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
