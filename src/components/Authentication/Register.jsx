import React, { Component } from 'react';


import {Container,Row,Col,Form,Button} from 'react-bootstrap';

class Register extends Component {
    state = {  }
    render() { 
        return (
       <React.Fragment>
        <div className="AuthContainer">
            
        <Container fluid>
        <h5 style={{textAlign:'left',paddingLeft:'50px'}}>W H E R E <span style={{color:'#ffc107',fontWeight:'bold'}}>?</span></h5>
        <Row>
            
            <Col lg={4}>
                <div className="AuthPic">
                <img src="img/Auth.jpg" alt="AuthPic"/>
                </div>
            </Col>
            <Col lg={8}>
        <Form className="AuthForm">
           <div className="Authwelcome">
           <h2>Welcome To Our Website </h2>
            <p>Please Fill Your Personal Details </p>
           </div>
           <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          
           
              <br></br>

            <Button variant="primary" type="submit" className="Authbtn">
                Sign Up
            </Button>
           
            <Form.Text className="text-muted">
            By signing up, you agree to our <a href="/">Terms of Use </a>and <a href="/">Privacy Policy</a>
             </Form.Text>
         </Form>
            </Col>
        </Row>
        </Container>
        </div>

        </React.Fragment>);
    }
}
 
export default Register;