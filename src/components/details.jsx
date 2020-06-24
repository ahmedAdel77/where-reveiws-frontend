import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DetailsHeader from "./details-header";
import DetailsBody from "./details-body";
import Reviews from "./reviews";
import WriteReview from "./writeReview";
import axios from "axios";

class Details extends Component {
  state = {
    reviews: [],
    place : {}
  };
  async componentDidMount() {
    console.log('[Details]');
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data }));
      

      fetch(`http://localhost:3000/detail/${this.props.match.params.id}`)
        .then((res) => res.json())
        .then((data) =>{ console.log(data);this.setState({ place: data.place })});
  

  // var { data } = await axios.get(`http://localhost:3000/detail/${this.props.match.params.id}`);
  // // console.log(await data)
  // this.setState({ place: data.place });
  
  // fetch("http://localhost:3000/reviews")
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ reviews: data }));

    //   fetch("http://localhost:3000/detail/:id")
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ place: data }
    //     ));
    
  }
  render() {
    console.log(this.props)
    return (

      <React.Fragment>
        <Container className="my-5"></Container>
        <DetailsHeader reviews={this.state.reviews}  place={this.state.place} />
        <div className="my-4"></div>
        <DetailsBody reviews={this.state.reviews} place={this.state.place}/>
        <div className="my-4"></div>
        <Reviews reviews={this.state.reviews} place={this.state.place}/>
        <div className="my-4"></div>
      </React.Fragment>
    );
  }
}

export default Details;
