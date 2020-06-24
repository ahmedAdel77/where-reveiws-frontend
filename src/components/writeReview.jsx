import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import StarRatings from "react-star-ratings";
// import Button from "@material-ui/core/Button";
import Joi from "joi-browser";
import axios from "axios";

class WriteReview extends Component {
  state = {
    post: {
      reviewTitle: "",
      review: "",
      rating: 0,
      image: "",
    },
    errors: {},
  };
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
 
  };
  schema = {
    reviewTitle: Joi.string()
      .max(50)
      .required()
      .error(() => {
        return {
          message: "Review Title is required.",
        };
      }),
    review: Joi.string()
      .max(500)
      .required()
      .error(() => {
        return {
          message: "Review is required.",
        };
      }),
    rating: Joi.number()
      .required()
      .error(() => {
        return {
          message: "Rating is required.",
        };
      }),
    image: Joi.string().allow('').optional(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //Validation :
    const errors = this.validate();
    if (errors) {
      console.log(errors);
      this.setState({ errors });
      return;
    }
    //valid  set errors empty
    this.setState({ errors: {} });
    //Call backend
    console.log("Done!");

    const newReview = {
      reviewBody: this.state.post.review,
      reviewTitle: this.state.post.reviewTitle,
      photo: this.state.post.image,
      reviewRate: this.state.rating,
    };

    axios
      .post("http://localhost:3000/reviews", newReview)
      .then((res) => console.log(res.data));

      this.setState({ post: {} });
      this.setState({ rating: {} });

      this.props.history.replace("/")
  };

  validate = () => {
    const result = Joi.validate(this.state.post, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    //No Errors
    if (result.error === null) {
      return null;
    }
    //Errors
    const errors = {};
    for (const error of result.error.details) {
      errors[error.path] = error.message;
    }
    console.log(errors);
    return errors;
  };

  validateInput = (property, name) => {
    //Sub Schema
    const schema = { [name]: this.schema[name] };
    //validate using Joi
    const { error } = Joi.validate(property, schema);
    if (error === null) return null;
    return error.details[0];
  };

  handleChange = ({ target }) => {
    console.log(this.state.post.rating);
    console.log("Handle change" + target);
    //Clone
    const post = { ...this.state.post };
    const errors = { ...this.state.errors };
    //Edit
    post[target.id] = target.value;
    //Validate {name=value} sub-Object
    const error = this.validateInput({ [target.id]: target.value }, target.id);
    if (error === null) {
      delete errors[target.id]; //3shan lw kan byktb 3'alat w ktb sa7 myfdlsh l error mwgod
    } else {
      errors[target.id] = error.message;
    }
    //Set Satate
    this.setState({ post, errors });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row >
            <Col sm="8">
              <Form className="review-form" onSubmit={this.handleSubmit}>
                <p className="text-danger error">
                  {this.state.errors.reviewTitle}
                </p>
                <p className="text-danger error">{this.state.errors.review}</p>
                <StarRatings
                  id="rating"
                  className="stars"
                  rating={this.state.rating}
                  starRatedColor="green"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="40"
                  starSpacing="0px"
                  svgIconPath="
                      M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625
                    "
                />

                {/* <p>{this.state.errors}</p> */}
                <FormGroup className="formGroup mt-3">
                  <Label for="exampleEmail">Title of your review </Label>
                  <Input
                    type="text"
                    name="reviewTitle"
                    id="reviewTitle"
                    label="reviewTitle"
                    className="review-form-input"
                    placeholder="Summarize your visit or highlight an interesting detail"
                    onChange={this.handleChange}
                    value={this.state.post.reviewTitle}
                    error={this.state.errors.reviewTitle}
                  />
                </FormGroup>
                <FormGroup className="formGroup">
                  <Label for="exampleEmail">Your review</Label>
                  <Input
                    className="review-form-input"
                    type="textarea"
                    name="review"
                    id="review"
                    rows="6"
                    placeholder="Tell people about your experience: your meal, atmosphere, service?"
                    value={this.state.post.review}
                    error={this.state.errors.review}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup className="formGroup">
                  <Label>Do you have photos to share? (optional)</Label>
                  <Input
                    className="review-form-input"
                    type="file"
                    name="image"
                    id="image"
                    value={this.state.post.image}
                    error={this.state.errors.image}
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <button
                className="btn btn-success my-5"
                  type="submit"
                  // variant="contained"
                  // style={{ backgroundColor: "black", color: "white" }}
                >
                  Submit your review
                </button>
              </Form>
            </Col>
       
       <Col sm="4" className="recent">
         {/* <h3>Recent reviews</h3> */}

       </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default WriteReview;
