import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Redux 
import { Provider } from 'react-redux';
import store from './store';

//Components 
import Authentication from './components/Authentication/Authentication';




function App() {
    return (
        <Provider store={store}>
            
        <Router>

        <Fragment>
            <Switch>

             <Route path="/Auth" component={Authentication}/>


            </Switch>
        </Fragment>

        </Router>

        </Provider>
    );
}

export default App;
