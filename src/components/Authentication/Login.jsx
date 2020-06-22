import React, { useState } from "react";
import Joi from "joi-browser";

import { Link } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({});
  //Destraction
  const { email, password } = formData;

  const schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Email"),
    password: Joi.string().required().min(4).label("Password"),
    password2: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .options({
        language: {
          any: {
            allowOnly: " do not match",
          },
        },
      }),
  };

  //HandelChange
  const onChange = ({ target }) => {
    const data = { ...formData };
    const errors = { ...formError };

    data[target.id] = target.value;

    const error = validateInput({ [target.id]: target.value }, target.id);
    if (error === null) {
      delete errors[target.id];
    } else {
      errors[target.id] = error.message;
    }

    // setFormData({ ...formData, [target.name]: target.value });
    setFormData({ ...data });
    setFormError({ ...errors });
  };

  //HandelOnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    //Validation :
    const errors = validate();
    // const errors = {error1: 'ERR01'};
    console.log(validate());

    if (errors) {
      setFormError(errors);
      return;
    } else {
      //valid
      setFormError({});
      //   register({ name, email, password });
      console.log(formData);
      console.log(formError);
    }
  };

  const validateInput = (property, name) => {
    //Sub Schema
    const subSchema = { [name]: schema[name] };
    //validate using Joi
    const { error } = Joi.validate(property, subSchema);
    if (error === null) return null;
    return error.details[0];
  };

  const validate = () => {
    const result = Joi.validate(formData, schema, {
      abortEarly: false,
    });
    //No Errors
    if (result.error === null) {
      return null;
    }
    //Errors
    let errors = {};
    for (const error of result.error.details) {
      errors[error.path] = error.message;
    }

    return errors;
  };

  //////////////////////////////////////////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <div className="AuthContainer">
        <Container fluid>
          <h5
            style={{
              textAlign: "left",
              paddingLeft: "50px",
              fontWeight: "600",
            }}
          >
            W H E R E{" "}
            {/* <span style={{ color: "#ffc107", fontWeight: "bold" }}>?</span> */}
          </h5>
          <Row>
            <Col md={4}>
              <div className="AuthPic">
                <img src="img/Auth.jpg" alt="AuthPic" />
              </div>
            </Col>
            <Col md={8}>
              <Form className="AuthForm" onSubmit={(e) => onSubmit(e)}>
                <div className="Authwelcome">
                  <h2>Hello ,Welcome Back ! </h2>
                  <p>Please Login To Your Account</p>
                </div>
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  {formError.email && (
                    <div className="error">
                      {formError.email}
                      <i className="fa fa-times-circle"></i>
                    </div>
                  )}
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                  {formError.password && (
                    <div className="error">
                      {formError.password}
                      <i className="fa fa-times-circle"></i>
                    </div>
                  )}
                  <a
                    href="/"
                    style={{ float: "right", fontSize: "10px", color: "red" }}
                  >
                    Forgot Password?
                  </a>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Remmber me."
                    style={{ color: "#6c757d", fontSize: "14px" }}
                  />
                  <br></br>

                  {/* <Form.Text className="text-muted">
               By signing up, you agree to our Terms of Use and Privacy Policy
                </Form.Text> */}
                </Form.Group>
                <Button variant="primary" type="submit" className="Authbtn">
                  Sign In
                </Button>

                <Form.Text className="text-muted">
                  Don't have an account yet ?{" "}
                  <Link to="/register">Sign up</Link>
                </Form.Text>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
