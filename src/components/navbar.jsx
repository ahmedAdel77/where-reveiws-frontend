//#region Material UI
// import React, { Fragment } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, AppBar, Toolbar, Link, Button } from '@material-ui/core';

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
//         color: '#000',
//     },
//     navLinks: {
//         display: 'flex',
//         justifyContent: 'center',
//         fontFamily: 'Roboto, sans-serif',
//     },
//     navLinkItem: {
//         marginRight: '50px',
//     },
// }));

// const Navbar = (props) => {
//     const classes = useStyles();
//     const preventDefault = (event) => event.preventDefault();

//     return (
//         <Fragment>
//             <AppBar position="static" color="secondary">
//                 <Toolbar
//                     color="secondary"
//                     variant="dense"
//                     className={classes.navLinks}
//                 >
//                     {/* <Typography> */}
//                     {/* <Link href="#" onClick={preventDefault}>
//                             Link
//                         </Link> */}
//                     <Button
//                         color="inherit"
//                         className="navLinkItem"
//                         style={{ margin: '0 50px' }}
//                     >
//                         Home
//                     </Button>
//                     <Button
//                         color="inherit"
//                         className="navLinkItem"
//                         style={{ margin: '0 50px' }}
//                     >
//                         Categories
//                     </Button>
//                     <Button
//                         color="inherit"
//                         className="navLinkItem"
//                         style={{ margin: '0 50px' }}
//                     >
//                         Contact
//                     </Button>
//                     <Button
//                         color="inherit"
//                         className="navLinkItem"
//                         style={{ margin: '0 50px' }}
//                     >
//                         About
//                     </Button>
//                     {/* </Typography> */}
//                 </Toolbar>
//             </AppBar>
//         </Fragment>
//     );
// };

// export default Navbar;
//#endregion
////////////////////////////////////////////////////////////////////////////////////////////////////////

//#region React Bootstrap
import React, { Fragment } from 'react';

import { Link, NavLink as RouterNavLink } from 'react-router-dom';

import {
    Container,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

const Navbar = (props) => {
    const preventDefault = (event) => event.preventDefault();

    return (
        <Fragment>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                fill
                className="navbar "
                as="nav"
                navbar
                bsPrefix="nav"
                // bg="light"
                style={{ backgroundColor: '#fff' }}
            >
                <Container>
                    <Nav.Item>
                        <Nav.Link as={RouterNavLink} to="/">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Categories" id="nav-dropdown">
                        <NavDropdown.Item>Restaurants</NavDropdown.Item>
                        <NavDropdown.Item>Cinemas</NavDropdown.Item>
                        <NavDropdown.Item>Theatres</NavDropdown.Item>
                        <NavDropdown.Item>Touristical Places</NavDropdown.Item>
                        <NavDropdown.Item>Funfairs</NavDropdown.Item>
                        <NavDropdown.Item>Parks</NavDropdown.Item>
                        <NavDropdown.Item>Malls</NavDropdown.Item>
                        <NavDropdown.Item>Gyms</NavDropdown.Item>
                        <NavDropdown.Item>Beaches</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>All</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2 search-field"
                                style={{ width: '130px' }}
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Nav.Item> */}
                </Container>
            </Nav>
        </Fragment>
    );
};

export default Navbar;
//#endregion
