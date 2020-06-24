import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Places from "./ListingPlaces";
import axios from "axios";
class MyAPP extends Component {
  state = {
    places: []
  };
  async componentDidMount() {
    // var {data}=await axios.get(process.env.REACT_APP_BACKEND_URL+"/Restraunts")

    // const { match: { params } } = this.props;
   // var { data } = await axios.get(`http://localhost:3000/places/${params.place}`);
   console.log(window.location.pathname)
   var { data } = await axios.get(`http://localhost:3000${window.location.pathname}`);
    console.log(data.places);
    this.setState({
      places: data.places,
      PageNo: data.response?.pages,PageCount: data.response?.pagesCount,
      activePage: 1,
      pageSize: 6,
    });
    /// console.log(this.state.places)
  }

  handlePageChange = (page) => {
    this.setState({ activePage: page });
  };

  render() {
    return (
      <React.Fragment>
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
         
        </Switch>
      </React.Fragment>
    );
  }
}
export default MyAPP;
