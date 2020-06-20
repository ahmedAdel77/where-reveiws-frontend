import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Redux 
import { Provider } from 'react-redux';
import store from './store';

//Components 
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';




function App() {
    return (
        <Provider store={store}>
            
        <Router>

        <Fragment>
            <Switch>

             <Route path="/login" component={Login}/>
             <Route path="/register" component={Register}/>


            </Switch>
        </Fragment>

        </Router>

        </Provider>
    );
}

export default App;
