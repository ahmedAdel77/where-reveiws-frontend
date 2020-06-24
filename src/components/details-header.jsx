import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import Icofont from "react-icofont";

class DetailsHeader extends Component {
  state = {};


  render() {
    return (
      <React.Fragment>
        <Container className="py-4">
    <h2>{this.props.place.placeName}</h2>
          <Row>
            <Col sm="2">
              <StarRatings
                // rating={ this.props.place.Reviewers.reviews.reduce((m , curr) => m+Number(curr.rating),0) /Math.ceil(this.props.place.Reviewers.reviews.length) ||1
                // }
                rating={ this.props.place.ratingCount}
                starRatedColor="green"
                //changeRating={this.props.place.ra}
                numberOfStars={5
                }
                name="rating"
                starDimension="40"
                starSpacing="0px"
                svgIconPath="
                      M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625
                    "
              />
            </Col>
            <Col sm="10" className="text-left">
              {/* { this.props.place.map(m=>m.Reviewers.length)} */}

              Reviews
            </Col>
          </Row>
          <Row>
            <Col sm="4"><span>
              {" "}
             <Icofont icon="location-pin" size="1" />
            </span>

            <span> {this.props.place.location}</span></Col>

            <Col sm="2"><span>
                <Icofont icon="laptop-alt" size="1" />
            </span>
            <span>
              <a href="_blank">  Website</a>
            </span></Col>

            <Col sm="3"><span>
                <Icofont icon="ui-call" size="1" />
            </span>
            <span xs="3"> +20 127 903 3338</span></Col>
          </Row>
        </Container>

        <Container className="details-header" >
          {this.props.place?.photos?.map((p)=>
          <Row className="">
            <Col xs="12" className="img-col">
              <img
                className="img-fluid"
                alt=""
                // src="/images/alcoholic-beverages-close-up-cuisine-cutlery-541216.jpg"
                src={process.env.PUBLIC_URL + "/" +p}
              />
            </Col>
            {/* <Col xs="3" sm="4" className="img-col">
              <img
                className="img-fluid"
                alt=""
                src="/images/cooked-food-in-stainless-steel-plate-2641886.jpg"
              />
            </Col> */}
            {/* <Col xs="3" sm="4" className="img-col">
              <Row>
                <Col className="img-sm-col pb-1" sm="12">
                  <img
                    className="img-fluid"
                    alt=""
                    src="/images/empty-dining-tables-and-chairs-1579739.jpg"
                  />
                </Col> */}

                
              {/* </Row> */}
            {/* </Col> */}
          </Row>)}
        </Container>
      </React.Fragment>
    );
  }
}

export default DetailsHeader;
