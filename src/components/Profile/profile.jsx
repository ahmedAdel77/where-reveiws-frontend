import React, { Component } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
// import auth from "../../reducers/auth";
// import { Link } from "react-router-dom";
// import axios from "axios";
import Header from '../header';
import Footer from '../footer';
// const getData = async () => {

//   const res = await axios.post("http://localhost:3000/auth", body, config);
//   console.log(res);
// }

class Profile extends Component {
    state = {};
    // http://localhost:3000/auth get

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="ProfileContainer">
                    <Container>
                        <Col>
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Welcome Esra
                            </p>
                            <br></br>
                        </Col>
                    </Container>
                    <div className="headerprofile">
                        <Container>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col lg="2">
                                            <div>
                                                <img
                                                    src="img/profile.png"
                                                    alt="profileimg"
                                                    className="profileImg"
                                                    style={{ width: '80%' }}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg="2">
                                            <div>
                                                <p>Contributions</p>
                                                <p
                                                    style={{
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    45
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="2">
                                            <p>Followers</p>
                                            <p style={{ fontWeight: 'bold' }}>
                                                1,239
                                            </p>
                                        </Col>
                                        <Col lg="2">
                                            <p>Following</p>
                                            <p style={{ fontWeight: 'bold' }}>
                                                528
                                            </p>
                                        </Col>
                                        <Col lg="4">
                                            <p style={{ textAlign: 'right' }}>
                                                <Button
                                                    type="submit"
                                                    className="Authbtn"
                                                    variant="outline-dark"
                                                >
                                                    Edit Profile
                                                </Button>
                                                <Button
                                                    type="submit"
                                                    className="Authbtn"
                                                    variant="outline-dark"
                                                >
                                                    <i
                                                        class="fas fa-cog"
                                                        size="sm"
                                                    ></i>
                                                </Button>
                                            </p>
                                            {/* <p style={{ textAlign: "right" }}>0</p> */}
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <div className="profileNav">
                            <Nav
                                activeKey="/home"
                                onSelect={(selectedKey) =>
                                    alert(`selected ${selectedKey}`)
                                }
                            >
                                <Nav.Item>
                                    <Nav.Link
                                        to="/home"
                                        style={{
                                            borderBottom: '2px solid green',
                                        }}
                                    >
                                        Activity feeds{' '}
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Trips</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">
                                        Photos
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">
                                        Photos
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>

                    <div className="headerprofile2">
                        <Container fluid>
                            <Row>
                                <Col
                                    md={3}
                                    style={{ marginRight: '20px' }}
                                    className="introContainer"
                                >
                                    <div className="intro ">
                                        <h6>Intro</h6>
                                        <div style={{ marginBottom: '5px' }}>
                                            <i class="fas fa-map-marker-alt"></i>{' '}
                                            &nbsp;
                                            <span>Cairo, Egypt</span>
                                        </div>
                                        <div style={{ marginBottom: '5px' }}>
                                            <i class="fas fa-calendar-alt"></i>{' '}
                                            &nbsp;
                                            <span>Joined in Jun 2020</span>
                                        </div>
                                        <div style={{ marginBottom: '5px' }}>
                                            <i class="fas fa-plus"></i> &nbsp;
                                            <span>Add a website</span>
                                        </div>
                                        <div style={{ marginBottom: '5px' }}>
                                            <i class="fas fa-plus"></i> &nbsp;
                                            <span>
                                                {' '}
                                                Write some details about
                                                yourself
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="introContainer">
                                    {/* <div className="fillPost">
                    <h5>Fill Out Your Profile</h5>
                    <p>
                      Add photos and info to your profile so people can find you
                      easily and get to know you better!
                    </p>
                  </div> */}

                                    <div className="postReview">
                                        <img
                                            src="./img/profile.png"
                                            alt="review"
                                            style={{ width: '10%' }}
                                        />
                                        &nbsp;Esra
                                        <p
                                            style={{
                                                fontSize: '10px',
                                                marginLeft: '10px',
                                                color: '#888',
                                            }}
                                        >
                                            YesterdY
                                        </p>
                                        <div className="rate">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <h4>This is Egypt </h4>
                                        <p>
                                            the pyramids are huge and it was so
                                            hot there sand i liked the indide
                                            there are stone creatures there are
                                            fake doors there are lotsof
                                            atractons there
                                        </p>
                                    </div>
                                </Col>
                                <Col md={1}></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col
                                    md={3}
                                    style={{ marginRight: '20px' }}
                                    className="introContainer"
                                >
                                    <div className="intro ">
                                        <h6>Share your travel advice</h6>
                                        <div style={{ marginBottom: '5px' }}>
                                            <i class="fas fa-camera"></i> &nbsp;
                                            <span>Post Photo</span>
                                        </div>
                                        <div style={{ marginBottom: '5px' }}>
                                            <i class="fas fa-edit"></i> &nbsp;
                                            <span>Write Review</span>
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col md={6}></Col> */}
                                {/* <Col md={1}></Col> */}
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Profile;
