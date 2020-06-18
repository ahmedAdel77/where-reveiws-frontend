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
