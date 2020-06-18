import React, { Component } from 'react';
 import {Container,Row,Col} from 'react-bootstrap';
class Authentication extends Component {
    state = {  }
    render() { 
        return (
       <React.Fragment>
        <div className="esso">
        <Container>
        <Row>
            <Col>Hello <i class="fas fa-file-import"></i></Col>
            <Col>Welcome</Col>
        </Row>
        </Container>
        </div>

        </React.Fragment>);
    }
}
 
export default Authentication;