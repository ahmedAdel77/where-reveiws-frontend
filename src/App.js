import React, { Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Components
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Profile from "./components/Profile/profile";

// import { loadUser } from "./actions/auth";
//import setAuthToken from "./utils/setAuthToken";

//User Load
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

function App() {
  // useEffect(() => {
  //   setAuthToken(localStorage.token);
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Fragment>
          <Switch>
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route
              path="/register"
              render={(props) => <Register {...props} />}
            />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
