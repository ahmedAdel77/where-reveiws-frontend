import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import Divider from "@material-ui/core/Divider";
// import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

class Reviews extends Component {
  state = {
    totalRates:0,
  };
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
  };
  
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col md="8" className="px-0 card">
              <div className="reviews-title">
                <Row className="p-3">
                  <Col md="6">
                    <h3>
                      Reviews <span className="text-muted">{this.props.place.Reviewers?.length}</span>
                    </h3>
                  </Col>
                  <Col md="6" className="text-right">
                    <Link to="/reviews">
                      <button className="btn btn-success"
                        // variant="contained"
                        // style={{ backgroundColor: "black", color: "white" }}
                      >
                        Write a review
                      </button>
                    </Link>
                  </Col>
                </Row>
                <Divider variant="middle" />
              </div>

              <div className="reviews-wrapper">
                {this.props.reviews.map(m=>
                  // r=>r.reviews.map(m=> 
                <div key={m._id}>
                <div className="card review-card mb-3">
                  <Row className="no-gutters">
                    <Col md="3" className="text-center">
                      <img
                        src={process.env.PUBLIC_URL + "/girl.jpg"}
                        className="card-img rounded-circle"
                        alt="..."
                      />
                    </Col>
                    <Col md="9">
                      <div className="card-body pl-lg-0 pl-sm-2">
                        <StarRatings
                          rating={m.rating}
                          starRatedColor="green"
                         // changeRating={this.changeRating}
                          numberOfStars={5}
                          name="rating"
                          starDimension="40"
                          starSpacing="0px"
                          svgIconPath="
                      M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625
                    "
                        />
                        <h5 className="card-title">{m.reviewTitle}</h5>
                        <p className="card-text">
                          {m.reviewComment}
                        </p>
                        <p className="card-text">
                          <span>
                            <strong>Date: </strong>
                          </span>
                          <small className="text-muted">
                            {this.props.place.Date}
                          </small>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                  <Divider variant="middle" />
                  </div>
                  // )
                  )}
                
              </div> 
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Reviews;
