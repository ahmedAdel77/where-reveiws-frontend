//#region Material UI
// import React, { Fragment } from 'react';

// import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
// import {
//     BottomNavigation,
//     BottomNavigationAction,
//     Typography,
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         width: '100%',
//     },
//     upper: {
//         backgroundColor: '#DADADA',
//     },
//     bottom: {
//         backgroundColor: '#BDBDBD',
//         height: '30px',
//         display: 'flex',
//         alignItems: 'center',
//     },
// }));

// const Footer = (props) => {
//     const classNamees = useStyles();

//     return (
//         <div classNameName={classNamees.root}>
//             <BottomNavigation
//                 color="primary"
//                 value="Recents"
//                 onChange={(event, newValue) => {
//                     // setValue(newValue);
//                 }}
//                 showLabels
//                 classNameName={classNamees.upper}
//             >
//                 <BottomNavigationAction
//                     label="Home"
//                     // component={Link}
//                     // to="/"
//                     // onClick={() => props.onPageChange(1)}
//                 />
//                 <BottomNavigationAction label="About" />
//                 <BottomNavigationAction label="Contact" />
//             </BottomNavigation>

//             <BottomNavigation
//                 color="primary"
//                 value="Recents"
//                 onChange={(event, newValue) => {
//                     // setValue(newValue);
//                 }}
//                 showLabels
//                 classNameName={classNamees.bottom}
//             >
//                 <Typography>All rights reseved ©</Typography>
//             </BottomNavigation>
//         </Col>
//     );
// };

// export default Footer;
//#endregion

//#region React-Bootstrap
import React, { Fragment } from 'react';

import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';
import {
    Navbar as ReactNavbar,
    Button,
    Container,
    Row,
    Column,
    Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faFacebookF,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <footer
            className="py-5 haha"
            style={{
                position: 'relative',
                bottom: '0',
                left: '0',
                width: '100%',
                backgroundColor: '#282c34',
                color: '#FFF',
            }}
        >
            <Container>
                <Row lg={4} md={3} xs={2}>
                    <Col>
                        <span className="nav-brand__text">Where</span>
                        <small className="d-block mb-3 text-muted">
                            &copy; 2020 Where
                            <br />
                            All Rights Reserved.
                        </small>
                    </Col>
                    <Col>
                        <h4>Categories</h4>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a className="text-muted" href="#">
                                    Cinemas
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Theatres
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Touristical Places
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Funfairs
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Parks
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Malls
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Gyms
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Beaches
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>About</h4>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a className="text-muted" href="#">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Locations
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a className="text-muted" href="#">
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        className="mr-1"
                                    />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="mr-1"
                                    />
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="mr-1"
                                    />
                                    Instagram
                                </a>
                            </li>

                            <li>
                                <a className="text-muted" href="#">
                                    <FontAwesomeIcon
                                        icon={faRss}
                                        className="mr-1"
                                    />
                                    RSS
                                </a>
                            </li>
                        </ul>
                    </Col>
                    {/* <Col>
                        <h4>Resources</h4>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a className="text-muted" href="#">
                                    Resource
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Resource name
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Another resource
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="#">
                                    Final resource
                                </a>
                            </li>
                        </ul>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
//#endregion
