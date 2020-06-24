//#region Material UI

/*************************************/
// Material UI
/*************************************/

// import React, { Fragment } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
// import Navbar from './navbar';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//         textAlign: 'center',
//         fontFamily: 'Pacifico , cursive',
//         color: '#fff',
//         // '&::after': {
//         //     fontSize: '16px',
//         //     fontWeight: '200',
//         //     content: ' " Decide where to be entertained"',
//         // },
//     },
// }));

// const Header = (props) => {
//     const classes = useStyles();
//     return (
//         <Fragment>
//             <AppBar position="static" color="primary">
//                 <Toolbar>
//                     <Typography variant="h5" className={classes.title}>
//                         Where 🤔
//                     </Typography>
//                 </Toolbar>
//                 <Navbar />
//             </AppBar>
//         </Fragment>
//     );
// };

// export default Header;
//#endregion

//////////////////////////////////////////////////////////////////////////////////////////

/*************************************/
// React Booststrap
/*************************************/

import React, { Fragment, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import {
    Navbar as ReactNavbar,
    Button,
    Row,
    Column,
    Col,
    NavDropdown,
    Form,
    FormControl,
    Container,
    Nav,
} from 'react-bootstrap';
import Navbar from './navbar';

const Header = (props) => {
    const [query, setQuery] = useState('');

    return (
        <Fragment>
            <ReactNavbar
                // bg="light"
                variant="light"
                bsPrefix="no"
                className="nav-header"
                style={{ backgroundColor: '#fff' }}
            >
                <Row lg={3}>
                    <Col></Col>
                    <Col>
                        <ReactNavbar.Brand
                            as={NavLink}
                            to="/"
                            className="nav-brand"
                        >
                            <span className="nav-brand__text">Where</span>
                        </ReactNavbar.Brand>
                    </Col>
                    <Col>
                        <div>
                            <Link to="/login">
                                <Button variant="primary" className="mr-1">
                                    Sign in
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="outline-primary">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </ReactNavbar>
            <Navbar />
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                fill
                className="navbar"
                as="nav"
                navbar
                bsPrefix="nav"
                bg="light"
                style={{ backgroundColor: '#fff' }}
                className="mt-3"
            >
                <Container className="d-flex flex-row justify-content-center pb-4">
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 search-field"
                            as={'input'}
                            value={query}
                            onChange={({ target }) => setQuery(target.value)}
                            // style={{ width: '130px' }}
                        />
                        <Button
                            variant="outline-primary"
                            onClick={() => alert(query)}
                        >
                            Search
                        </Button>
                    </Form>
                </Container>
            </Nav>
        </Fragment>
    );
};

export default Header;
