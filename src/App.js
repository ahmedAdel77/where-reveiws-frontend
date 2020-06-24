import React, { Component, Fragment, useState } from 'react';
import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import './App.scss';
import './App.css';
import './sass/main.scss';

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

//Components
import Authentication from './components/Authentication/Authentication';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Profile from './components/Profile/profile';

class App extends Component {
    state = {
        places: [],
    };

    async componentDidMount() {
        // var {data}=await axios.get(process.env.REACT_APP_BACKEND_URL+"/Restraunts")

        // const { match: { params } } = this.props;
        // var { data } = await axios.get(`http://localhost:3000/places/${params.place}`);
        console.log('[ComponentDidMount] ', window.location.pathname);
        var { data } = await axios.get(
            `http://localhost:3000${window.location.pathname}`
        );
        console.log(data.places);
        this.setState({
            places: data.places,
            PageNo: data.response?.pages,
            PageCount: data.response?.pagesCount,
            activePage: 1,
            pageSize: 6,
        });
        /// console.log(this.state.places)
    }
    // function App() {
    // const [places, setPlaces] = useState([]);
    render() {
        console.log('[APP] ', typeof window.location.pathname);
        return (
            <Fragment>
                <Router>
                    <ToastContainer />

                    {/* {window.location.pathname == '/register' ||
                    window.location.pathname == '/login' ? (
                        ''
                    ) : (
                        <Header />
                    )} */}

                    {/* <Container className="mt-5 mb-5"> */}

                    <Switch>
                        <Route
                            path="/login"
                            render={(props) => <Login {...props} />}
                        />
                        <Route
                            path="/register"
                            render={(props) => <Register {...props} />}
                        />
                        <Route path="/profile" component={Profile} />
                        <Route path="/Auth" component={Authentication} />
                        <Route path="/" component={Home} />
                    </Switch>
                    {/* </Container> */}

                    {/* {window.location.pathname == '/register' ||
                    window.location.pathname == '/login' ? (
                        ''
                    ) : (
                        <Footer />
                    )} */}
                </Router>
            </Fragment>
        );
    }
}

export default App;
