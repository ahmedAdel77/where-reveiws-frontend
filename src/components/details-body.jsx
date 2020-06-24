import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import Icofont from "react-icofont";

class DetailsBody extends Component {
  state = {
    rating: 0,
  };
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col className="px-0 " md="4" sm="12">
              <div className="details-card mr-lg-2 mx-sm-0 my-sm-1">
                <h5 className="card-title">Rating & Reviews </h5>
                <Row>
                  <Col xs="2">
    <h5 className="text-center">
      {/* { Math.round((this.props.place.Reviewers.reviews.reduce((m , curr) => m+Number(curr.reviewRate),0) /Math.ceil(this.props.place.Reviewers.reviews.length))*10)/10 ||1
                } */}
                                rating={ this.props.place.ratingCount}

                
                </h5>
                  </Col>
                  <Col xs="10">
                  <StarRatings
                          // rating={ this.props.place.Reviewers.reviews.reduce((m , curr) => m+Number(curr.reviewRate),0) /Math.ceil(this.props.place.Reviewers.reviews.length) ||1
                          // }
                          rating={ this.props.place.ratingCount}

                          starRatedColor="green"
                         // changeRating={this.changeRating}
                          numberOfStars={5}
                          name="rating"
                          starDimension="50"
                          starSpacing="0px"
                          svgIconPath="
                      M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625
                    "
                        />
                  </Col>
                </Row>
                
                <br/>
                {/* <h6 >{this.props.reviews.length} Reviews</h6> */}
              </div>
            </Col>
            <Col className="px-0 " md="4" sm="12">
              <div className="details-card mx-lg-2 mx-sm-0 my-sm-1">
                <h5 className="card-title">Details</h5>
                <h6>About</h6>
                <small>
                  {this.props.place.About}
                </small>
                <br />
                <br />
                <h6>Price range</h6>
                        <span>{this.props.minPrice}</span>
                <span>-{this.props.maxPrice}</span>
              </div>
            </Col>
            <Col className="px-0 " md="4" sm="12">
              <div className="details-card ml-lg-2 mx-sm-0 my-sm-1">
                <h5 className="card-title">Location and contact</h5>
                <Row>
                  <Col xs="3">
                    {" "}
                    <Icofont icon="location-pin" size="1" />
                  </Col>
                        <Col xs="9">{this.props.place.location}</Col>
                  <br />
                  <br />
                  <Col xs="3">
                    <Icofont icon="laptop-alt" size="1" />
                  </Col>
                  <Col xs="9">
                    <a href="_blank">Website</a>
                  </Col>
                  <br />
                  <br />
                  <Col xs="3">
                    <Icofont icon="ui-call" size="1" />
                  </Col>
                  <Col xs="9">+20 127 903 3338</Col>
                  <br />
                  <br />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default DetailsBody;
