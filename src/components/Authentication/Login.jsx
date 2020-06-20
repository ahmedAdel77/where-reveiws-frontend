import React, { Component } from 'react';


 import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';




class Login extends Component {
    state = {  }
    render() { 
        return (
       <React.Fragment>
        <div className="AuthContainer">
            
        <Container fluid>
        <h5 style={{textAlign:'left',paddingLeft:'50px'}}>W H E R E <span style={{color:'#ffc107',fontWeight:'bold'}}>?</span></h5>
        <Row>
            
            <Col md={4}>
                <div className="AuthPic">
                <img src="img/Auth.jpg" alt="AuthPic"/>
                </div>
            </Col>
            <Col md={8}>
        <Form className="AuthForm">
           <div className="Authwelcome">
           <h2>Hello ,Welcome Back ! </h2>
            <p>Please Login To Your Account</p>
           </div>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
                <a href="/" style={{float:"right",fontSize:'10px',color:'red'}}>Forgot Password?</a>
            </Form.Group>
          
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remmber me."
                 style={{color:'#6c757d',fontSize:'14px'
            }}/>
              <br></br>

               {/* <Form.Text className="text-muted">
               By signing up, you agree to our Terms of Use and Privacy Policy
                </Form.Text> */}

            </Form.Group>
            <Button variant="primary" type="submit" className="Authbtn">
                Sign In
            </Button>
           
            <Form.Text className="text-muted">
               Don't have an account yet ?  <Link to="/register">Sign up</Link>
             </Form.Text>
         </Form>
            </Col>
        </Row>
        </Container>
        </div>

        </React.Fragment>);
    }
}
 
export default Login;