import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Places from "./ListingPlaces";
import Details from "./details";
import WriteReview from "./writeReview";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
// import '../sass/main.scss';

import "@fortawesome/fontawesome-free/css/fontawesome.css";

import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import Authentication from "./Authentication/Authentication";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Profile from "./Profile/profile";

class MyAPP extends Component {
  state = {
    places: [],
  };
  async componentDidMount() {
    // var {data}=await axios.get(process.env.REACT_APP_BACKEND_URL+"/Restraunts")

    // const { match: { params } } = this.props;
    // var { data } = await axios.get(`http://localhost:3000/places/${params.place}`);
    console.log(window.location.pathname);
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

  handlePageChange = (page) => {
    this.setState({ activePage: page });
  };

  render() {
    console.log("lllll", this.state);
    return (
      <React.Fragment>
        <Router>
          {/* <Places></Places> */}
          <Switch>
            <Route
              path="/places/:place"
              render={(props) => (
                <Places
                  {...props}
                  places={this.state?.places}
                  PageNo={this.state?.PageNo}
                  pageChange={this.handlePageChange}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                />
              )}
            />
            <Route
              path="/detail/:id"
              render={(props) => (
                <Details {...props} places={this.state?.places} />
              )}
            />
            <Route
              path="/reviews"
              render={(props) => (
                <WriteReview {...props} places={this.state?.places} />
              )}
            />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route
              path="/register"
              render={(props) => <Register {...props} />}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/Auth" component={Authentication} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default MyAPP;
