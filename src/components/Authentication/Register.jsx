import React, { useState } from "react";
import Joi from "joi-browser";
//import axios from "axios";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [formError, setFormError] = useState({});

  //Destraction
  const { name, email, password, password2 } = formData;
  // const {errors} = formError;

  const schema = {
    name: Joi.string().required().min(2).label("Name"),
    email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Email"),
    password: Joi.string().required().min(4).label("Password"),
    password2: Joi.string().required().min(4).label("Password"),
    // password2:Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
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
    if (password !== password2) {
      console.log("Passwords do not match", "danger");
    }

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

      //BackEnd
      //   const newUser = {
      //     name,
      //     email,
      //     password,
      //   };
      //   try {
      //     const config = {
      //       headers: {
      //         "Content-Type": "application/json",
      //       }
      //     };
      //     const body = JSON.stringify(newUser);
      //     const res = await axios.post('/users',body,config);
      //     console.log(res.data);

      //   } catch (err) {
      //       console.log(err.response.data);
      //     }
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

  return (
    <React.Fragment>
      <div className="AuthContainer">
        <Container fluid>
          <h5 style={{ textAlign: "left", paddingLeft: "50px" }}>
            W H E R E{" "}
            <span style={{ color: "#ffc107", fontWeight: "bold" }}>?</span>
          </h5>
          <Row>
            <Col lg={4}>
              <div className="AuthPic">
                <img src="img/Auth.jpg" alt="AuthPic" />
              </div>
            </Col>
            <Col lg={8}>
              <Form className="AuthForm" onSubmit={(e) => onSubmit(e)}>
                <div className="Authwelcome">
                  <h2>Welcome To Our Website </h2>
                  <p>Please Fill Your Personal Details </p>
                </div>
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                  {formError.name && (
                    <div className="error">
                      {formError.name}
                      <i className="fa fa-times-circle"></i>
                    </div>
                  )}
                </Form.Group>

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
                </Form.Group>

                <Form.Group controlId="password2">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={(e) => onChange(e)}
                  />
                  {formError.password2 && (
                    <div className="error">
                      {formError.password2}
                      <i className="fa fa-times-circle"></i>
                    </div>
                  )}
                </Form.Group>

                <br></br>

                <Button variant="primary" type="submit" className="Authbtn">
                  Sign Up
                </Button>

                <Form.Text className="text-muted">
                  By signing up, you agree to our <a href="/">Terms of Use </a>
                  and <a href="/">Privacy Policy</a>
                </Form.Text>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;
